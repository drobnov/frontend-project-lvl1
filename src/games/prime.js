
import { gameEngine, cons } from '../index';
import { randomNumberGenerator } from '../utils';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const functionTask = () => randomNumberGenerator(10, 99);

const checkingNumberSimplicity = (number) => {
  let caunt = 2;
  for (; number % caunt !== 0;) {
    caunt += 1;
  }
  return caunt !== number ? 'no' : 'yes';
};

const functionRightAnswer = (task) => checkingNumberSimplicity(task);

const taskRightAnswer = () => {
  const task = functionTask();
  const rightAnswer = functionRightAnswer(task);
  return cons(task, rightAnswer);
};

const games = () => gameEngine(gameInstruction, taskRightAnswer);

export default games;
