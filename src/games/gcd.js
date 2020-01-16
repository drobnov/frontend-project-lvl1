import { launchesGameEngine, cons } from '../index';
import { randomNumberGenerator } from '../utils';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const calculatesTask = (number1, number2) => `${number1} ${number2}`;

const calculatesGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  } if (number2 !== 0) {
    return calculatesGcd(number2, number1 % number2);
  }
  return calculatesGcd(number1, number2);
};

const calcTaskRightAnswer = () => {
  const number1 = (randomNumberGenerator(10, 99));
  const number2 = (randomNumberGenerator(10, 99));
  const theTask = calculatesTask(number1, number2);
  const rightAnswer = String(calculatesGcd(number1, number2));
  return cons(theTask, rightAnswer);
};

const gameLaunch = () => launchesGameEngine(gameInstruction, calcTaskRightAnswer);

export default gameLaunch;
