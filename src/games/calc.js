import { gameEngine, cons } from '../index';
import { randomNumberGenerator, mathematicalSymbol } from '../utils';

const gameInstruction = 'What is the result of the expression?';

const calculatesTask = (number1, number2, sumbol) => `${number1} ${sumbol} ${number2}`;

const calculatesRightAnswer = (number1, number2, sumbol) => {
  let result;
  switch (sumbol) {
    case '+':
      result = Number(number1) + Number(number2);
      break;
    case '-':
      result = Number(number1) - Number(number2);
      break;
    case '*':
      result = Number(number1) * Number(number2);
      break;
      // no default
  }
  return String(result);
};

const taskRightAnswer = () => {
  const sumbol = mathematicalSymbol[randomNumberGenerator(0, 2)];
  const number1 = randomNumberGenerator(5, 50);
  const number2 = randomNumberGenerator(5, 50);
  const task = calculatesTask(number1, number2, sumbol);
  const rightAnswer = calculatesRightAnswer(number1, number2, sumbol);
  return cons(task, rightAnswer);
};

const games = () => gameEngine(gameInstruction, taskRightAnswer);

export default games;
