//alert("Hello, world"); //Output to windows alert box
document.getElementById("ScriptThisDIV").innerHTML = "Debug the innerHTML"; //Output to the DOM (Document Object Module) with the id="ScriptThisDIV"
console.log("Debug the console log"); //Output to the console (Open dev tools and look at the console)
 
let myArray = randomiseArray();
console.log("original: " + myArray);
highestValue(myArray);
bubbleSort(myArray);
insertionSort(myArray);


let swapArray = [3, 7]

//console.log("before: " + swapArray [0] + " " + swapArray[1]);
//swapValues(swapArray[0], swapArray[1])

function swapValues (a, b) {
  /* a += "@" + b;
   b = PARSE left "@" of a;
   a = PARSE right "@" of a;
   */
   //console.log("after: " + a + " " + b);
}

function randomiseArray() {
    randomArray = [];
    for (i = 0; i < 10; i++) {
        randomArray[i] = Math.floor(Math.random() * 100) + 1;
    }
    return randomArray;
}

function bubbleSort (tempArray) {
    sortArray = [];
    for (w = 0; w < tempArray.length; w++) {
        sortArray[w] = tempArray[w];
    }
    endpoint = sortArray.length - 1;
    for (i = 0; i < sortArray.length; i++) {
        correct = 0;
        for (n = 0; n < endpoint; n++) {
            if (n == endpoint - 1) {
                endpoint--;
                if (correct == endpoint - 1) {
                    correct--;
                }
            }
            if (sortArray[n] > sortArray[n + 1]) {
                sortArray[n] += sortArray[n + 1];
                sortArray[n + 1] = sortArray[n] - sortArray[n + 1];
                sortArray[n] = sortArray[n] - sortArray[n + 1];
            } else {
                correct++;
                if (correct == endpoint) {
                    i = sortArray.length;
                    n = endpoint;
                }
            }
        }
    }
    console.log("bubble sort: " + sortArray);
}

function highestValue (searchArray) {
    currentValue = searchArray[0];
    currentIndex = 0;
    for (i = 0; i < searchArray.length; i++) {
        if (currentValue < searchArray[i + 1]) {
            currentValue = searchArray[i + 1];
            currentIndex = i + 1;
        }
    }
    console.log("highest value: " + currentValue);
    console.log("index: " + currentIndex);
}

/*
START
SET myArray = [2, 3, 5]
highestValue (myArray)
FUNCTION highestValue (searchArray)
    SET currentValue = searchArray[0]
    SET currentIndex = 0
    FOR COUNT from 0 to length of searchArray
        IF currentValue < searchArray[i + 1]
            SET currentValue = searchArray[i + 1]
            SET currentIndex = i + 1
        END IF
    COUNT + 1
    END COUNT LOOP
    RETURN currentValue
    RETURN currentIndex
END FUNCTION
END
*/

function insertionSort (tempArray) {
    sortArray = [];
    for (w = 0; w < tempArray.length; w++) {
        sortArray[w] = tempArray[w];
    }
    endpoint = sortArray.length;
    for (n = 0; n < sortArray.length; n++) {
        for (i = 0; i < endpoint - 1; i++) {
            if (sortArray[i] > sortArray[i + 1]) {
                sortArray[i] += sortArray[i + 1];
                sortArray[i + 1] = sortArray[i] - sortArray[i + 1];
                sortArray[i] -= sortArray[i + 1];
            }
        }
        endpoint--;
    }
    console.log("insertion sort: " + sortArray);
}