function trocos() {
    var valor = document.getElementById("valor").value;
    resultado = [];
    
    var moeda = 2;

    while (valor >= moeda) {
        valor = (valor - moeda).toFixed(2);
        resultado.push(moeda);
    }

    var moeda = 1;
    while (valor >= moeda) {
        valor = (valor - moeda).toFixed(2);
        resultado.push(moeda);
    }

    var moeda = 0.5;
    while (valor >= moeda) {
        valor = (valor - moeda).toFixed(2);
        resultado.push(moeda);
    }

    var moeda = 0.2;
    while (valor >= moeda) {
        valor = (valor - moeda).toFixed(2); 
        resultado.push(moeda);
    }

    var moeda = 0.1;
    while (valor >= moeda) {
        valor = (valor - moeda).toFixed(2);
        resultado.push(moeda);
    }

    var moeda = 0.05;
    while (valor >= moeda) {
        valor = (valor - moeda).toFixed(2);
        resultado.push(moeda);
    }

    var moeda = 0.02;
    while (valor >= moeda) {
        valor = (valor - moeda).toFixed(2);
        resultado.push(moeda);
    }

    var moeda = 0.01;
    while (valor >= moeda) {
        valor = (valor - moeda).toFixed(2);
        resultado.push(moeda);
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}




