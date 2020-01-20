import { cons } from '@hexlet/pairs';
import engine from '..';
import randomNumberGenerator from '../utils';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isCheckingNumberSimplicity = (number) => {
  if (number <= 1) {
    return true;
  }
  let result;
  for (let caunt = 2; number % caunt !== 0; caunt += 1) {
    result = caunt;
  }
  return result !== number;
};

const definitionTaskRightAnswer = () => {
  const task = randomNumberGenerator(10, 99);
  const rightAnswer = isCheckingNumberSimplicity(task) ? 'no' : 'yes';
  return cons(task, rightAnswer);
};

const playGame = () => engine(gameInstruction, definitionTaskRightAnswer);

export default playGame;
