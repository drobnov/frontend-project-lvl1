import readlineSync from 'readline-sync';

export const actual = () => {
const question = readlineSync.question('May I have your name?');
return console.log(`\nHello, ${question}!`);
}; 

