
import { gameEngine, cons } from '../index';
import { randomNumberGenerator } from '../utils';

const gameInstruction = 'What number is missing in the progression?';

const lengthProgression = 10;

const arithmeticProgression = (num1, num2) => {
  let firstDigitProgression = num1;
  let result = '';
  for (let count = 1; count <= lengthProgression; count += 1) {
    firstDigitProgression += num2;
    result = `${result} ${firstDigitProgression}`;
  }
  return result;
};

const locationHiddenElement = (progression) => {
  const getElement = (randomNumberGenerator(0, 20));
  let caunt = getElement;
  for (; progression[caunt] !== ' ';) {
    caunt += 1;
  }
  return caunt;
};

const getHiddenElement = (progression) => {
  const caunt = locationHiddenElement(progression);
  let result2 = '';
  for (let caunt1 = caunt + 1; progression[caunt1] !== ' '; caunt1 += 1) {
    result2 += progression[caunt1];
  }
  return result2;
};

const progressionWithoutHiddenElement = (progression) => {
  const caunt = locationHiddenElement(progression);
  const hiddenElement = getHiddenElement(progression);
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

const functionTask = () => {
  const number1 = (randomNumberGenerator(10, 50));
  const number2 = (randomNumberGenerator(2, 10));
  const progression = arithmeticProgression(number1, number2);
  const strProgression = progressionWithoutHiddenElement(progression);
  return strProgression;
};

const getNumbeInFrontHiddenElementAction1 = (task) => {
  let result1 = '';
  for (let caunt = 0; task[caunt] !== '.'; caunt += 1) {
    result1 = `${result1}${task[caunt]}`;
  }
  return result1;
};

const getNumbeInFrontHiddenElementAction2 = (task) => {
  const result1 = getNumbeInFrontHiddenElementAction1(task);
  let result2 = '';
  for (let caunt = result1.length - 2; result1[caunt] !== ' '; caunt -= 1) {
    result2 = `${result1[caunt]}${result2}`;
  }
  return Number(result2);
};

const getNumberAfterHiddenElement = (task) => {
  const result1 = getNumbeInFrontHiddenElementAction1(task);
  let result2 = '';
  for (let caunt = result1.length + 3; task[caunt] !== ' '; caunt += 1) {
    result2 = `${result2}${task[caunt]}`;
  }
  return Number(result2);
};

const functionRightAnswer = (task) => {
  const number1 = getNumbeInFrontHiddenElementAction2(task);
  const number2 = getNumberAfterHiddenElement(task);
  const arithmeticProgressionDifference = (number2 - number1) / 2;
  const result = number1 + arithmeticProgressionDifference;
  return String(result);
};

const taskRightAnswer = () => {
  const task = functionTask();
  const rightAnswer = functionRightAnswer(task);
  return cons(task, rightAnswer);
};

const games = () => gameEngine(gameInstruction, taskRightAnswer);

export default games;
