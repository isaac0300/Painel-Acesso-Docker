const telaLogin = document.getElementById("tela-login");
const telaPainel = document.getElementById("tela-painel");
const formLogin = document.getElementById("form-login");
const formRegistro = document.getElementById("form-registro");
const lista = document.getElementById("lista");
const erroLogin = document.getElementById("erro-login");

formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  const res = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario, senha }),
  });

  if (!res.ok) {
    erroLogin.textContent = "Usuário ou senha inválidos.";
    return;
  }

  const dados = await res.json();
  document.getElementById("nome-usuario").textContent = dados.usuario;
  telaLogin.classList.add("escondido");
  telaPainel.classList.remove("escondido");
  carregarRegistros();
});

async function carregarRegistros() {
  const res = await fetch("/registros");
  const registros = await res.json();
  lista.innerHTML = "";
  registros.forEach((r) => {
    const div = document.createElement("div");
    div.className = "registro";
    div.innerHTML = `<span>${r.texto}</span> <button onclick="apagarRegistro(${r.id})">Apagar</button>`;
    lista.appendChild(div);
  });
}

async function apagarRegistro(id) {
  await fetch(`/registros/${id}`, { method: "DELETE" });
  carregarRegistros();
}

formRegistro.addEventListener("submit", async (e) => {
  e.preventDefault();
  const texto = document.getElementById("texto").value;
  await fetch("/registros", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texto }),
  });
  formRegistro.reset();
  carregarRegistros();
});
