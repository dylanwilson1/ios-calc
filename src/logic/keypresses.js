function RegisterKeypresses(App) {
    document.onkeydown = (e) => {
        switch (true) {
            case (e.keyCode >= 96 && e.keyCode <= 105): //Numpad 0-9
                App.handleInput(String(e.keyCode - 96), 'operand')
                break;
            case (e.keyCode >= 48 && e.keyCode <= 57 && !e.shiftKey): //Keyboard 0-9 and shift not pressed
                App.handleInput(String(e.keyCode - 48), 'operand')
                break;
            case (e.keyCode === 109 || e.keyCode === 189):
                App.handleInput('-', 'operator')
                break;
            case (e.keyCode === 107 || (e.shiftKey && e.keyCode === 187)):
                App.handleInput('+', 'operator')
                break;
            case (e.keyCode === 106 || (e.shiftKey && e.keyCode === 56)):
                App.handleInput('x', 'operator')
                break;
            case (e.keyCode === 111 || e.keyCode === 191):
                App.handleInput('÷', 'operator')
                break;
            case (e.keyCode === 110 || e.keyCode === 190):
                App.handleInput('.', 'operator')
                break;
            case (e.keyCode === 13 || e.keyCode === 187):
                App.calculate()
                break;
            case (e.keyCode === 46 || e.keyCode === 67): //Del key or C key
                App.clear()
                break;
            default:
                // console.log(e.keyCode)
        }
    }
}

export default RegisterKeypresses