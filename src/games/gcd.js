import { gameEngine, cons } from '../index';
import { getNumber2, randomNumberGenerator } from '../utils';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const functionTask = () => {
  const number1 = (randomNumberGenerator(10, 99));
  const number2 = (randomNumberGenerator(10, 99));
  return `${number1} ${number2}`;
};

const getNumber1 = (task) => {
  let num1 = '';
  for (let count = 0; task[count] !== ' '; count += 1) {
    num1 += (task[count]);
  }
  return num1;
};

const nod = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  } if (number2 !== 0) {
    return nod(number2, number1 % number2);
  }
  return nod(number1, number2);
};

const functionRightAnswer = (task) => {
  const num1 = Number(getNumber1(task));
  const num2 = Number(getNumber2(task, getNumber1));
  const result = nod(num1, num2);
  return String(result);
};

const taskRightAnswer = () => {
  const theTask = functionTask();
  const rightAnswer = functionRightAnswer(theTask);
  return cons(theTask, rightAnswer);
};

const games = () => gameEngine(gameInstruction, taskRightAnswer);

export default games;
