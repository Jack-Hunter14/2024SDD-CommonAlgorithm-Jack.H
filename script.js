//alert("Hello, world"); //Output to windows alert box
document.getElementById("ScriptThisDIV").innerHTML = "Debug the innerHTML"; //Output to the DOM (Document Object Module) with the id="ScriptThisDIV"
console.log("Debug the console log"); //Output to the console (Open dev tools and look at the console)
 
let myArray = [8, 9, 6, 1, 0, 3, 5, 7, 2, 4 ];
bubbleSort(myArray);

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
                if (n == startpoint) {
                    startpoint--;
                }
            } else {
                correct++;
                if (correct == sortArray.length) {
                    i = sortArray.length;
                }
                if (n == startpoint) {
                    startpoint++;
                }
            }
            console.log(sortArray);
            console.log(endpoint);
            loops++;
        }
    }
    console.log(sortArray);
    console.log(loops);
}