import { gameEngine, randomNumberGenerator } from '../index';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const functionTheTask = () => (randomNumberGenerator(100, 2));
const functionRightAnswer = (theTask) => {
  let caunt = 2;
  for (; theTask % caunt !== 0;) {
    caunt += 1;
  }
  return caunt !== theTask ? 'no' : 'yes';
};

const verification = (rightAnswer, question) => (rightAnswer !== question);

const games = () => gameEngine(gameInstruction, functionTheTask, functionRightAnswer, verification);

export default games;
