function Item(value, type) {
    this.value = value;
    this.type = type;    //operator or operand ////Could be changed to boolean
}


//This needs to be refactored
function handleInputData(data, inputValue, inputValueType) {
    // console.log('data so far is')
    // console.log(data)
    // console.log('data added is ' + inputValue + ' it is a ' + inputValueType)
    if (data.length >= 1 && data.length <= 18) {
        if (data[data.length - 1].type === 'operand' && inputValueType === 'operand') {

            if (inputValue === '.' && data[data.length - 1].value.indexOf('.') >= 0) { } //If already has a dot, don't allow another
            else {
                if (inputValue === '+/-') {
                    // console.log('inversing sign')
                    // console.log(data[data.length - 1])
                    data[data.length - 1].value = data[data.length - 1].value / -1;

                }
                else if (inputValue === '%') {
                    if (data.length >= 3) {
                        data[data.length - 1].value = (data[data.length - 3].value / 100) * data[data.length - 1].value
                    }
                }
                else {
                    data[data.length - 1].value = data[data.length - 1].value + inputValue;
                }
            }
        }
        else if (data[data.length - 1].type === 'operator' && inputValueType === 'operator') { }
        else {
            data.push(new Item(inputValue, inputValueType))
        }
    }
    //First char
    else if (inputValueType === 'operand' && inputValue !== '+/-') {
        data.push(new Item(inputValue, inputValueType))
    }

    let toDisplay = data.map(element => {
        // console.log(element.value)
        return element.value
    }
    );
    toDisplay = toDisplay.join('').slice(0, 14)

    // console.log(toDisplay)
    return { data: data, display: toDisplay }
}

export default handleInputData