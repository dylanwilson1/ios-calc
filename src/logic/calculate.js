function operate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'x':
            return a * b;
        case '÷':
            return a / b;
        default:
            alert('Unknown operator');
            return null;
    }
}

function calculate(inputArray) {
    let calcArray = inputArray.map(element => element.value)
    // console.log(calcArray)

    const bidmasOperators=['÷','x','+','-'];
    let i;

    for (let op = 0; op < 4; op++) {
        i = 0;
        while (i < calcArray.length) {
            if (calcArray[i] === bidmasOperators[op]) {
                if (op===0 && calcArray[i+1]==='0'){
                    return 'Divide Zero Error'
                }
                calcArray.splice(i - 1, 3, operate(calcArray[i - 1], calcArray[i + 1], calcArray[i]));
                i -= 2;
            }
            else {
                i++;
            }
        }
        // console.log(calcArray)
    }
    return String(calcArray[0]).slice(0, 14)
}

export default calculate