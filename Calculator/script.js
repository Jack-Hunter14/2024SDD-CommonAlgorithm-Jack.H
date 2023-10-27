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



START
GET salInput
GET timeInput
GET feeHelp
SET salInput to calcTax(salInput, timeInput)
SET salInput to calcFeeHelp(salInput, feeHelp)
SET salInput to normSal(salInput)

START SUBROUTINE calcTax(sal, time)
    IF weekly
        SET sal to sal * 52
    ELSE IF fortnightly
        SET sal to sal * 26
    ELSE IF monthly
    `   SET sal to sal * 12
    END IF
    IF sal < 20000
        SET tax to sal * .1
    ELSE IF sal < 40000
        SET tax to sal * .2
    ELSE
        SET tax to sal * .3
    END IF
    DISPLAY "tax per year: " + tax
    SET sal to sal - tax
    RETURN sal
END SUBROUTINE

START SUBROUTINE normSal(sal, time)
    SET sal to sal / 12
    DISPLAY "weekly salary: " + sal
    RETURN sal
END SUBROUTINE

START SUBROUTINE calcFeeHelp(sal, fee)
    IF fee
        SET sal to sal * 0.9
    END IF
    RETURN sal 
END SUBROUTINE
END
*/

/*var num1 = String(Math.floor(Math.random() * 100) + 1);
var num2 = String(Math.floor(Math.random() * 100) + 1);
console.log("num1: " + num1 + ", num2: " + num2);
var pressed = "+";
calculate(num1, num2, pressed);
function calculate(a, b, operator) {
    var result = eval(a + operator + b);
    console.log("result: " + result);
}*/
var salInput = Math.floor(Math.random() * 50000) + 1;
var timeInput = "yearly";
var feeHelp = true;
salInput = calcTax(salInput, timeInput);
salInput = calcFeeHelp(salInput, feeHelp);
salInput = normSal(salInput);

function calcTax(sal, time) {
    var tax;
    if (time == "weekly") {
        sal = sal * 52;
    } else if (time == "fortnightly") {
        sal = sal * 26;
    } else if (time == "monthly") {
        sal = sal * 12;
    }
    if (sal < 20000) {
        tax = sal * .1;
    } else if (sal < 40000) {
        tax = sal * .2;
    } else {
        tax = sal * .3;
    }
    console.log("tax per year: " + tax);
    sal -= tax;
    return sal;
}

function calcFeeHelp(sal, fee) {
    if (fee) {
        sal = sal * 0.9;
    }
    return sal;
}

function normSal(sal) {
    sal = sal / 12;
    console.log("weekly salary: " + sal);
    return sal;
}