// ------------ CALCULATOR ------------

import * as promptSync from 'prompt-sync';
const prompt = promptSync();


function Add(...arb_numbers :number[]) {
    let sum =arb_numbers.reduce((x, y)=> x+y);
    console.log(sum); 
}


function Subtract(...arb_numbers :number[]) {
    let Difference =arb_numbers.reduce((x, y)=> x-y);
    console.log(Difference); 
}


function Multiply (...arb_numbers :number[]) {
    let Multiply = arb_numbers.reduce((x, y)=> x*y);
    console.log(Multiply); 
}
function Division(...arb_numbers :number[]) {
    let Division = arb_numbers.reduce((x, y)=> x/y);
    console.log(Division); 
}
function Percentile(...arb_numbers :number[]) {
    let Percentile = arb_numbers.reduce((x, y)=> (x/y)*100);
    console.log(Percentile); 
}



function calCulator() {

    let input_1 = prompt('Enter the numbers :');
    let number1 :number = +input_1;
   
    let input_2 = prompt('Enter the number :');
    let number2 = +input_2;

    Add(number1, number2);
    Subtract(number1, number2);
    Multiply(number1, number2);
    Division(number1, number2);
    Percentile(number1, number2);
    alert(`Wow!
    \t\t\t\t\U have made a calculator.
    \t\t\t\t\tWell Done.
    \t\t\t\tKeep it up`)

}
calCulator();

let y :any[] = [1, 'ahad', true, false, 'zahdi'];
console.log('\n\n\n\n',y.push('momo'));