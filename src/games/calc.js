import engine from '../index';
import randomNumberGenerator from '../utils';
import { cons } from '../../node_modules/@hexlet/pairs/dist/index';

const gameInstruction = 'What is the result of the expression?';

const mathematicalSymbols = '+-*';

const calculatesTask = (number1, number2, sumbol) => `${number1} ${sumbol} ${number2}`;

const calculatesRightAnswer = (number1, number2, sumbol) => {
  let result;
  switch (sumbol) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
      // no default
  }
  return result;
};

const calcTaskRightAnswer = () => {
  const sumbol = mathematicalSymbols[randomNumberGenerator(0, mathematicalSymbols.length - 1)];
  const number1 = randomNumberGenerator(5, 50);
  const number2 = randomNumberGenerator(5, 50);
  const task = calculatesTask(number1, number2, sumbol);
  const rightAnswer = String(calculatesRightAnswer(number1, number2, sumbol));
  return cons(task, rightAnswer);
};

const gameLaunch = () => engine(gameInstruction, calcTaskRightAnswer);

export default gameLaunch;
