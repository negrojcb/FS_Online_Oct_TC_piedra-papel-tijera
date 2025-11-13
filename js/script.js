const piedra = document.querySelector('button[data-jugada="0"]');
const papel = document.querySelector('button[data-jugada="1"]');
const tijera = document.querySelector('button[data-jugada="2"]');
const puntoUsusario = 0;
const puntoOrdenador = 0;
const resultados = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-Ordenador");

const opciones = [piedra, papel, tijera];
console.log(opciones);

function jugada() {
  opciones.forEach((element) =>
    element.addEventListener("click", function () {
      const jugadaUsuario = element.dataset.jugada;
      const juagadaordenador = Math.floor(Math.random() * 3);
      if (jugadaUsuario > juagadaordenador) {
        console.log("Ganaste");
      } else if (jugadaUsuario < juagadaordenador) {
        console.log("Perdiste");
      } else {
        console.log("Empate");
      }
    })
  );
}
jugada();
