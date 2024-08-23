function Soma(){
    let nOne = document.getElementById('numberOne').value; //Acessando o elemento do codigo HTML pelo ID
    let nTwo = document.getElementById('numberTwo').value; //Acessando o elemento do codigo HTML pelo ID

    let result = parseInt(nOne+nTwo);   

    let response = "Resultado = " + result;
    document.getElementById('result').innerText = response; //Acessando o elemento do codigo HTML pelo ID
}

function Subtração(){
    let nOne = document.getElementById('numberOne').value; //Acessando o elemento do codigo HTML pelo ID
    let nTwo = document.getElementById('numberTwo').value; //Acessando o elemento do codigo HTML pelo ID

    let result = nOne/nTwo;   

    let response = "Resultado = " + result;
    document.getElementById('result').innerText = response; //Acessando o elemento do codigo HTML pelo ID
}

function Multiplicar(){
    let nOne = document.getElementById('numberOne').value; //Acessando o elemento do codigo HTML pelo ID
    let nTwo = document.getElementById('numberTwo').value; //Acessando o elemento do codigo HTML pelo ID

    let result = nOne*nTwo;   

    let response = "Resultado = " + result;
    document.getElementById('result').innerText = response; //Acessando o elemento do codigo HTML pelo ID
}

function Dividir(){
    let nOne = document.getElementById('numberOne').value; //Acessando o elemento do codigo HTML pelo ID
    let nTwo = document.getElementById('numberTwo').value; //Acessando o elemento do codigo HTML pelo ID

    let result = nOne/nTwo   

    let response = "Resultado = " + result;
    document.getElementById('result').innerText = response; //Acessando o elemento do codigo HTML pelo ID
}
