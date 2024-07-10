function calcular() {
    const operacion = document.getElementById('operacion').value;
    const num = parseInt(document.getElementById('num1').value);
    let resultado = 0;

    switch (operacion) {
        case 'suma':
            resultado = sumar(num);
            break;
        case 'producto':
            resultado = producto(num);
            break;
        case 'pares':
            resultado = sumarPares(num);
            break;
        case 'impares':
            resultado = sumarImpares(num);
            break;
        default:
            resultado = 'Seleccione una operación válida';
    }

    document.getElementById('resultado').textContent = resultado;
}

function sumar(n) {
    let suma = 0;
    let i = 1;
    while (i <= n) {
        suma += i;
        i++;
    }
    return 'La suma de los números del 1 al ' + n + ' es ' + suma ;
}

function producto(n) {
    let prod = 1;
    let i = 1;
    while (i <= n) {
        prod *= i;
        i++;
    }
    return 'El producto de los números del 1 al ' + n + ' es ' + prod;
}

function sumarPares(n) {
    let sumaPares = 0;
    let numerosPares = '';
    let i = 1;
    while (i <= n) {
        if (i % 2 === 0) {
            sumaPares += i;
            numerosPares += i + ' ';
        }
        i++;
    }
    return 'La suma de los números pares del 1 al ' + n + ' es ' + sumaPares + '. Números pares: ' + numerosPares;
}

function sumarImpares(n) {
    let sumaImpares = 0;
    let numerosImpares = '';
    let i = 1;
    while (i <= n) {
        if (i % 2 !== 0) {
            sumaImpares += i;
            numerosImpares += i + ' ';
        }
        i++;
    }
    return 'La suma de los números impares del 1 al ' + n + ' es ' + sumaImpares + '. Números impares: ' + numerosImpares;
}
