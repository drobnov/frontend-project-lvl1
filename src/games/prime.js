
import { gameEngine, cons } from '../index';
import { randomNumberGenerator } from '../utils';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkingNumberSimplicity = (number) => {
  if (number <= 1) {
    return 'no';
  }
  let caunt = 2;
  for (; number % caunt !== 0;) {
    caunt += 1;
  }
  const isChecking = caunt !== number;
  return isChecking ? 'no' : 'yes';
};

const taskRightAnswer = () => {
  const task = randomNumberGenerator(10, 99);
  const rightAnswer = checkingNumberSimplicity(task);
  return cons(task, rightAnswer);
};

const games = () => gameEngine(gameInstruction, taskRightAnswer);

export default games;
