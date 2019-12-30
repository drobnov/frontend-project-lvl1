
import { gameEngine, cons } from '../index';
import { randomNumberGenerator } from '../utils';

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const functionTheTask = () => (randomNumberGenerator(100, 1));

const parityChecks = (number) => (number % 2 === 0 ? 'yes' : 'no');

const functionRightAnswer = (theTask) => parityChecks(theTask);

const taskRightAnswer = () => {
  const theTask = functionTheTask();
  const rightAnswer = functionRightAnswer(theTask);
  return cons(theTask, rightAnswer);
};

const games = () => gameEngine(gameInstruction, taskRightAnswer);

export default games;
