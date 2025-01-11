//Q1
let nums = [1,2,3,4]; 
let newArray = [] ;
for (let i=0 ; i<nums.length ; i++) {
    newArray.push(2**nums[i]) ; 
}
console.log (newArray)


let add = nums.map(function (element) {
    return 2**element;
});
console.log(add)


 nums.forEach(function(element){
    console.log(2**element)
});


//Q2
let data = [1, 2, 3, 4, "marya", "anfal", "rawan"];
data.map(function(element) {
    if (typeof element === "number") { 
        if (element % 2 === 0) {
            console.log("even");
        } else {
            console.log("odd");
        }
    } else {
        console.log("N/A"); 
    }
});

//Q3
let neme = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"]
neme.forEach(function (element){
    console.log(element)
}
)

//Q4
let inputArray = [1, 3, 5, 15, 4, 9, 10];
function fizzbuzz(numbers) {
    let output = []; 

    numbers.forEach(function(number) {
        if (number % 3 === 0 && number % 5 === 0) {
            output.push("Fizz Buzz");
        } else if (number % 3 === 0) {
            output.push("Fizz");
        } else if (number % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(number);
        }
    });
    return output;
}
let result = fizzbuzz(inputArray);
console.log(result); 


let inputArrays = [1, 3, 5, 15, 4, 9, 10];
function fizzbuzz(numbers) {
    return numbers.map(function(number) {
        if (number % 3 === 0 && number % 5 === 0) {
            return "Fizz Buzz";
        } else if (number % 3 === 0) {
            return "Fizz";
        } else if (number % 5 === 0) {
            return "Buzz";
        } else {
            return number;
        }
    });
}
let results = fizzbuzz(inputArray);
console.log(result);
