
import { gameEngine, cons } from '../index';
import { randomNumberGenerator } from '../utils';

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const calculatesRightAnswer = (task) => {
  const isParityCheck = task % 2 === 0;
  return isParityCheck ? 'yes' : 'no';
};
const taskRightAnswer = () => {
  const task = randomNumberGenerator(30, 99);
  const rightAnswer = calculatesRightAnswer(task);
  return cons(task, rightAnswer);
};

const games = () => gameEngine(gameInstruction, taskRightAnswer);

export default games;
