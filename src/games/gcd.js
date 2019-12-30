import { gameEngine, cons } from '../index';
import { takeNumber2, randomNumberGenerator } from '../utils';

const gameInstruction = 'Find the greatest common divisor of given numbers.';
const functionTheTask = () => {
  const number1 = (randomNumberGenerator(100, 2));
  const number2 = (randomNumberGenerator(100, 2));
  return `${number1} ${number2}`;
};

const takeNumber1 = (theTask) => {
  let num1 = '';
  for (let count = 0; theTask[count] !== ' '; count += 1) {
    num1 += (theTask[count]);
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

const functionRightAnswer = (theTask) => {
  const num1 = Number(takeNumber1(theTask));
  const num2 = Number(takeNumber2(theTask, takeNumber1));
  const result = nod(num1, num2);
  return String(result);
};

const taskRightAnswer = () => {
  const theTask = functionTheTask();
  const rightAnswer = functionRightAnswer(theTask);
  return cons(theTask, rightAnswer);
};

const games = () => gameEngine(gameInstruction, taskRightAnswer);

export default games;
