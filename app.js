
// ......Assigment6......date.

// var date=new Date();
// console.log(date);

// function greet(firstName,laststName){
//     return firstName + laststName;
// }
// var firstName = prompt("Enter your firstname");
// var laststName = prompt("Enter your lastname");
// var fullName = firstName + laststName;
// var result = greet(firstName,laststName);
// console.log(result);


// function sum(a,b){
//     return a + b ;
// }
// var result = sum(10,20);
// console.log(result);


// function calc(num1,opr,num2){
// if(opr === "+"){
//     return num1 + num2 ;
// } else if(opr === "-"){
//     return num1 - num2 ;
// } else if(opr === "*"){
//     return num1 * num2 ;
// } else if(opr === "/"){
//     return num1 / num2 ;
// }
// }
// var num1 = +prompt("Enter your Num1");
// var opr = prompt("Enter your opr");
// var num2 = +prompt("Enter your Num2");
// var result= calc(num1,opr,num2);
// console.log(result);



// function squareNumber(number) {
//     return number * number;
// }
// var squareNumber = squareNumber(12);
// console.log (squareNumber);



// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     } else {
//       var result = 1;
//         for (var i = 2; i <= number; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }
// var result = factorial(0); 
// console.log(result);




// function countNumbers(start, end) {
//     if (typeof start !== 'number' || typeof end !== 'number' || start > end) {
//       console.error('Invalid input');
//       return;
//     }

//     document.body.innerHTML = '';
//     var countingDiv = document.createElement('div');
//     countingDiv.style.fontSize = '24px';
//     countingDiv.style.padding = '20px';
//     document.body.appendChild(countingDiv);


//     for (var i = start; i <= end; i++) {
//       countingDiv.textContent = i;
//       await new Promise(resolve => setTimeout(resolve, 500));
//     }
//   }
//   countNumbers(1, 10);




// function calcHypo(base, perpendicular) {

//     function square(number) {
//       return number * number;
//     }


//     var baseSquared = square(base);
//     var perpendicularSquared = square(perpendicular);


//     var hypo = Math.sqrt(baseSquared + perpendicularSquared);

//     return hypo;
//   }

//   var baseLength = 3;
//   var perpendicularLength = 4;
//   var hypotenuse = calcHypo(baseLength, perpendicularLength);
//   console.log(`The hypotenuse is: ${hypotenuse}`);





// function calculateRectangleAreaByValue(width, height) {
//     return width * height;
//   }
//   var area1 = calculateRectangleAreaByValue(5, 8);
//   console.log(`Area by value: ${area1}`);



// function isPalindrome(str) {
//     var cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     var reversedStr = cleanStr.split('').reverse().join('');
//     return cleanStr === reversedStr;
//   }
//   var testString1 = "racecar";
//   console.log(isPalindrome(testString1)); 



// function capitalizeWords(str) {
//     var words = str.split(' ');
//     var capitalizedWords = words.map(word => {
//       if (word.length === 0) {
//         return ''; 
//       }
//       return word[0].toUpperCase() + word.slice(1);
//     });
//     var result = capitalizedWords.join(' ');

//     return result;
//   }
//   var inputString = 'the quick brown fox';
//   var capitalizedString = capitalizeWords(inputString);
//   console.log(capitalizedString);




// function countLetterOccurrences(str, letter) {
//     let count = 0;
//     var lowerStr = str.toLowerCase();
//     var lowerLetter = letter.toLowerCase();
//     for (var char of lowerStr) {
//       if (char === lowerLetter) {
//         count++;
//       }
//     }

//     return count;
//   }
//   var inputString = 'JavaScript is a programming language';
//   var targetLetter = 'a';
//   var letterCount = countLetterOccurrences(inputString, targetLetter);
//   console.log(`The letter '${targetLetter}' appears ${letterCount} times.`);
