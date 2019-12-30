import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

const gameEngine = (gameInstruction, taskRightAnswer) => {
  console.log((`Welcome to the Brain Games!\n${gameInstruction}\n`));
  const questionName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${questionName}!\n`);
  const iter = (count) => {
    const theTaskRightAnswer = taskRightAnswer();
    const question = readlineSync.question(`Question: ${car(theTaskRightAnswer)}\nYour answer: `);
    if ((cdr(theTaskRightAnswer)) !== question) {
      return console.log(`${question} is wrong answer ;(. Correct answer was ${cdr(theTaskRightAnswer)}.\nLet's try again, ${questionName}!`);
    } if (count === 3) {
      return console.log(`Congratulations, ${questionName}!`);
    } console.log('Correct!');
    return iter(count + 1);
  };
  return iter(1);
};

export { gameEngine, cons };
