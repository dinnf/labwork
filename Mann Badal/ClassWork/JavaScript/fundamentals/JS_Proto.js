const funcKey = () => console.log('func as key');
const user = {
  [funcKey]: "I am a value of a function",
};
console.log(user);