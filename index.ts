#! /usr/bin/env node

import inquirer from 'inquirer';

// Prompt for user input
  const { num1, operator, num2 } = await inquirer.prompt([
    {
      type: 'number',
      name: 'num1',
      message: 'Enter the first number:',
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter the second number:',
    },
    {
      type: 'list',
      name: 'operator',
      message: 'Select operation:',
      choices: ['+', '-', '*', '/'],
    },
   
  ]);

  let result: number | string;

  // Perform calculation based on the selected operator
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = 'Cannot divide by zero';
    }
  } else {
    result = 'Invalid operator';
  }

  console.log(`Result: ${result}`);

