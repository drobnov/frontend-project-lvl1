import { takeNumber2 } from '../index';

const gameInstruction = 'Find the greatest common divisor of given numbers.';
const functionTheTask = () => {
  const number1 = (Math.floor(Math.random() * 100) + 2);
  const number2 = (Math.floor(Math.random() * 100) + 2);
  return `${number1} ${number2}`;
};

const takeNumber1 = (theTask) => {
  let num1 = '';
  for (let count = 0; theTask[count] !== ' '; count += 1) {
    num1 += (theTask[count]);
  }
  return num1;
};

const nod = (nu1, nu2) => {
  if (nu2 === 0) {
    return nu1;
  } if (nu1 === 0) {
    return nu2;
  } if (nu1 >= nu2) {
    return nod(nu1 - nu2, nu2);
  } if (nu1 < nu2) {
    return nod(nu1, nu2 - nu1);
  }
  return nod(nu1, nu2);
};
const functionRightAnswer = (theTask) => {
  const num1 = Number(takeNumber1(theTask));
  const num2 = Number(takeNumber2(theTask, takeNumber1));
  const result = nod(num1, num2);
  return result;
};

const verification = (rightAnswer, question) => (rightAnswer !== Number(question));

export {
  gameInstruction, functionTheTask, functionRightAnswer, verification,
};