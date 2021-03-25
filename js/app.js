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
    clearBtn = document.querySelector('#clear-btn'),
    delBtn = document.querySelector('#del-btn'),
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

const opValue = (numKey) => {
    // console.log(numKey);
    // console.log(numKey.innerText);
    userInput.value += numKey.innerText;
    console.log(userInput.value);
    x = userInput.value;
    outputScreen.innerHTML = preCalc + x;
    inputScreen.innerText = userInput.value;
    console.log(opCalc);
    z = x;
}

const dotValue = () => {
    // console.log(numKey);
    // console.log(numKey.innerText);
    userInput.value += '.';
    console.log(userInput.value);
    x = userInput.value;
    outputScreen.innerHTML = preCalc + x;
    inputScreen.innerText = userInput.value;
    console.log(opCalc);
}

const valueChange = () => {
    // console.log(numKey);
    // console.log(numKey.innerText);
    // userInput.value += '.';
    console.log('listnr');
    console.log(userInput.value);
    // console.log(opCalc);
}

const postCalcFunc = (opSign) => {
    // y = x;
    preCalc = y + opSign;
    userInput.value = '';
    console.log(opSign);
    outputScreen.innerText = preCalc;
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
    x = 0;
    y = 0;
    z = '';
    preCalc = '';
    userInput.value = '';
    inputScreen.innerText = 0;
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
                y = 1 / parseFloat(y);
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
        z === '' ? y = 1 : y = parseFloat(y);
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

            default:
                break;
        }
    }
}

const sinFunc = () => {
    // checkTrigFunc();
    y = parseFloat(x) + parseFloat(y);
    opTrig = 'sin';
    postCalcFunc('sin ');
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
    // preCalc = sqrtSign.innerText;
    // preCalc = y + opSign;
    // preCalc = y.sup() + '&Sqrt;';
    // preCalc = '&Sqrt;';
    userInput.value = '';
    preCalc = ` 
    <span><sup>${y}</sup>&Sqrt;</span>
    `;
    outputScreen.innerHTML = preCalc;
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
    preCalc = y;
    outputScreen.innerText = preCalc;
    x = 0;
    y = 0;
    z = '';
    preCalc = '';
    userInput.value = '';
    // inputScreen.innerText = 0; 
}

numKeys.forEach(numKey => {
    // console.log('ayy');
    numKey.addEventListener('click', () => {
        opValue(numKey);
    })
});

// userInput.addEventListener('input', valueChange);

// userInput.addEventListener('change', valueChange);

// userInput.addEventListener('change', () => {
//     console.log(2444);
// });

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
