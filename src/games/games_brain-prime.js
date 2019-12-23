const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const functionTheTask = () => (Math.floor(Math.random() * 100) + 2);
const functionRightAnswer = (theTask) => {
  let caunt = 2;
  for (; theTask % caunt !== 0;) {
    caunt += 1;
  }
  return caunt !== theTask ? 'no' : 'yes';
};
const verification = (rightAnswer, question) => (rightAnswer !== question);

export {
  gameInstruction, functionTheTask, functionRightAnswer, verification,
};
