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

// number button event handler function
function insertNum(num){
    if(document.getElementById('pinNumber').value != ''){
        document.getElementById('user-input').value = document.getElementById('user-input').value + num;
    }
    else {
        alert('Press the "Generate Pin" button and generate the pin first.');
    }
}

// submit button event handler
let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', function() {
        if(document.getElementById('pinNumber').value != ''){
            alert('clcik');
            let pinNumber = document.getElementById('pinNumber').value;
            let userInput = document.getElementById('user-input').value;
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
        }
    });



// cancel button event handler function
function cancel() {
    document.getElementById('pinNumber').value = '';
    document.getElementById('user-input').value = '';
};

// backspace button event handler function
function backspace(){
    let exp = document.getElementById('user-input').value;
    document.getElementById('user-input').value = exp.slice(0, exp.length -1);
};
