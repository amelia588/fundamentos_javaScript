// switch
let expr = "papayas";

switch (expr.toLowerCase()) {
    case "naranjas":
        console.log("Las naranjas cuestan $20 el kilo");
        break;
    case "manzanas":
        console.log("Las manzanas cuestan $43 el kilo");
        break;
    case "bananas":
        console.log("El banana está $30 el kilo");
        break;
    case "mangos":
    case "papayas":
        console.log("Los mangos y las papayas cuestan $25 pesos");
        break;
    default:
        console.log(`Lo siento, no contamos con ${expr}`);
}
