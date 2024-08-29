let rojo = 0;
let verde = 0;
let azul = 0;

let botones = {
    aumentar: {
        rojo: document.getElementById("aumentarRojo"),
        verde: document.getElementById("aumentarVerde"),
        azul: document.getElementById("aumentarAzul")
    },
    disminuir: {
        rojo: document.getElementById("disminuirRojo"),
        verde: document.getElementById("disminuirVerde"),
        azul: document.getElementById("disminuirAzul")
    }
};

let colorCodigos = {
    rojo: document.getElementById("colorCodigoRojo"),
    verde: document.getElementById("colorCodigoVerde"),
    azul: document.getElementById("colorCodigoAzul")
};

function actualizarColor() {
    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
    colorCodigos.rojo.innerText = `rgb(${rojo}, 0, 0)`;
    colorCodigos.verde.innerText = `rgb(0, ${verde}, 0)`;
    colorCodigos.azul.innerText = `rgb(0, 0, ${azul})`;
}

function cambiarColor(componente, operacion) {
    if (operacion === "aumentar" && componente === "rojo" && rojo < 255) rojo += 5;
    if (operacion === "disminuir" && componente === "rojo" && rojo > 0) rojo -= 5;

    if (operacion === "aumentar" && componente === "verde" && verde < 255) verde += 5;
    if (operacion === "disminuir" && componente === "verde" && verde > 0) verde -= 5;

    if (operacion === "aumentar" && componente === "azul" && azul < 255) azul += 5;
    if (operacion === "disminuir" && componente === "azul" && azul > 0) azul -= 5;

    actualizarColor();
}

const componentes = ["rojo", "verde", "azul"];

for (let i = 0; i < componentes.length; i++) {
    const componente = componentes[i];

    botones.aumentar[componente].addEventListener("click", () => cambiarColor(componente, "aumentar"));
    botones.disminuir[componente].addEventListener("click", () => cambiarColor(componente, "disminuir"));
}
