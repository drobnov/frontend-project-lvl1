import { cons } from '@hexlet/pairs';
import engine from '..';
import randomNumberGenerator from '../utils';

const gameInstruction = 'What number is missing in the progression?';

const lengthProgression = 10;

const buildsProgression = (startingElement, progressionStep, hiddenElementLocation) => {
  let firstElementProgression = startingElement;
  let result = '';
  for (let count = 0; count <= lengthProgression - 1; count += 1) {
    firstElementProgression += progressionStep;
    let elementProgression;
    if (hiddenElementLocation === count) {
      elementProgression = '..';
    } else {
      elementProgression = String(firstElementProgression);
    }
    result = `${result} ${elementProgression}`;
  }
  return result.trim();
};

const calcHiddenElement = (num1, num2, hiddenElementLoc) => num1 + num2 * (hiddenElementLoc + 1);

const calculatesTaskRightAnswer = () => {
  const number1 = (randomNumberGenerator(10, 50));
  const number2 = (randomNumberGenerator(2, 10));
  const hiddenElementLocation = randomNumberGenerator(1, lengthProgression - 1);
  const task = buildsProgression(number1, number2, hiddenElementLocation);
  const rightAnswer = String(calcHiddenElement(number1, number2, hiddenElementLocation));
  return cons(task, rightAnswer);
};

const playGame = () => engine(gameInstruction, calculatesTaskRightAnswer);

export default playGame;
