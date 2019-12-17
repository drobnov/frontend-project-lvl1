import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const question = readlineSync.question('May I have your name?');
  return console.log(`\nHello, ${question}!`);
};

const gameParityCheck = () => {
  console.log(('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n'));
  const question1 = readlineSync.question('May I have your name?');
  console.log(`Hello, ${question1}!\n`);
  const iter = (count) => {
    const randomNumberGenerator = (Math.floor(Math.random() * 100) + 1);
    const question = readlineSync.question(`Question: ${randomNumberGenerator}\nYour answer:`);
    if (randomNumberGenerator % 2 === 0 && question !== 'yes') {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${question1}!`);
    } if (randomNumberGenerator % 2 !== 0 && question !== 'no') {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${question1}!`);
    } if (count === 3) {
      return console.log(`Congratulations, ${question1}!`);
    } console.log('Correct!');
    return iter(count + 1);
  };
  return iter(1);
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
  greeting, gameParityCheck, gameEngine,
};
