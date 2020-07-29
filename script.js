// pin generator event handler
let generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', function() {
    let pinNumber = pinGenerator();
    document.getElementById('pinNumber').value = pinNumber;
});

function pinGenerator(){
    let pinNumber = Math.round(Math.random() * 9999);

    if(pinNumber >= 1000 && pinNumber <= 9999) {
        return pinNumber;
    }
    else {
        return pinGenerator();
    }
}

// number button event handler
let number = document.getElementsByClassName('number');
for(var i = 0; i < number.length - 1; i++) {
    let userInput = document.getElementById('user-input');
    number[i].addEventListener('click', function() {
        userInput.value = userInput.value + this.id; 
    });
}

// submit button event handler
let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function() {
    let pinNumber = document.getElementById('pinNumber').value;
    let userInput = document.getElementById('user-input').value;
    console.log(pinNumber, userInput);
    if(pinNumber == userInput) {
        document.getElementById('verify-message').style.display = 'block';
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('user-input').value = '';
    }
    else {
        document.getElementById('verify-message').style.display = 'none';
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('user-input').value = '';
    }
});

//cancel button event handler 
let cancelBtn = document.getElementById('cancel');
cancelBtn.addEventListener('click', function() {
    document.getElementById('pinNumber').value = '';
    document.getElementById('user-input').value = '';
});

// backspace button event handler
let backspaceBtn = document.getElementById('backspace');
backspaceBtn.addEventListener('click', function(){
    let exp = document.getElementById('user-input').value;
    exp = exp.substr(0, exp.length -1);
    document.getElementById('user-input').value = exp;
});