
import { gameEngine, cons } from '../index';
import { randomNumberGenerator } from '../utils';

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const functionTask = () => randomNumberGenerator(30, 99);

const functionRightAnswer = (task) => (task % 2 === 0 ? 'yes' : 'no');

const taskRightAnswer = () => {
  const task = functionTask();
  const rightAnswer = functionRightAnswer(task);
  return cons(task, rightAnswer);
};

const games = () => gameEngine(gameInstruction, taskRightAnswer);

export default games;
