
import { gameEngine, cons } from '../index';
import { randomNumberGenerator } from '../utils';

const gameInstruction = 'What number is missing in the progression?';

const arithmeticProgression = (num1, num2) => {
  let firstDigitOfTheProgression = num1;
  let result = '';
  for (let count = 1; count <= 10; count += 1) {
    firstDigitOfTheProgression += num2;
    result = `${result} ${firstDigitOfTheProgression}`;
  }
  return result;
};

const locationOfTheHiddenElement = (progression) => {
  const takeElement = (randomNumberGenerator(10, 9));
  let caunt = takeElement;
  for (; progression[caunt] !== ' ';) {
    caunt += 1;
  }
  return caunt;
};

const takeHiddenElement = (progression) => {
  const caunt = locationOfTheHiddenElement(progression);
  let result2 = '';
  for (let caunt1 = caunt + 1; progression[caunt1] !== ' '; caunt1 += 1) {
    result2 += progression[caunt1];
  }
  return result2;
};

const progressionStrWithHiddenElement = (progression) => {
  const caunt = locationOfTheHiddenElement(progression);
  const hiddenElement = takeHiddenElement(progression);
  const hiddenelementLength = hiddenElement.length;
  let result3 = '';
  let caunt2 = 0;
  for (; caunt2 <= caunt - 1; caunt2 += 1) {
    result3 += progression[caunt2];
  }
  const a = caunt2 + hiddenelementLength;
  let result4 = '';
  for (let caunt3 = a + 1; caunt3 < progression.length; caunt3 += 1) {
    result4 += progression[caunt3];
  }
  return `${result3} ..${result4}`;
};

const functionTheTask = () => {
  const number1 = (randomNumberGenerator(10, 1));
  const number2 = (randomNumberGenerator(10, 1));
  const progression = arithmeticProgression(number1, number2);
  const strProgression = progressionStrWithHiddenElement(progression);
  return strProgression;
};

const takeNumbeInFrontHiddenElementAction1 = (theTask) => {
  let result1 = '';
  for (let caunt = 0; theTask[caunt] !== '.'; caunt += 1) {
    result1 = `${result1}${theTask[caunt]}`;
  }
  return result1;
};

const takeNumbeInFrontHiddenElementAction2 = (theTask) => {
  const result1 = takeNumbeInFrontHiddenElementAction1(theTask);
  let result2 = '';
  for (let caunt = result1.length - 2; result1[caunt] !== ' '; caunt -= 1) {
    result2 = `${result1[caunt]}${result2}`;
  }
  return Number(result2);
};

const takeNumberAfterHiddenElement = (theTask) => {
  const result1 = takeNumbeInFrontHiddenElementAction1(theTask);
  let result2 = '';
  for (let caunt = result1.length + 3; theTask[caunt] !== ' '; caunt += 1) {
    result2 = `${result2}${theTask[caunt]}`;
  }
  return Number(result2);
};

const functionRightAnswer = (theTask) => {
  const number1 = takeNumbeInFrontHiddenElementAction2(theTask);
  const number2 = takeNumberAfterHiddenElement(theTask);
  const arithmeticProgressionDifference = (number2 - number1) / 2;
  const result = number1 + arithmeticProgressionDifference;
  return String(result);
};

const taskRightAnswer = () => {
  const theTask = functionTheTask();
  const rightAnswer = functionRightAnswer(theTask);
  return cons(theTask, rightAnswer);
};

const games = () => gameEngine(gameInstruction, taskRightAnswer);

export default games;
