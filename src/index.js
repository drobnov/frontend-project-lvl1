import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

const launchesGameEngine = (gameInstruction, calcTaskRightAnswer) => {
  console.log((`Welcome to the Brain Games!\n${gameInstruction}\n`));
  const questionName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${questionName}!\n`);
  const iter = (count) => {
    const numberRounds = 3;
    const taskRightAnswer = calcTaskRightAnswer();
    const question = readlineSync.question(`Question: ${car(taskRightAnswer)}\nYour answer: `);
    if ((cdr(taskRightAnswer)) !== question) {
      console.log(`${question} is wrong answer ;(. Correct answer was ${cdr(taskRightAnswer)}.\nLet's try again, ${questionName}!`);
      return;
    } if (count === numberRounds) {
      console.log(`Congratulations, ${questionName}!`);
      return;
    } console.log('Correct!');
    iter(count + 1);
  };
  return iter(1);
};

export { launchesGameEngine, cons };
