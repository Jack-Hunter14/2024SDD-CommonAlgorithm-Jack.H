//alert("Hello, world"); //Output to windows alert box
document.getElementById("ScriptThisDIV").innerHTML = "Debug the innerHTML"; //Output to the DOM (Document Object Module) with the id="ScriptThisDIV"
console.log("Debug the console log"); //Output to the console (Open dev tools and look at the console)
 
let myArray = randomiseArray();
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

function bubbleSort (sortArray) {
    endpoint = sortArray.length - 1;
    startpoint = 0;
    loops = 0;
    for (i = 0; i < sortArray.length; i++) {
        correct = 0;
        for (n = startpoint; n < endpoint; n++) {
            if (n == endpoint - 1) {
                endpoint--;
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
            loops++;
        }
    }
    console.log("bubble sort: " + sortArray);
    console.log("bubble loops: " + loops);
}

function highestValue (searchArray) {
    currentValue = searchArray[0];
    for (i = 0; i < searchArray.length; i++) {
        if (currentValue < searchArray[i + 1]) {
            currentValue = searchArray[i + 1];
        }
    }
    console.log("highest value: " + currentValue);
}

function insertionSort (sortArray) {
    loops = 0;
    for (i = 1; i < sortArray.length; i++) {
        if (sortArray[i] > sortArray[i + 1]) {
            sortArray[i] += sortArray[i + 1];
            sortArray[i + 1] = sortArray[i] - sortArray[i + 1];
            sortArray[i] -= sortArray[i + 1];
        }
        loops++;
    }
    console.log("insertion sort: " + sortArray);
    console.log("insertion loops: " + loops);
}