//alert("Hello, world"); //Output to windows alert box
console.log("Debug the console log"); //Output to the console (Open dev tools and look at the console)
 
/*
START
SET num1 to GET keyboard input
SET pressed to GET calc key
SET num2 to GET keyboard input
SET result
IF pressed = plus
    SET result to addNum(num1, num2)
ELSE IF pressed = minus
    SET result to minNum(num1, num2)
ELSE IF pressed = multiply
    SET result to multNum(num1, num2)
ELSE IF pressed = divide
    SET result to divNum(num1, num2)
ELSE IF pressed = power
    SET result to powNum(num1, num2)
END IF
DISPLAY result
END

START SUBROUTINE addNum (a, b)
RETURN a + b
END SUBROUTINE

START SUBROUTINE minNum (a, b)
RETURN a - b
END SUBROUTINE

START SUBROUTINE multNum (a, b)
RETURN a * b
END SUBROUTINE

START SUBROUTINE divNum (a, b)
RETURN a / b
END SUBROUTINE

START SUBROUTINE powNum (a, b)
RETURN a ^ b
END SUBROUTINE
*/

var num1 = Math.floor(Math.random() * 100) + 1;
var num2 = Math.floor(Math.random() * 100) + 1;
console.log("num1: " + num1 + ", num2: " + num2);
var pressed = "**(1/";
calculate(num1, num2, pressed);

function calculate(a, b, operator) {
    a = String(a);
    b = String(b);
    var result = a + operator + b;
    if (operator == "**(1/") {
        result += ")";
    }
    console.log("calculate: " + result);
    result = eval(result);
    console.log("result: " + result);
}