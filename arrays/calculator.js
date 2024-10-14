const oprs = ["+", "-", "/", "*", "%"];

let i = 0;

function calc(a, b) {
    while (i <= 4) {
        switch (oprs[i]) {
            case "+": {
                console.log("a + b = ", a + b);
                break;
            }
            case "-": {
                console.log("a - b = ", a - b);
                break;
            }
            case "/": {
                console.log("a / b = ", a / b);
                break;
            }
            case "*": {
                console.log("a * b = ", a * b);
                break;
            }
            case "%": {
                console.log("a % b = ", a % b);
                break;
            }
            default:
                console.log("invalid opr");
                break;
        }
        i++;
    }
}

calc(3, 4);
