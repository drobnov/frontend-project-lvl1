import gameEngine from '../index';
import { takeNumber2, randomNumberGenerator } from '../utils';

const gameInstruction = 'What is the result of the expression?';

const functionTheTask = () => {
  const number1 = randomNumberGenerator(10, 15);
  const number2 = randomNumberGenerator(10, 15);
  const symbol = '+-*+-*+-*+-';
  const generatorSymbol = (symbol[randomNumberGenerator(10, 1)]);
  let result;
  switch (generatorSymbol) {
    case '+':
      result = `${number1} + ${number2}`;
      break;
    case '-':
      result = `${number1} - ${number2}`;
      break;
    case '*':
      result = `${number1} * ${number2}`;
      break;
      // no default
  }
  return result;
};

const takeNumber1 = (theTask) => {
  let number1 = '';
  for (let count = 0; theTask[count] !== '+' && theTask[count] !== '-' && theTask[count] !== '*'; count += 1) {
    number1 += theTask[count];
  }
  return number1;
};

const functionRightAnswer = (theTask) => {
  const number1 = takeNumber1(theTask);
  const number2 = takeNumber2(theTask, takeNumber1);
  const rsymbol = theTask[number1.length];
  let result;
  switch (rsymbol) {
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

const games = () => gameEngine(gameInstruction, functionTheTask, functionRightAnswer);

export default games;
