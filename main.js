// Funciones matematicas

function ingresarNumero(){
    let num;
    do{
        num = parseInt(prompt(`Ingrese un numero entre 0 - 100`));
        console.log(num);
    }
    while((num > 100) || (num < 0));
    return num;
}

function esPar(x){
    if(x % 2 == 0){
        console.log(`${x} es par`);
    }
    else{
        console.log(`${x} es impar`)
    }
    return; 
}

const alCuadrado = function (y) {
    return y * y;
}

const divisible = (a,b) =>{
    if((a % b) == 0){
        console.log(`${a} es divisible por ${b}`);
    }
    else{
        console.log(`${a} no es divisible por ${b}`);
    }
}

const numero1 = ingresarNumero();
esPar(numero1);
console.log(`El cuadrado de ${numero1} es ${alCuadrado(numero1)}`);
const numero2 = ingresarNumero();
divisible(numero1, numero2);






