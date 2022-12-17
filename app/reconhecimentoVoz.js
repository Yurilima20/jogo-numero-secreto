const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak (e){
    // veja que podemos criar variavel aqui sem declarar js é mais solto
    chute = e.results[0][0].transcript;
    console.log(e)
    //função aqui
    exibeChuteTela(chute);  
    verificarSeOChutePossuiUmValorValido(chute); 
}

function exibeChuteTela (chute){
    //aqui vamos acrescentar dentro do html, no caso criar uma divi e tudo
    // porém veja que o parametro chute que passamos, passamos em dolar, para pegar no arquivo js
    elementoChute.innerHTML = `
        <div> Você disse </div>
        <span class="box"> ${chute} </span>
    `
}

recognition.addEventListener('end', () => recognition.start());