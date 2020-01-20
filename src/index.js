import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

const engine = (gameInstruction, calcTaskRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameInstruction);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!\n`);
  const iter = (count) => {
    const taskRightAnswer = calcTaskRightAnswer();
    const task = car(taskRightAnswer);
    const rightAnswer = cdr(taskRightAnswer);
    console.log(`Question: ${task}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (rightAnswer !== answerUser) {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } if (count === roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    } console.log('Correct!');
    iter(count + 1);
  };
  iter(1);
};

export default engine;
