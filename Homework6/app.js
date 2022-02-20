console.log("Ex 1. display in the console the numbers from 1 to 20");
var x = 0;
let i;
for (i = 0; i < 20; i++){
    x = x + 1;
    console.log(x);
}
console.log("\n","\n");

console.log("Ex 2. display in the console the odd numbers from 1 to 20");
for (i = 1; i < 20; i+=2) {
    console.log(i);
   }
console.log("\n","\n");
console.log("Ex 3 - compute the sum of the elements of an array and display it in the console");
function arrSum(arr){
   let i,sum = 0;
    for (let i = 0; i <= arr.length - 1; i++ ){
        sum = sum + arr[i];
        
    }
    console.log(sum);
}
arrSum([1,2,3,4,5,6]);
console.log("\n","\n");

console.log("Ex 4. compute the maximum of the elements of an array and display it in the console ");
function maxElement(arr){
    let i,max = arr[0];
    for (let i = 0; i < arr.length; i++ ){
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    console.log("The maximum element is: " + max);
}

maxElement([99,54,7987,3,12,333]);

console.log("\n","\n");

console.log("Ex 5. compute how many times a certain element appears in an array ");


function element(arr, x){
    var y = arr.length;
    var result = 0;
    for (i = 0; i < y; i++ ){
        if (x == arr[i]){
            result++;
        }
    }
    console.log(`${x} it apears ${result} times`);
}
element([3,3,33,33,3,23, 42, 3, 42, 53, 3, 0, 2, 392], 3);