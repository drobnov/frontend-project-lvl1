
import gameEngine from '../index';
import { randomNumberGenerator } from '../utils';

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const functionTheTask = () => (randomNumberGenerator(100, 1));

const parityChecks = (number) => (number % 2 === 0 ? 'yes' : 'no');

const functionRightAnswer = (theTask) => parityChecks(theTask);

const games = () => gameEngine(gameInstruction, functionTheTask, functionRightAnswer);

export default games;
