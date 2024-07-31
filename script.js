// Adivina el numero secreto
const numeroSecreto = Math.floor(Math.random() * 10 + 1);

function adivinarNumero() {
    const numeroJugador = parseInt(document.getElementById('numeroJugador').value, 10);
    const resultado = document.getElementById('resultado');

    if (numeroJugador === numeroSecreto) {
        resultado.textContent = "¡Felicidades, adivinaste el número secreto!";
        resultado.style.color = 'green';
    } else if (numeroJugador < numeroSecreto) {
        resultado.textContent = "El número es demasiado bajo, intenta de nuevo.";
        resultado.style.color = 'red';
    } else {
        resultado.textContent = "El número es muy alto, intenta de nuevo.";
        resultado.style.color = 'red';
    }
}
