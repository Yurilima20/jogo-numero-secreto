function verificarSeOChutePossuiUmValorValido(chute){
    const numero = +chute;

    if(ChuteForinvalido(numero)){

        if (chute.toUpperCase() === "GAME OVER"){
            document.body.innerHTML = `
            <h2> GAME OVER  !!! </h2> 
            <h3> Pressione o botão para jogar novamente </h3> 
            <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente </button>
            `
            document.body.style.background = "black";

        } else {
            elementoChute.innerHTML += '<div> Valor inválido </div>';
        }
        return;
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `
        <div> Valor inválido: o número secreto precisa 
        estar entre ${menorValor} e ${maiorValor} </div> 
        `;
        return;
    }

    if( numero === numeroSecreto){
        document.body.innerHTML = `
        <h2> Você acertou !!! </h2>
        <h3> O número secreto era ${numeroSecreto}</h3> 
        <button id="jogar-novamente" class="btn-jogar"> Jogar Novamente </button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div> o número secreto é menor  <i class="fa-solid fa-arrow-down-long"></i></div> 
        `
    } else {
        elementoChute.innerHTML += `
        <div> o número secreto é maior  <i class="fa-solid fa-arrow-up-long"></i></div> 
        `
    }
}

function ChuteForinvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    console.log(e);
    if(e.target.id == "jogar-novamente"){
        window.location.reload();
    }
} )