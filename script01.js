function mostrarPrecio() {
    let expr = document.getElementById("fruta").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    switch (expr) {
        case "naranjas":
            resultado.textContent = "Las naranjas cuestan $20 el kilo";
            break;
        case "manzanas":
            resultado.textContent = "Las manzanas cuestan $43 el kilo";
            break;
        case "bananas":
            resultado.textContent = "El banana está $30 el kilo";
            break;
        case "mangos":
        case "papayas":
            resultado.textContent = "Los mangos y las papayas cuestan $25 pesos";
            break;
        default:
            resultado.textContent = `Lo siento, no contamos con ${expr}`;
    }
}
