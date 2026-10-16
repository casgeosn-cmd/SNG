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
    checkNumber(msg);
}

// listen to and handle the speech event 

recognition.addEventListener('result', onSpeak);

// See in the DOM what the user has spoken
function writeMessage(msg) {
    const div = document.createElement('div');
    div.textContent = 'You said: ';
    const span = document.createElement('span');
    span.classList.add('box');
    span.textContent = msg;
    msgEl.appendChild(div, span);
}

// check msg against secret number
function checkNumber(msg) {
    const num = Number(msg); // msg = 'hello world
    // check if msg is a valid number


    if (Number.isNaN(num)) {
        const div = document.createElement('div');
        div.textContent = 'That is not a valid number';
        msgEl.appendChild(div);
        return;
    }

    // check if number is in range
    if (num < 1 || num > 100) {const div = document.createElement('div');
        div.textContent = 'Number must be between 1 and 100';
        msgEl.appendChild(div);
        return;
    }

    // check number and provide feedback 
    if (num === randomNum) {
        const h2 = document.createElement('h2');
        h2.textContent = `Congrats! You have guessed the number! <br> It waws ${num}`;

        const button = document.createElement('button');
        button.classList.add('play-again');
        button.id = 'play-again';
        button.textContent = 'Play Again';
    }
}