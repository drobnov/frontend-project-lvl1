import readlineSync from 'readline-sync';

const greeting = () => {
  const question = readlineSync.question('May I have your name?');
  return console.log(`\nHello, ${question}!`);
};
// eslint-disable-next-line import/prefer-default-export
export { greeting };
