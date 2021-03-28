const plusBtn = document.querySelector('#plus'),
    minusBtn = document.querySelector('#minus'),
    divideBtn = document.querySelector('#divide'),
    timesBtn = document.querySelector('#times'),
    sqrtBtn = document.querySelector('#sqrt'),
    powBtn = document.querySelector('#pow'),
    calcBtn = document.querySelector('#calc'),
    sinBtn = document.querySelector('#sin'),
    cosBtn = document.querySelector('#cos'),
    tanBtn = document.querySelector('#tan'),
    lnBtn = document.querySelector('#ln'),
    clearBtn = document.querySelector('#clear-btn'),
    delBtn = document.querySelector('#del-btn'),
    timeScreen = document.querySelector('#time-screen'),
    userInput = document.querySelector('#user-input'),
    inputScreen = document.querySelector('#input-screen'),
    outputScreen = document.querySelector('#output-screen'),
    dotKeys = document.querySelector('.dot-keys'),
    numKeys = document.querySelectorAll('.num-keys');


let x = 0,
    y = 0,
    z = '',
    preCalc = '',
    opTrig = '',
    opCalc = 'plus';


const timeFunc = () => {
    let timeNow = new Date().toLocaleTimeString("it-IT");
    timeScreen.innerText = timeNow;
}

timeFunc();
setInterval(timeFunc, 1000);

const opValue = (numKey) => {
    userInput.value += numKey.innerText;
    x = userInput.value;
    inputScreen.innerHTML = preCalc + x;
    z = x;
}

const dotValue = () => {
    const checkValue = userInput.value.includes('.');    
    if (!checkValue) {
        userInput.value += '.';
        x = userInput.value;
        inputScreen.innerHTML = preCalc + x;
    }
}

const roundCalcFunc = () => {
    y = Math.round(y * 100000) / 100000;
}

const postCalcFunc = (opSign) => {
    roundCalcFunc();
    preCalc = y + opSign;
    userInput.value = '';
    if (y === Infinity) {        
        outputScreen.innerText = 'Math error';
        opCalc = 'plus';
        x = 0;
        y = 0;
        z = '';
        preCalc = '';
        inputScreen.innerText = 0;
    } else {        
        outputScreen.innerText = y;
        inputScreen.innerText = preCalc;
    }
}

const initialTrigFunc = () => {
    roundCalcFunc();
    userInput.value = '';
    inputScreen.innerText = preCalc;
}

const postTrigFunc = (opSign) => {
    preCalc = y + opSign;
    initialTrigFunc();
}

const preTrigFunc = (opSign) => {
    preCalc = opSign;
    initialTrigFunc();
}

const clearFunc = () => {
    x = 0;
    y = 0;
    z = '';
    preCalc = '';
    userInput.value = '';
    inputScreen.innerText = 0;
    outputScreen.innerText = 0;
}

const delFunc = () => {
    if (userInput.value.length <= 1) {
        x = 0;
        z = '';
        userInput.value = '';
        inputScreen.innerHTML = preCalc + x;
    } else {
        let inputSplit = userInput.value.slice(0, -1);
        userInput.value = inputSplit;
        x = userInput.value;
        inputScreen.innerHTML = preCalc + x;
    }
}

const checkOpFunc = () => {
    if (opTrig !== '') {
        checkTrigFunc();
        z = '';
        opTrig = '';
    } else {
        inputScreen.innerText = 0;
        switch (opCalc) {
            case 'plus':
                y = parseFloat(y) + parseFloat(x);
                break;
            case 'minus':
                y = parseFloat(y) - parseFloat(x);
                break;
            case 'divide':
                y = parseFloat(y) / parseFloat(x);
                break;
            case 'multiply':
                y = parseFloat(y) * parseFloat(x);
                break;
            case 'pow':
                y = parseFloat(y) ** parseFloat(x);
                break;
            case 'sqrt':
                console.log(y);
                y = 1 / parseFloat(y);
                y = parseFloat(x) ** parseFloat(y);
                break;

            default:
                break;
        }
    }
}

const checkTrigFunc = () => {
    if (opTrig !== '') { 
        let theta = parseFloat(x) * Math.PI / 180;
        switch (opTrig) {
            case 'sin':   
                y = parseFloat(y) * Math.sin(theta);
                break;
            case 'cos':    
                y = parseFloat(y) * Math.cos(theta);
                break;
            case 'tan':     
                y = parseFloat(y) * Math.tan(theta);
                break;
                case 'ln':    
                y = parseFloat(y) * Math.log(x);
                break;
                
            default:
                break;
        }
    }
}

const trigFunc = (trigSign) => {
    if (opTrig === '') {
        y = parseFloat(x) + parseFloat(y);
        z === '' ? y = 1 : y = parseFloat(y);
        opTrig = `${trigSign}`;
        y !== 1 ? postTrigFunc(`${trigSign} `) : preTrigFunc(`${trigSign} `);
    }
}

const sinFunc = () => {
    trigFunc('sin');
}

const cosFunc = () => {
    trigFunc('cos');
}

const tanFunc = () => {
    trigFunc('tan');
}

const lnFunc = () => {
    trigFunc('ln');
}

const addFunc = () => {
    checkOpFunc();
    opCalc = 'plus';
    postCalcFunc(' + ');
}

const subFunc = () => {
    checkOpFunc();
    opCalc = 'minus';
    postCalcFunc(' - ');
}

const divFunc = () => {
    checkOpFunc();
    opCalc = 'divide';
    postCalcFunc(' / ');
}

const mulFunc = () => {
    checkOpFunc();
    opCalc = 'multiply';
    postCalcFunc(' x ');
}

const sqrtFunc = () => {
    checkOpFunc();
    opCalc = 'sqrt';
    userInput.value = '';
    preCalc = ` 
    <span><sup>${y}</sup>&Sqrt;</span>
    `;
    inputScreen.innerHTML = preCalc;
}

const powFunc = () => {
    checkOpFunc();
    opCalc = 'pow';
    postCalcFunc(' ^ ');
}

const calcFunc = () => {
    checkOpFunc();
    roundCalcFunc();
    if (y === Infinity) {        
        outputScreen.innerText = 'Math error';
    } else {        
        outputScreen.innerText = y;
    }
    opCalc = 'plus';
    x = 0;
    y = 0;
    z = '';
    preCalc = '';
    userInput.value = '';
}

numKeys.forEach(numKey => {
    numKey.addEventListener('click', () => {
        opValue(numKey);
    })
});

dotKeys.addEventListener('click', dotValue);

clearBtn.addEventListener('click', clearFunc);

delBtn.addEventListener('click', delFunc);

calcBtn.addEventListener('click', calcFunc);

plusBtn.addEventListener('click', addFunc);

minusBtn.addEventListener('click', subFunc);

divideBtn.addEventListener('click', divFunc);

timesBtn.addEventListener('click', mulFunc);

sqrtBtn.addEventListener('click', sqrtFunc);

powBtn.addEventListener('click', powFunc);

sinBtn.addEventListener('click', sinFunc);

cosBtn.addEventListener('click', cosFunc);

tanBtn.addEventListener('click', tanFunc);

lnBtn.addEventListener('click', lnFunc);
