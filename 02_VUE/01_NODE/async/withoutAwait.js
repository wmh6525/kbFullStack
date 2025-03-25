// promise 사용하면 fetch 사용 가능
fetch('https://jsonplaceholder.tyicode.com/users')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
