const msgEl = document.getElementById('msg');

// generate random number between 1 and 100
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

const randomNum = getRandomNumber();
console.log(randomNum);

window.SpeechRecognition = 
window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const recognition = new window.SpeechRecognition();
// start recognition and game
recognition.start();

// capture user speech

function onSpeak(event) {
    console.log(event);
    const msg = event.results[0][0].transcript;
    console.log(msg);
    writeMessage(msg);
}

// listen to and handle the speech event 

recognition.addEventListener('result', onSpeak);

// See in the DOM what the user has spoken
function writeMessage(msg) {
    msgEl.innerHTML = `
        <div>You said: </div>
        <span class="box">${msg}</span>
    `;
}