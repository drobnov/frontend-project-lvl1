
import engine from '../index';
import randomNumberGenerator from '../utils';
import { cons } from '../../node_modules/@hexlet/pairs/dist/index';

const gameInstruction = 'What number is missing in the progression?';

const lengthProgressionCount = 9;

const calcArithmeticProgression = (num1, num2, locHiddenElement) => {
  let firstDigitProgression = num1;
  let result = '';
  for (let count = 0; count <= lengthProgressionCount; count += 1) {
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

const calcHiddenElement = (num1, num2, locHiddenElement) => num1 + num2 * (locHiddenElement + 1);

const calcTaskRightAnswer = () => {
  const number1 = (randomNumberGenerator(10, 50));
  const number2 = (randomNumberGenerator(2, 10));
  const locationHiddenElement = randomNumberGenerator(1, lengthProgressionCount - 1);
  const task = calcArithmeticProgression(number1, number2, locationHiddenElement);
  const rightAnswer = String(calcHiddenElement(number1, number2, locationHiddenElement));
  return cons(task, rightAnswer);
};

const gameLaunch = () => engine(gameInstruction, calcTaskRightAnswer);

export default gameLaunch;
