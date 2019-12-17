
const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';
const functionTheTask = () => (Math.floor(Math.random() * 100) + 1);
const functionRightAnswer = (theTask) => {
  let result = '';
  if (theTask % 2 === 0) {
    result = 'yes';
  } if (theTask % 2 !== 0) {
    result = 'no';
  }
  return result;
};
const verification = (rightAnswer, question) => (rightAnswer !== question);

export {
  gameInstruction, functionTheTask, functionRightAnswer, verification,
};
