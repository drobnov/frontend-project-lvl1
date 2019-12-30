import readlineSync from 'readline-sync';

const gameEngine = (gameInstruction, functionTheTask, functionRightAnswer) => {
  console.log((`Welcome to the Brain Games!\n${gameInstruction}\n`));
  const questionName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${questionName}!\n`);
  const iter = (count) => {
    const theTask = functionTheTask();
    const rightAnswer = functionRightAnswer(theTask);
    const question = readlineSync.question(`Question: ${theTask}\nYour answer: `);
    if (rightAnswer !== question) {
      return console.log(`${question} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${questionName}!`);
    } if (count === 3) {
      return console.log(`Congratulations, ${questionName}!`);
    } console.log('Correct!');
    return iter(count + 1);
  };
  return iter(1);
};

export default gameEngine;
