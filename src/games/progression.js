
import { gameEngine, cons } from '../index';
import { randomNumberGenerator } from '../utils';

const gameInstruction = 'What number is missing in the progression?';

const lengthProgression = 10;

const arithmeticProgression = (num1, num2, locHiddenElement) => {
  let firstDigitProgression = num1;
  let result = '';
  for (let count = 1; count <= lengthProgression; count += 1) {
    firstDigitProgression += num2;
    let progressionStep;
    if (locHiddenElement === count) {
      progressionStep = '..';
    } else {
      progressionStep = String(firstDigitProgression);
    }
    result = `${result} ${progressionStep}`;
  }
  return result;
};

const calcHiddenElement = (num1, num2, locHiddenElement) => num1 + num2 * locHiddenElement;

const taskRightAnswer = () => {
  const number1 = (randomNumberGenerator(10, 50));
  const number2 = (randomNumberGenerator(2, 10));
  const locationHiddenElement = randomNumberGenerator(0, 9);
  const task = arithmeticProgression(number1, number2, locationHiddenElement);
  const rightAnswer = String(calcHiddenElement(number1, number2, locationHiddenElement));
  return cons(task, rightAnswer);
};

const games = () => gameEngine(gameInstruction, taskRightAnswer);

export default games;
