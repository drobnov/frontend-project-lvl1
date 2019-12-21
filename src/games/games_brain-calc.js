import { takeNumber2 } from '../index';

const gameInstruction = 'What is the result of the expression?';

const functionTheTask = () => {
  const number1 = (Math.floor(Math.random() * 10) + 15);
  const number2 = (Math.floor(Math.random() * 10) + 15);
  const symbol = '+-*+-*+-*+-';
  const generatorSymbol = (symbol[(Math.floor(Math.random() * 10) + 1)]);
  let result;
  if (generatorSymbol === '+') {
    result = `${number1} + ${number2}`;
  } if (generatorSymbol === '-') {
    result = `${number1} - ${number2}`;
  } if (generatorSymbol === '*') {
    result = `${number1} * ${number2}`;
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
  if (rsymbol === '+') {
    result = Number(number1) + Number(number2);
  } if (rsymbol === '-') {
    result = Number(number1) - Number(number2);
  } if (rsymbol === '*') {
    result = Number(number1) * Number(number2);
  }
  return result;
};

const verification = (rightAnswer, question) => (rightAnswer !== (question));

export {
  gameInstruction, functionTheTask, functionRightAnswer, verification,
};
