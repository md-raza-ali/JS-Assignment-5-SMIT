// <<<<<<<<<< CHAPTER NO: 26 TO 30 >>>>>>>>>>
// ANSWER NO: 01
// let input = +prompt("Enter A number in decimal..");
// document.write(`Number: ${input}`);
// document.write(`<br>Round off value of the number: ${Math.round(input)}`);
// document.write(`<br>Floor value of the number: ${Math.floor(input)}`);
// document.write(`<br>Ciel value of the number: ${Math.ceil(input)}`);

// ANSWER NO: 02
// let input = +prompt("Enter A number in decimal..");
// document.write(`Number: ${input}`);
// document.write(`<br>Round off value of the number: ${Math.round(input)}`);
// document.write(`<br>Floor value of the number: ${Math.floor(input)}`);
// document.write(`<br>Ciel value of the number: ${Math.ceil(input)}`);

// ANSWER NO: 03
// let input = +prompt("Enter a number..");
// if(input < 0){
//     let absoluteValue = -input;
//     alert(`The absolute value of ${input} is ${absoluteValue}`);
// }else{
//     alert(`The absolute value of ${input} is ${input}`);
// }

// ANSWER NO: 04
// let randomNum = (Math.random() * 6);
// randomNum = Math.round(randomNum) + 1;
// alert(`Random dice value is: ${randomNum}`);

// ANSWER NO: 05
// let randomNum = (Math.random() * 1);
// randomNum = Math.round(randomNum);
// if(randomNum == 0){
//     randomNum = randomNum + 1;
//     alert(`Heads: ${randomNum}`);
// }else{
//     randomNum = randomNum + 1;
//     alert(`Tails: ${randomNum}`);
// }

// ANSWER NO: 06
// let randomNum = (Math.random() * 100);
// randomNum = Math.round(randomNum) + 1;
// alert(`Random number between 1 and 100: ${randomNum}`);

// ANSWER NO: 07
// let userInput = prompt("Enter your weight in Kilograms..");
// let weight = parseFloat(userInput.replace(/[^\d.]/g, ""));
// alert(`The weight of user is ${weight} Kilograms`);

// ANSWER NO: 08
// let userInput = +prompt("Guess a number between 1 and 10");
// let secNum = Math.random() * 10;
// secNum = Math.round(secNum);
// if(userInput == secNum){
//     alert(`You Won!`);
// }else{
//     alert(`You lose! ${secNum}`);
// }


// <<<<<<<<<< CHAPTER NO: 31 TO 34 >>>>>>>>>>

// ANSWER NO: 01
// let date = new Date();
// document.write(date);

// ANSWER NO: 02
// let date = new Date();
// let month = date.getMonth()
// let arr = ["Januray","Febraury","March","April","May","June","July","August","September","October","November","December"];
// alert("Current Month: " + arr[month]);

// ANSWER NO: 03
// let arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// let date = new Date();
// let day = date.getDay();
// alert("Today is " + arr[day]);

// ANSWER NO: 04
// let arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let date = new Date();
// let day = date.getDay();
// if (arr[day] == "Sun" || arr[day] == "Sat") {
//   alert("It's a Funday..");
// } else {
//   alert("Today is: " + arr[day]);
// }

// ANSWER NO: 05
// let day = new Date().getDate();
// if (day <= 15) {
//   alert("First fifteen days of the Month..");
// } else {
//   alert("Last fifteen days of the Month..");
// }

// ANSWER NO: 06
// let date = new Date();
// document.write("Current Date: " + date);

// let milliSecond = date.getTime();
// document.write(`<br>Elapsed millisecond since January 1, 1970: ${milliSecond}`);

// milliSecond = date.getTime();
// let result = milliSecond / 1000 / 60;
// document.write(`<br>Elapsed millisecond since January 1, 1970: ${result}`);

// ANSWER NO: 07
// let date = new Date();
