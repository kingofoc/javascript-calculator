var operator = prompt(' Choose an operation to perform (either: +, -, *, / or % \n ');
var num1 = parseFloat(prompt(' Enter first number:\n '));
var num2 = parseFloat(prompt(' Enter second number:\n '));

let result;

if (operator == '+'){
  result = num1 + num2;
}
else if (operator == '-'){
  result = num1 - num2;
}
else if (operator == '*'){
  result = num1 * num2;
}
else if (operator == '/'){
  result = num / num2;
}
else {
  result = num1 % num2;
}

alert(`${num1} ${operator} ${num2} = ${result}`);