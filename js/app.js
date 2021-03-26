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

//  postCalc = '';

const timeFunc = () => {
    // const initialTime = new Date();
    // let timeNow = new Date().toLocaleTimeString("en-US");
    let timeNow = new Date().toLocaleTimeString("it-IT");
    timeScreen.innerText = timeNow;
    // const initialTime = Date.now();
    // console.log(ho);
    // console.log(initialTime);
    console.log(timeNow);
}

setInterval(timeFunc, 1000);

const opValue = (numKey) => {
    // console.log(numKey);
    // console.log(numKey.innerText);
    userInput.value += numKey.innerText;
    console.log(userInput.value);
    x = userInput.value;
    // outputScreen.innerHTML = preCalc + x;
    // inputScreen.innerText = userInput.value;
    inputScreen.innerHTML = preCalc + x;
    // inputScreen.innerText = userInput.value;
    console.log(opCalc);
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
    // y = Math.round(y);
    y = Math.round(y * 100000) / 100000;
    console.log(y);
}

const postCalcFunc = (opSign) => {
    // y = x;
    console.log(y);
    roundCalcFunc();
    console.log(y);
    preCalc = y + opSign;
    userInput.value = '';
    console.log(opSign);
    outputScreen.innerText = y;
    inputScreen.innerText = preCalc;
    // userInput.value = '';
}

const postTrigFunc = (opSign) => {
    // y = x;
    console.log(y);
    roundCalcFunc();
    console.log(y);
    preCalc = opSign;
    userInput.value = '';
    console.log(opSign);
    console.log(preCalc);
    outputScreen.innerText = y;
    inputScreen.innerText = preCalc;
    // userInput.value = '';
}

const clearFunc = () => {
    console.log('jjj');
    x = 0;
    y = 0;
    z = '';
    preCalc = '';
    userInput.value = '';
    inputScreen.innerText = 0;
    outputScreen.innerText = 0;
    // inputScreen.innerText = userInput.value;
    // userInput.value = '';
}

const delFunc = () => {
    console.log('jjj');
    // x = 0;
    // y = 0;
    // z = '';
    // preCalc = '';
    console.log(userInput.value.length);
    if (userInput.value.length <= 1) {
        x = 0;
        y = 0;
        z = '';
        // preCalc = '';
        userInput.value = '';
        inputScreen.innerText = 0;
        outputScreen.innerHTML = preCalc + x;
    } else {
        let inputSplit = userInput.value.slice(0, -1);
        console.log(inputSplit);
        userInput.value = inputSplit;
        x = userInput.value;
        outputScreen.innerHTML = preCalc + x;
        inputScreen.innerText = userInput.value;
    }
    // inputScreen.innerText = 0;
    // inputScreen.innerText = userInput.value;
    // userInput.value = '';
}

const checkOpFunc = () => {
    console.log(x);
    console.log(y);
    if (opTrig !== '') {
        checkTrigFunc();
        z = '';
        opTrig = '';
    } else {
        inputScreen.innerText = 0;
        switch (opCalc) {
            case 'plus':
                // preCalc = y + ' + '; 
                // opCalc = 'plus';
                y = parseFloat(y) + parseFloat(x);
                // postCalcFunc(' + ');
                break;
            case 'minus':
                // preCalc = y + ' + '; 
                // opCalc = 'minus';
                y = parseFloat(y) - parseFloat(x);
                // postCalcFunc(' - ');
                break;
            case 'divide':
                // preCalc = y + ' + '; 
                // opCalc = 'minus';
                y = parseFloat(y) / parseFloat(x);
                // y = parseFloat(2.5) * paseFloat(2); 
                break;
            case 'multiply':
                // preCalc = y + ' + '; 
                // opCalc = 'minus';
                y = parseFloat(y) * parseFloat(x);
                // y = parseFloat(2.5) * paseFloat(2); 
                break;
            case 'pow':
                // preCalc = y + ' + '; 
                // opCalc = 'minus';
                y = parseFloat(y) ** parseFloat(x);
                // postCalcFunc(' ^ ');
                break;
            case 'sqrt':
                // preCalc = y + ' + '; 
                // opCalc = 'minus';
                console.log(y);
                // y = parseFloat(x) + parseFloat(y);
                y = 1 / parseFloat(y);
                console.log(y);
                y = parseFloat(x) ** parseFloat(y);
                // postCalcFunc(' ^ ');
                break;

            default:
                break;
        }
    }
    // preCalc = x + opSign;
}

const checkTrigFunc = () => {
    console.log(x);
    // y = parseFloat(x) ** parseFloat(y);     
    console.log(y);
    console.log(z);
    console.log(opTrig);
    if (opTrig !== '') {
        // let theta = parseFloat(x) * Math.PI / 2;   
        let theta = parseFloat(x) * Math.PI / 180;
        // theta = theta / Math.PI;   
        // z === '' ? y = 1 : y = parseFloat(y);
        console.log(y);
        // preCalc = x + opSign;
        switch (opTrig) {
            case 'sin':
                // preCalc = y + ' + '; 
                // opCalc = 'plus';
                // y = parseFloat(y) + parseFloat(x);     
                y = parseFloat(y) * Math.sin(theta);
                console.log(1 * Math.sin(theta));
                console.log(y);
                // postCalcFunc(' + ');
                console.log('sin');
                break;
            case 'cos':
                // preCalc = y + ' + '; 
                // opCalc = 'plus';
                // y = parseFloat(y) + parseFloat(x);     
                y = parseFloat(y) * Math.cos(theta);
                console.log(1 * Math.cos(theta));
                console.log(y);
                // postCalcFunc(' + ');
                console.log('cos');
                break;
            case 'tan':
                // preCalc = y + ' + '; 
                // opCalc = 'plus';
                // y = parseFloat(y) + parseFloat(x);     
                y = parseFloat(y) * Math.tan(theta);
                console.log(1 * Math.tan(theta));
                console.log(y);
                // postCalcFunc(' + ');
                console.log('tan');
                break;
                case 'ln':
                // preCalc = y + ' + '; 
                // opCalc = 'plus';
                // y = parseFloat(y) + parseFloat(x);     
                y = parseFloat(y) * Math.log(x);
                console.log(1 * Math.log(x));
                console.log(y);
                // postCalcFunc(' + ');
                console.log('ln');
                break;
                
            default:
                break;
        }
    }
}

const trigFunc = (trigSign) => {
    // checkTrigFunc();
    y = parseFloat(x) + parseFloat(y);
    z === '' ? y = 1 : y = parseFloat(y);
    opTrig = `${trigSign}`;
    y !== 1 ? postCalcFunc(`${trigSign} `) : postTrigFunc(`${trigSign} `);
    //         postCalcFunc(' + ');
    // inputScreen.innerText = preCalc;
}

const sinFunc = () => {
    trigFunc('sin');
    // checkTrigFunc();
    // y = parseFloat(x) + parseFloat(y);
    // z === '' ? y = 1 : y = parseFloat(y);
    // opTrig = 'sin';
    // postCalcFunc('sin ');
    //         postCalcFunc(' + ');
    // inputScreen.innerText = preCalc;
}

const cosFunc = () => {
    trigFunc('cos');
    // checkTrigFunc();
    // y = parseFloat(x) + parseFloat(y);
    // opTrig = 'cos';
    // postCalcFunc('cos ');
    //         postCalcFunc(' + ');
    // inputScreen.innerText = preCalc;
}

const tanFunc = () => {
    trigFunc('tan');
    // checkTrigFunc();
    // y = parseFloat(x) + parseFloat(y);
    // opTrig = 'tan';
    // postCalcFunc('tan ');
    //         postCalcFunc(' + ');
    // inputScreen.innerText = preCalc;
}

const lnFunc = () => {
    trigFunc('ln');
    // checkTrigFunc();
    // y = parseFloat(x) + parseFloat(y);
    // opTrig = 'ln';
    // postCalcFunc('ln ');
    //         postCalcFunc(' + ');
    // inputScreen.innerText = preCalc;
}

const addFunc = () => {
    // console.log(Math.sin(parseFloat(x)));
    checkOpFunc();
    opCalc = 'plus';
    postCalcFunc(' + ');
    // inputScreen.innerText = preCalc;
}

const subFunc = () => {
    checkOpFunc();
    opCalc = 'minus';
    postCalcFunc(' - ');
    // inputScreen.innerText = preCalc;
}

const divFunc = () => {
    checkOpFunc();
    opCalc = 'divide';
    postCalcFunc(' / ');
    // inputScreen.innerText = preCalc;
}

const mulFunc = () => {
    checkOpFunc();
    opCalc = 'multiply';
    postCalcFunc(' x ');
    // inputScreen.innerText = preCalc;
}

const sqrtFunc = () => {
    checkOpFunc();
    opCalc = 'sqrt';
    // y = x;
    // console.log(opSign);
    // sqrtSign = `
    // <span><sup>${y}</sup>&Sqrt;</span>
    // `;
    // let sqrtSign = `
    // <sup>${y}</sup>&Sqrt;
    // `;
    // postCalcFunc(' = ');
    // preCalc = sqrtSign.innerTxt;
    // preCalc = y + opSign;
    // preCalc = y.sup() + '&Sqrt;';
    // preCalc = '&Sqrt;';
    console.log(y);
    userInput.value = '';
    preCalc = ` 
    <span><sup>${y}</sup>&Sqrt;</span>
    `;
    inputScreen.innerHTML = preCalc;
    // outputScreen.innerHTML = preCalc;
    // outputScreen.innerHTML = ` 
    // <span><sup>${y}</sup>&Sqrt;</span>
    // `;
}

const powFunc = () => {
    checkOpFunc();
    opCalc = 'pow';
    postCalcFunc(' ^ ');
    inputScreen.innerText = preCalc;
}

const calcFunc = () => {
    checkOpFunc();
    // postCalFunc(' ^ ');
    roundCalcFunc();
    // preCalc = y;
    outputScreen.innerText = y;
    opCalc = 'plus';
    x = 0;
    y = 0;
    z = '';
    preCalc = '';
    userInput.value = '';
    // inputScreen.innerText = 0; 
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
