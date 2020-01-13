import { gameEngine, cons } from '../index';
import { randomNumberGenerator } from '../utils';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const calculatesTask = (number1, number2) => `${number1} ${number2}`;

const calculatesNod = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  } if (number2 !== 0) {
    return calculatesNod(number2, number1 % number2);
  }
  return calculatesNod(number1, number2);
};

const taskRightAnswer = () => {
  const number1 = (randomNumberGenerator(10, 99));
  const number2 = (randomNumberGenerator(10, 99));
  const theTask = calculatesTask(number1, number2);
  const rightAnswer = String(calculatesNod(number1, number2));
  return cons(theTask, rightAnswer);
};

const games = () => gameEngine(gameInstruction, taskRightAnswer);

export default games;
