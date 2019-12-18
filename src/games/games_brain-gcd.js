
const gameInstruction = 'Find the greatest common divisor of given numbers.';
const functionTheTask = () => {
  const number1 = (Math.floor(Math.random() * 100) + 2);
  const number2 = (Math.floor(Math.random() * 100) + 2);
  return `${number1} ${number2}`;
};

const functionRightAnswer = (theTask) => {
  let number1 = '';
  for (let count = 0; theTask[count] !== ' '; count += 1) {
    number1 += (theTask[count]);
  }
  let number2 = '';
  for (let count = number1.length + 1; count < theTask.length; count += 1) {
    number2 += theTask[count];
  }
  const num1 = Number(number1);
  const num2 = Number(number2);

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
