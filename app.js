// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
  const amigoInput = document.getElementById("amigo");
  const listaAmigos = document.getElementById("listaAmigos");
  const resultadoLista = document.getElementById("resultado");
  const sortearBtn = document.querySelector(".button-draw"); // Seleccionar el botón por su clase

  let amigos = [];
  let juegoEnCurso = true; // Variable para controlar el estado del juego

  window.agregarAmigo = function () {
    if (!juegoEnCurso) return; // No permitir agregar amigos si el juego ha terminado

    const nombre = amigoInput.value.trim();

    if (nombre === "") {
      alert("Por favor, ingresa un nombre válido.");
      return;
    }

    amigos.push(nombre);
    actualizarLista();
    amigoInput.value = "";
  };

  window.sortearAmigo = function () {
    if (juegoEnCurso) {
      // Lógica del sorteo
      if (amigos.length < 2) {
        alert("Se necesitan al menos dos amigos para realizar el sorteo.");
        return;
      }

      const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
      resultadoLista.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

      // Cambiar el botón a "Reiniciar Juego" y cambiar el color
      sortearBtn.textContent = "Reiniciar Juego";
      sortearBtn.style.backgroundColor = "#bdbdbd"; // Color gris medio
      juegoEnCurso = false;
    } else {
      // Reiniciar el juego
      amigos = [];
      listaAmigos.innerHTML = "";
      resultadoLista.innerHTML = "";
      sortearBtn.textContent = "Sortear amigo";
      sortearBtn.style.backgroundColor = ""; // Restablecer el color original
      juegoEnCurso = true;
    }
  };

  function actualizarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo) => {
      const nuevoItem = document.createElement("li");
      nuevoItem.textContent = amigo;
      listaAmigos.appendChild(nuevoItem);
    });
  }
});
