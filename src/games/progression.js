import { cons } from '@hexlet/pairs';
import engine from '..';
import randomNumberGenerator from '../utils';

const gameInstruction = 'What number is missing in the progression?';

const lengthProgression = 9;

const definitionProgression = (num1, num2, hiddenElementLocation) => {
  let firstDigitProgression = num1;
  let result = '';
  for (let count = 0; count <= lengthProgression; count += 1) {
    firstDigitProgression += num2;
    let elementProgression;
    if (hiddenElementLocation === count) {
      elementProgression = '..';
    } else {
      elementProgression = String(firstDigitProgression);
    }
    result = `${result} ${elementProgression}`;
  }
  return result;
};

const calcHiddenElement = (num1, num2, hiddenElementLoc) => num1 + num2 * (hiddenElementLoc + 1);

const definitionTaskRightAnswer = () => {
  const number1 = (randomNumberGenerator(10, 50));
  const number2 = (randomNumberGenerator(2, 10));
  const hiddenElementLocation = randomNumberGenerator(1, lengthProgression - 1);
  const task = definitionProgression(number1, number2, hiddenElementLocation);
  const rightAnswer = String(calcHiddenElement(number1, number2, hiddenElementLocation));
  return cons(task, rightAnswer);
};

const playGame = () => engine(gameInstruction, definitionTaskRightAnswer);

export default playGame;
