
import { gameEngine, cons } from '../index';
import { randomNumberGenerator } from '../utils';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const functionTheTask = () => (randomNumberGenerator(100, 2));
const functionRightAnswer = (theTask) => {
  let caunt = 2;
  for (; theTask % caunt !== 0;) {
    caunt += 1;
  }
  return caunt !== theTask ? 'no' : 'yes';
};

const taskRightAnswer = () => {
  const theTask = functionTheTask();
  const rightAnswer = functionRightAnswer(theTask);
  return cons(theTask, rightAnswer);
};

const games = () => gameEngine(gameInstruction, taskRightAnswer);

export default games;
