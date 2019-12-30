
const randomNumberGenerator = (number1, number2) => (Math.floor(Math.random() * number1) + number2);

const takeNumber2 = (theTask, takeNumber1) => {
  const number1 = takeNumber1(theTask);
  let number2 = '';
  for (let count = number1.length + 1; count < theTask.length; count += 1) {
    number2 += theTask[count];
  }
  return number2;
};

export {
  takeNumber2, randomNumberGenerator,
};
