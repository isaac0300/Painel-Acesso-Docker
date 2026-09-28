const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

const DB_FILE = path.join(__dirname, "db.json");

function readDB() {
  if (!fs.existsSync(DB_FILE)) {
    return { usuarios: [{ usuario: "admin", senha: "123456" }], registros: [] };
  }
  return JSON.parse(fs.readFileSync(DB_FILE));
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// LOGIN - mesmo padrão do Projeto Sentinela: usuario/senha comparados
// direto contra o que está gravado no db.json.
app.post("/login", (req, res) => {
  const db = readDB();
  const user = db.usuarios.find(
    (u) => u.usuario === req.body.usuario && u.senha === req.body.senha
  );
  if (!user) {
    return res.status(401).json({ erro: "Usuário ou senha inválidos" });
  }
  res.json({ usuario: user.usuario });
});

app.get("/registros", (req, res) => {
  const db = readDB();
  res.json(db.registros);
});

app.post("/registros", (req, res) => {
  const db = readDB();
  const novo = { id: Date.now(), texto: req.body.texto };
  db.registros.push(novo);
  writeDB(db);
  res.json(novo);
});

app.delete("/registros/:id", (req, res) => {
  const db = readDB();
  db.registros = db.registros.filter((r) => String(r.id) !== req.params.id);
  writeDB(db);
  res.json({ ok: true });
});

app.listen(3002, () => console.log("Painel de Acesso rodando na porta 3002"));
