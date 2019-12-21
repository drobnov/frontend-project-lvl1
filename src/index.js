import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const question = readlineSync.question('May I have your name?');
  return console.log(`\nHello, ${question}!`);
};

const takeNumber2 = (theTask, takeNumber1) => {
  const number1 = takeNumber1(theTask);
  let number2 = '';
  for (let count = number1.length + 1; count < theTask.length; count += 1) {
    number2 += theTask[count];
  }
  return number2;
};
const gameEngine = (gameInstruction, functionTheTask, functionRightAnswer, verification) => {
  console.log((`Welcome to the Brain Games!\n${gameInstruction}\n`));
  const questionName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${questionName}!\n`);
  const iter = (count) => {
    functionTheTask();
    const theTask = functionTheTask();
    const rightAnswer = functionRightAnswer(theTask);
    const question = readlineSync.question(`Question: ${theTask}\nYour answer: `);
    if (verification(rightAnswer, question) === true) {
      return console.log(`${question} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${questionName}!`);
    } if (count === 3) {
      return console.log(`Congratulations, ${questionName}!`);
    } console.log('Correct!');
    return iter(count + 1);
  };
  return iter(1);
};

export {
  greeting, gameEngine, takeNumber2,
};
