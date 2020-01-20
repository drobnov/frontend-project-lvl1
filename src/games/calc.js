import { cons } from '@hexlet/pairs';
import engine from '..';
import randomNumberGenerator from '../utils';

const gameInstruction = 'What is the result of the expression?';

const operator = '+-*';

const definitionTask = (number1, number2, sumbol) => `${number1} ${sumbol} ${number2}`;

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

const definitionTaskRightAnswer = () => {
  const sumbol = operator[randomNumberGenerator(0, operator.length - 1)];
  const number1 = randomNumberGenerator(5, 50);
  const number2 = randomNumberGenerator(5, 50);
  const task = definitionTask(number1, number2, sumbol);
  const rightAnswer = String(calculatesRightAnswer(number1, number2, sumbol));
  return cons(task, rightAnswer);
};

const playGame = () => engine(gameInstruction, definitionTaskRightAnswer);

export default playGame;
