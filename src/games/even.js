import { cons } from '@hexlet/pairs';
import engine from '..';
import randomNumberGenerator from '../utils';

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (task) => task % 2 === 0;

const definitionTaskRightAnswer = () => {
  const task = randomNumberGenerator(30, 99);
  const rightAnswer = (isEven(task) ? 'yes' : 'no');
  return cons(task, rightAnswer);
};

const playGame = () => engine(gameInstruction, definitionTaskRightAnswer);

export default playGame;
