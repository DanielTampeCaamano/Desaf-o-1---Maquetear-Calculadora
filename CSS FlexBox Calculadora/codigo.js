var primerNumero = document.getElementById("primerNumero");
var segundoNumero = document.getElementById("segundoNumero");
var operador = document.getElementById("operador");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn0 = document.getElementById("btn0");
var btnC = document.getElementById("btnC");
var btnPunto = document.getElementById("btnPunto");
var btnDividir = document.getElementById("btnDividir");
var btnMultiplicar = document.getElementById("btnMultiplicar");
var btnRestar = document.getElementById("btnRestar");
var btnSumar = document.getElementById("btnSumar");
var btnOperarSumaResta = document.getElementById("btnOperarSumaResta");
var btnBorrar = document.getElementById("btnBorrar");
var btnResultado = document.getElementById("btnResultado");

btn0.addEventListener("click", function () {
    var hayOperador;
    if (!operador.firstChild.nodeValue.includes("/") &&
        !operador.firstChild.nodeValue.includes("x") &&
        !operador.firstChild.nodeValue.includes("+") &&
        !operador.firstChild.nodeValue.includes("-")) {
        var hayOperador = 0;
    } else {
        var hayOperador = 1;
    }
    switch (hayOperador) {
        case 0:
            primerNumero.innerHTML = primerNumero.firstChild.nodeValue + 0;
            break;
        case 1:
            segundoNumero.innerHTML = segundoNumero.firstChild.nodeValue + 0;
            break;

    }
});
btn1.addEventListener("click", function () {
    var hayOperador;
    if (!operador.firstChild.nodeValue.includes("/") &&
        !operador.firstChild.nodeValue.includes("x") &&
        !operador.firstChild.nodeValue.includes("+") &&
        !operador.firstChild.nodeValue.includes("-")) {
        var hayOperador = 0;
    } else {
        var hayOperador = 1;
    }
    switch (hayOperador) {
        case 0:
            primerNumero.innerHTML = primerNumero.firstChild.nodeValue + 1;
            break;
        case 1:
            segundoNumero.innerHTML = segundoNumero.firstChild.nodeValue + 1;
            break;

    }
});
btn2.addEventListener("click", function () {
    var hayOperador;
    if (!operador.firstChild.nodeValue.includes("/") &&
        !operador.firstChild.nodeValue.includes("x") &&
        !operador.firstChild.nodeValue.includes("+") &&
        !operador.firstChild.nodeValue.includes("-")) {
        var hayOperador = 0;
    } else {
        var hayOperador = 1;
    }
    switch (hayOperador) {
        case 0:
            primerNumero.innerHTML = primerNumero.firstChild.nodeValue + 2;
            break;
        case 1:
            segundoNumero.innerHTML = segundoNumero.firstChild.nodeValue + 2;
            break;

    }
});
btn3.addEventListener("click", function () {
    var hayOperador;
    if (!operador.firstChild.nodeValue.includes("/") &&
        !operador.firstChild.nodeValue.includes("x") &&
        !operador.firstChild.nodeValue.includes("+") &&
        !operador.firstChild.nodeValue.includes("-")) {
        var hayOperador = 0;
    } else {
        var hayOperador = 1;
    }
    switch (hayOperador) {
        case 0:
            primerNumero.innerHTML = primerNumero.firstChild.nodeValue + 3;
            break;
        case 1:
            segundoNumero.innerHTML = segundoNumero.firstChild.nodeValue + 3;
            break;

    }
});
btn4.addEventListener("click", function () {
    var hayOperador;
    if (!operador.firstChild.nodeValue.includes("/") &&
        !operador.firstChild.nodeValue.includes("x") &&
        !operador.firstChild.nodeValue.includes("+") &&
        !operador.firstChild.nodeValue.includes("-")) {
        var hayOperador = 0;
    } else {
        var hayOperador = 1;
    }
    switch (hayOperador) {
        case 0:
            primerNumero.innerHTML = primerNumero.firstChild.nodeValue + 4;
            break;
        case 1:
            segundoNumero.innerHTML = segundoNumero.firstChild.nodeValue + 4;
            break;

    }
});
btn5.addEventListener("click", function () {
    var hayOperador;
    if (!operador.firstChild.nodeValue.includes("/") &&
        !operador.firstChild.nodeValue.includes("x") &&
        !operador.firstChild.nodeValue.includes("+") &&
        !operador.firstChild.nodeValue.includes("-")) {
        var hayOperador = 0;
    } else {
        var hayOperador = 1;
    }
    switch (hayOperador) {
        case 0:
            primerNumero.innerHTML = primerNumero.firstChild.nodeValue + 5;
            break;
        case 1:
            segundoNumero.innerHTML = segundoNumero.firstChild.nodeValue + 5;
            break;

    }
});
btn6.addEventListener("click", function () {
    var hayOperador;
    if (!operador.firstChild.nodeValue.includes("/") &&
        !operador.firstChild.nodeValue.includes("x") &&
        !operador.firstChild.nodeValue.includes("+") &&
        !operador.firstChild.nodeValue.includes("-")) {
        var hayOperador = 0;
    } else {
        var hayOperador = 1;
    }
    switch (hayOperador) {
        case 0:
            primerNumero.innerHTML = primerNumero.firstChild.nodeValue + 6;
            break;
        case 1:
            segundoNumero.innerHTML = segundoNumero.firstChild.nodeValue + 6;
            break;

    }
});
btn7.addEventListener("click", function () {
    var hayOperador;
    if (!operador.firstChild.nodeValue.includes("/") &&
        !operador.firstChild.nodeValue.includes("x") &&
        !operador.firstChild.nodeValue.includes("+") &&
        !operador.firstChild.nodeValue.includes("-")) {
        var hayOperador = 0;
    } else {
        var hayOperador = 1;
    }
    switch (hayOperador) {
        case 0:
            primerNumero.innerHTML = primerNumero.firstChild.nodeValue + 7;
            break;
        case 1:
            segundoNumero.innerHTML = segundoNumero.firstChild.nodeValue + 7;
            break;

    }
});
btn8.addEventListener("click", function () {
    var hayOperador;
    if (!operador.firstChild.nodeValue.includes("/") &&
        !operador.firstChild.nodeValue.includes("x") &&
        !operador.firstChild.nodeValue.includes("+") &&
        !operador.firstChild.nodeValue.includes("-")) {
        var hayOperador = 0;
    } else {
        var hayOperador = 1;
    }
    switch (hayOperador) {
        case 0:
            primerNumero.innerHTML = primerNumero.firstChild.nodeValue + 8;
            break;
        case 1:
            segundoNumero.innerHTML = segundoNumero.firstChild.nodeValue + 8;
            break;

    }
});
btn9.addEventListener("click", function () {
    var hayOperador;
    if (!operador.firstChild.nodeValue.includes("/") &&
        !operador.firstChild.nodeValue.includes("x") &&
        !operador.firstChild.nodeValue.includes("+") &&
        !operador.firstChild.nodeValue.includes("-")) {
        var hayOperador = 0;
    } else {
        var hayOperador = 1;
    }
    switch (hayOperador) {
        case 0:
            primerNumero.innerHTML = primerNumero.firstChild.nodeValue + 9;
            break;
        case 1:
            segundoNumero.innerHTML = segundoNumero.firstChild.nodeValue + 9;
            break;

    }
});
btnPunto.addEventListener("click", function () {
    var hayOperador;
    if (!operador.firstChild.nodeValue.includes("/") &&
        !operador.firstChild.nodeValue.includes("x") &&
        !operador.firstChild.nodeValue.includes("+") &&
        !operador.firstChild.nodeValue.includes("-")) {
        var hayOperador = 0;
    } else {
        var hayOperador = 1;
    }
    switch (hayOperador) {
        case 0:
            if (!primerNumero.firstChild.nodeValue.includes(".")) {
                primerNumero.innerHTML = primerNumero.firstChild.nodeValue + ".";
            }
            break;
        case 1:
            if (!segundoNumero.firstChild.nodeValue.includes(".")) {
                segundoNumero.innerHTML = segundoNumero.firstChild.nodeValue + ".";
            }
            break;
    }
});
btnBorrar.addEventListener("click", function () {
    var hayOperador;
    if (!operador.firstChild.nodeValue.includes("/") &&
        !operador.firstChild.nodeValue.includes("x") &&
        !operador.firstChild.nodeValue.includes("+") &&
        !operador.firstChild.nodeValue.includes("-")) {
        var hayOperador = 0;
    } else {
        var hayOperador = 1;
    }
    switch (hayOperador) {
        case 0:
            
            var lista = primerNumero.firstChild.nodeValue.split("");
            lista[lista.length-1]="";
            var cadena=lista.join("");
            primerNumero.firstChild.nodeValue =cadena;
            break;
        case 1:
            var lista = segundoNumero.firstChild.nodeValue.split("");
            lista[lista.length-1]="";
            var cadena=lista.join("");
            segundoNumero.firstChild.nodeValue=cadena;
            
            break;

    }
});
btnDividir.addEventListener("click", function () {
    operador.innerHTML = "/";
});
btnMultiplicar.addEventListener("click", function () {
    operador.innerHTML = "x";
});
btnRestar.addEventListener("click", function () {
    operador.innerHTML = "-";
});
btnSumar.addEventListener("click", function () {
    operador.innerHTML = "+";
});
btnC.addEventListener("click", function () {
    primerNumero.firstChild.nodeValue = "";
    operador.firstChild.nodeValue = "";
    segundoNumero.firstChild.nodeValue = "";
});
