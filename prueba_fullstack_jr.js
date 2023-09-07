// 1 punto reto desarrollo fullstack Jr

const entrada = [28, 53, 10, 41, 46];
const S = 4;

function modificarNumeros(lista, S) {
  const nuevaLista = [];

  for (let i = 0; i < lista.length; i++) {
    let numero = lista[i].toString();
    let numeroModificado = "";

    for (let j = 0; j < numero.length; j++) {
      const digito = parseInt(numero[j]);

      if (digito < S) {
        numeroModificado += digito;
      }
    }

    if (numeroModificado !== "") {
      nuevaLista.push(parseInt(numeroModificado));
    }
  }

  return nuevaLista;
}

const resultado = modificarNumeros(entrada, S);
console.log(resultado);


// 2 punto reto desarrollo fullstack Jr

const int = [3, 6, 8, 2, 5, 7];
const R = 44; 

function cuadradosOrdenados(arr, R) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
      const cuadrado = arr[i] * arr[i];
      
      if (cuadrado <= R) {
        result.push(cuadrado);
      }
    }
    
    return result;
  }
  
  const result = cuadradosOrdenados(int, R);
  console.log(result);

// 3 punto reto de desarrollo fullstack Jr

const monedas = [1, 5, 1, 1, 1, 10, 15, 20, 100];
const monedas2 = [5, 7, 1, 1, 2, 3, 22];

function minNoCambio(coins) {
  coins.sort((a, b) => a - b);
  let minCambio = 1;

  for (let i = 0; i < coins.length; i++) {
    
    if (coins[i] <= minCambio) {
      minCambio += coins[i];
    } else {
    
      break;
    }
  }

  return minCambio;
}

const cash = minNoCambio(monedas);
const cash2 = minNoCambio(monedas2);
console.log(cash);
console.log(cash2);
