
import { launchesGameEngine, cons } from '../index';
import { randomNumberGenerator } from '../utils';

const gameInstruction = 'What number is missing in the progression?';

const lengthProgression = 9;

const calcArithmeticProgression = (num1, num2, locHiddenElement) => {
  let firstDigitProgression = num1;
  let result = '';
  for (let count = 0; count <= lengthProgression; count += 1) {
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
  const locationHiddenElement = randomNumberGenerator(1, lengthProgression - 1);
  const task = calcArithmeticProgression(number1, number2, locationHiddenElement);
  const rightAnswer = String(calcHiddenElement(number1, number2, locationHiddenElement));
  return cons(task, rightAnswer);
};

const gameLaunch = () => launchesGameEngine(gameInstruction, calcTaskRightAnswer);

export default gameLaunch;
