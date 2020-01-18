
import engine from '../index';
import randomNumberGenerator from '../utils';
import { cons } from '../../node_modules/@hexlet/pairs/dist/index';

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isParityCheck = (task) => task % 2 === 0;

const calculatesRightAnswer = (task) => (isParityCheck(task) ? 'yes' : 'no');

const calcTaskRightAnswer = () => {
  const task = randomNumberGenerator(30, 99);
  const rightAnswer = calculatesRightAnswer(task);
  return cons(task, rightAnswer);
};

const gameLaunch = () => engine(gameInstruction, calcTaskRightAnswer);

export default gameLaunch;
