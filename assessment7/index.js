// Question1
// var userNum= window.prompt('enter your num');
// console.log(userNum);

// Question2
// var num = Number( window.prompt( 'enter number '));
// if(num%3==0 && num%4==0){
// console.log('yes');

// }else{
//     console.log('no');
// }

// Question3
// var num1= Number(window.prompt('first num'))
// var num2= Number(window.prompt('second num'))
// if( num1 > num2){
//     console.log('the max number is ' + num1)
// } else{
//     console.log('the max number is ' + num2)
// }

// Question4
//  var num= Number(window.prompt('enter number '))
//  if(num<0){
//     console.log('negative')
//  } else{
//     console.log('positive')
//  }

// Question5
// var num1 = Number(window.prompt("enter number 1"));
// var num2 = Number(window.prompt("enter number 2"));
// var num3 = Number(window.prompt("enter number 3"));
// if (num1 > num2 && num1 > num3) {
//   if (num2 > num3) {
//     console.log("max element is " + num1 + "min element is " + num3);
//   } else {
//     console.log("max element is " + num1 + "min element is " + num2);
//   }
// } else if (num2 > num1 && num2 > num3) {
//   if (num1 > num3) {
//     console.log("max element is " + num2 + "min element is " + num3);
//   } else {
//     console.log("max element is " + num2 + "min element is " + num3);
//   }
// } else if (num3 > num1 && num3 > num2) {
//   if (num1 > num2) {
//     console.log("max element is " + num3 + "min element is " + num2);
//   } else {
//     console.log("max element is " + num3 + "min element is " + num1);
//   }
// }

// Question6
// var num = Number(window.prompt(' enter number'));
// if(num%2==0){
//     console.log("even");
// }
// else{
//     console.log('odd');
// }

// Question8
// var inputChar;
// inputChar=window.prompt('enter letter');
// var char =inputChar.toLowerCase();
// if(char==='a'|char==='e'|char==='i'|char==='o'|char==='u'){
//     console.log('vowel');
// }else{
//     console.log('Consonant');
// }
 
// Question9
// var num = Number(window.prompt('enter number'));
// for(var i =1 ; i<=num; i++){
//     console.log(i)
// }

// Question10
// var num = Number(window.prompt('enter number'));
// for(var i=1 ; i<=12 ; i++){
//     console.log(i * num);
// }


// Question11
// var num = Number(window.prompt('enter number'));
// for( var i=1;i<=num; i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }


//  Question12
//  var num=Number(window.prompt('Enter number '));
//  var num2=Number(window.prompt('Enter number 2 '));
//  var power =1;
//  for ( var i = 1; i <=num2; i++) {
//     power*=num
//  }
//  console.log(power);

// 7all tany bta3ee lso2al da 
// var num1 = window.prompt('enter num1 ');
// var num2 = window.prompt('enter num2 ');
// function getPower(x,y){
//     var z= x**y;
//     console.log(z);
// }
// getPower(num1,num2);


// Question12
// var num1 = Number(window.prompt('enter number'));
// var num2= Number(window.prompt('enter number'));
// var num3 = Number(window.prompt('enter number'));
// var num4 = Number(window.prompt('enter number'));
// var num5 = Number(window.prompt('enter number'));
// var tot = total(num1,num2,num3,num4,num5)
// var avg = avgarge(num1,num2,num3,num4,num5)
// var perc = percintage(num1,num2,num3,num4,num5)

//  function total(no1,no2,no3,no4,no5){
//     var sumTotal = no1+no2+no3+no4+no5;
//     return sumTotal;
//  }
//  function avgarge(no1,no2,no3,no4,no5){
//     var sumAvg = (no1+no2+no3+no4+no5)/5;
//     return sumAvg;
//  }
//  function percintage(no1,no2,no3,no4,no5){
//     var sumPerc = ((no1+no2+no3+no4+no5)/5) + "%";
//     return sumPerc;
//  }
//  console.log("total marks ="+ tot +" avarge = "+avg +"percantage ="+perc);


// Question13
// var mon=Number(window.prompt('enter month'));

//  if(mon==1|mon==3|mon==5|mon==7|mon==8|mon==10|mon==12){
//     console.log("days in the month 31");
//  } else if(mon==4|mon==6|mon==9|mon==11){
//       }     

// Question14
//  var num1=Number(window.prompt('Enter number '));
//  var num2=Number(window.prompt('Enter number 2 '));
//  var num3=Number(window.prompt('Enter number 2 '));
//  var num4=Number(window.prompt('Enter number 2 '));
//  var num5=Number(window.prompt('Enter number 2 '));
// var perc = percintage(num1,num2,num3,num4,num5)

//  function percintage(no1,no2,no3,no4,no5){
//     var sumPerc = ((no1+no2+no3+no4+no5)/5) ;
// if (sumPerc>=90 && sumPerc<100){
//     console.log(sumPerc+ "%" + "A");
// } else if (sumPerc>=80 && sumPerc<90){
//     console.log(sumPerc+ "%"  + "B");
// }
//  else if (sumPerc>=70 && sumPerc<80){
//     console.log(sumPerc+ "%"  + "C");
// }
//  else if (sumPerc>=60 && sumPerc<70){
//     console.log(sumPerc+ "%"  + "D");
// }
//  else if (sumPerc>=40 && sumPerc<60){
//     console.log(sumPerc+ "%"  + "E");
// }
// else if (sumPerc>=0 && sumPerc<40){
//     console.log(sumPerc+ "%"  + "F");
// }}

// Question15
// var mon=Number(window.prompt('enter month'));
//  switch (mon){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("days in the month 31");
//         break;
//     case 2:
//         console.log("days in the month 28");
//         break;
//     case 4:    
//     case 6:   
//     case 9:   
//     case 11:
//         console.log("days in the month 30");
//         break;
//      default:
//         console.log("not a month");
//         break;      
//  }

// Question16
// var inputChar=window.prompt('enter letter');
// var char =inputChar.toLowerCase();
// switch (char){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//      console.log("vowel");   
//      break;
//     default :
//     console.log("consonant") 
// }

// Question17
//  var  num=Number(window.prompt('Enter number '));
//  var num2=Number(window.prompt('Enter number 2 '));
// switch(num>num2){
//     case true :
//         console.log("the max number is " + num);
//         break;
//     case false :
//         console.log("the max number is " + num2);
//         break;
// }


// Question18
// var num=Number(window.prompt('enter number'))
// var check = num%2;
// switch(check){
//     case 0 :
//     console.log("even");
//     break;
// case 1 :
//     console.log("odd");
//     break;
// }



// Question19
// var num=Number(window.prompt('Enter number '));
// switch(true){
//     case (num>0) :
//         console.log("positive ");
//         break;
//     case (num<0) :
//         console.log("negative" );
//         break;
//     case (num==0) :
//         console.log("zero" );
//         break;
// }

// // program for a simple calculator

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;

// // using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// // display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);



