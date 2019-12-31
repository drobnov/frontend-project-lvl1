
const randomNumberGenerator = (min, max) => Math.floor(Math.random() * (max + 1) - min) + min;

const getNumber2 = (task, getNumber1) => {
  const number1 = getNumber1(task);
  let number2 = '';
  for (let count = number1.length + 1; count < task.length; count += 1) {
    number2 += task[count];
  }
  return number2;
};

export {
  getNumber2, randomNumberGenerator,
};
