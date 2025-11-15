let puntoUsusario = 0;
let puntoOrdenador = 0;
const botones = document.querySelectorAll("button[data-jugada]");
const resultadosDisplay = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");

const opciones = ["Piedra", "Papel", "Tijera"];

function juagadaOrdenador() {
  const random = Math.floor(Math.random() * 3);
  return opciones[random];
}

function obtenerResultado(usuario, ordenador) {
  if (usuario === ordenador) {
    return "Empate";
  } else if (
    (usuario === "Piedra" && ordenador === "Tijera") ||
    (usuario === "Papel" && ordenador === "Piedra") ||
    (usuario === "Tijera" && ordenador === "Papel")
  ) {
    return "Ganaste";
  } else {
    return "Perdiste";
  }
}

function actulizarPuntos(resultado) {
  if (resultado === "Ganaste") {
    resultadosDisplay.textContent = "GANASTE";
    puntoUsusario++;
    contadorUsuario.innerHTML = `${puntoUsusario}`;
  } else if (resultado === "Perdiste") {
    resultadosDisplay.textContent = "PERDISTE";
    puntoOrdenador++;
    contadorOrdenador.innerHTML = `${puntoOrdenador}`;
  } else {
    resultadosDisplay.textContent = "EMPATE";
  }
}

botones.forEach((boton) =>
  boton.addEventListener("click", () => {
    const jugadaUsuario = boton.dataset.jugada;
    const jugadaPc = juagadaOrdenador();
    const resultado = obtenerResultado(jugadaUsuario, jugadaPc);
    actulizarPuntos(resultado);
  })
);
