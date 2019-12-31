import { gameEngine, cons } from '../index';
import { getNumber2, randomNumberGenerator } from '../utils';

const gameInstruction = 'What is the result of the expression?';

const symbol = '+-*';

const functionTask = () => {
  const number1 = randomNumberGenerator(5, 50);
  const number2 = randomNumberGenerator(5, 50);
  return `${number1} ${symbol[randomNumberGenerator(0, 2)]} ${number2}`;
};

const getNumber1 = (task) => {
  let number1 = '';
  for (let count = 0; task[count] !== '+' && task[count] !== '-' && task[count] !== '*'; count += 1) {
    number1 += task[count];
  }
  return number1;
};

const functionRightAnswer = (task) => {
  const number1 = getNumber1(task);
  const number2 = getNumber2(task, getNumber1);
  const rsymbol = task[number1.length];
  let result;
  switch (rsymbol) {
    case '+':
      result = Number(number1) + Number(number2);
      break;
    case '-':
      result = Number(number1) - Number(number2);
      break;
    case '*':
      result = Number(number1) * Number(number2);
      break;
      // no default
  }
  return String(result);
};

const taskRightAnswer = () => {
  const task = functionTask();
  const rightAnswer = functionRightAnswer(task);
  return cons(task, rightAnswer);
};

const games = () => gameEngine(gameInstruction, taskRightAnswer);

export default games;
