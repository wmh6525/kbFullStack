const hi = (name) => {
  console.log(`${name}님, 안녕하세요?`);
};
const goodbye = (name) => {
  console.log(`${name}님, 안녕히 가세요.`);
};
const say = { hi, goodbye };
export default say;
