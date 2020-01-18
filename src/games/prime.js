
import engine from '../index';
import randomNumberGenerator from '../utils';
import { cons } from '../../node_modules/@hexlet/pairs/dist/index';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isCheckingNumberSimplicity = (number) => {
  if (number <= 1) {
    return 'no';
  }
  let caunt = 2;
  for (; number % caunt !== 0;) {
    caunt += 1;
  }
  return caunt !== number;
};

const calculatesTask = (task) => (isCheckingNumberSimplicity(task) ? 'no' : 'yes');

const calcTaskRightAnswer = () => {
  const task = randomNumberGenerator(10, 99);
  const rightAnswer = calculatesTask(task);
  return cons(task, rightAnswer);
};

const gameLaunch = () => engine(gameInstruction, calcTaskRightAnswer);

export default gameLaunch;
