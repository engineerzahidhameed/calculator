"use strict";
// ------------ CALCULATOR ------------
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function Add() {
    var arb_numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arb_numbers[_i] = arguments[_i];
    }
    var sum = arb_numbers.reduce(function (x, y) { return x + y; });
    console.log(sum);
}
function Subtract() {
    var arb_numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arb_numbers[_i] = arguments[_i];
    }
    var Difference = arb_numbers.reduce(function (x, y) { return x - y; });
    console.log(Difference);
}
function Multiply() {
    var arb_numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arb_numbers[_i] = arguments[_i];
    }
    var Multiply = arb_numbers.reduce(function (x, y) { return x * y; });
    console.log(Multiply);
}
function Division() {
    var arb_numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arb_numbers[_i] = arguments[_i];
    }
    var Division = arb_numbers.reduce(function (x, y) { return x / y; });
    console.log(Division);
}
function Percentile() {
    var arb_numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arb_numbers[_i] = arguments[_i];
    }
    var Percentile = arb_numbers.reduce(function (x, y) { return (x / y) * 100; });
    console.log(Percentile);
}
function calCulator() {
    var input_1 = prompt('Enter the numbers :');
    var number1 = +input_1;
    var input_2 = prompt('Enter the number :');
    var number2 = +input_2;
    Add(number1, number2);
    Subtract(number1, number2);
    Multiply(number1, number2);
    Division(number1, number2);
    Percentile(number1, number2);
    alert("Wow!\n    \t\t\t\tU have made a calculator.\n    \t\t\t\t\tWell Done.\n    \t\t\t\tKeep it up");
}
calCulator();
var y = [1, 'ahad', true, false, 'zahdi'];
console.log('\n\n\n\n', y.push('momo'));
