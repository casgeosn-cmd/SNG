//// SPEAK NUMBER SECTION

const msgEl = document.getElementById('msg');

// generate random number between 1 and 100
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

const randomNum = getRandomNumber();
console.log(randomNum);

window.SpeechRecognition = 
window.SpeechRecognition || window.webkitSpeechRecognitionEvent;

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
    let num = Number(msg); // This is now a let instead of const 
    //update the value of num if it's a single-digit number
    if (msg === 'one' || msg === 'won') {
        num = 1;
    } else if (msg === 'two') {
        num = 2;
    } else if (msg === 'three') {
        num = 3;
    } else if (msg === 'four') {
        num = 4;
    } else if (msg === 'five') {
        num = 5;
    } else if (msg === 'six') {
        num = 6;
    } else if (msg === 'seven') {
        num = 7;
    } else if (msg === 'eight') {
        num = 8;
    } else if (msg === 'nine') {
        num = 9;
  }

  } // convert to number after adjustments
 
    // check if msg is a valid number


    if (Number.isNaN(num)) {
        const div = document.createElement('div');
        div.textContent = 'That is not a valid number';
        msgEl.innerHTML = '';
        msgEl.appendChild(div);
        
    }
// edge cases
    if (msg === 'one' || msg === 'won') {
        console.log('adjusting to 1')
        msg = 1;
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
        h2.textContent = `Congrats! You have guessed the number! It waws ${num}`;

        const button = document.createElement('button');
        button.classList.add('play-again');
        button.id = 'play-again';
        button.textContent = 'Play Again';
       
        /// add listener and handler to button 
        button.addEventListener('click', () => window.location.reload());
        
        // clear out innerHTML of msgEl
        msgEl.innerHTML = '';
        msgEl.append(h2, button);
    }

    else if (num > randomNum) {
        const div = document.createElement('div');
        div.textContent = 'GO LOWER';
        
        msgEl.innerHTML = '';
        msgEl.appendChild(div);
        return;
    } else {
        const div = document.createElement('div');
        div.textContent = 'GO HIGHER';

        msgEl.innerHTML = '';
        msgEl.appendChild(div);
    }





///// DAD JOKE SECTION
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');


    // refactor with async await
jokeBtn.addEventListener('click', generateJoke);
    async function generateJoke() {
        let config = {
            header: {
                Accept:'application/json',
            },
        };
    
        const res= await fetch('https://icanhazdadjoke.com/', config);
        const data = await res.json();
        
        jokeEl.textContent = data.joke;
        }

        //listeners
        

