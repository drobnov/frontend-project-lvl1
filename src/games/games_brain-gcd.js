
const gameInstruction = 'Find the greatest common divisor of given numbers.';
const functionTheTask = () => {
  const number1 = (Math.floor(Math.random() * 100) + 2);
  const number2 = (Math.floor(Math.random() * 100) + 2);
  return `${number1} ${number2}`;
};

const takeNum1 = (theTask) => {
  let num1 = '';
  for (let count = 0; theTask[count] !== ' '; count += 1) {
    num1 += (theTask[count]);
  }
  return num1;
};
const takeNum2 = (theTask) => {
  const num1 = takeNum1(theTask);
  let number2 = '';
  for (let count = num1.length + 1; count < theTask.length; count += 1) {
    number2 += theTask[count];
  }
  return number2;
};

const functionRightAnswer = (theTask) => {
  const num1 = Number(takeNum1(theTask));
  const num2 = Number(takeNum2(theTask));
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
  const result = nod(num1, num2);
  return result;
};

const verification = (rightAnswer, question) => (rightAnswer !== Number(question));

export {
  gameInstruction, functionTheTask, functionRightAnswer, verification,
};
