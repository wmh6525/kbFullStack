let showTime = (msg) => {
  let dt = new Date();
  console.log(
    `${msg} 현재시간:${dt.getHours()}시 ${dt.getMinutes()}분 ${dt.getSeconds()}초`
  );
};

// setTimeout을 Promise로 감싸는 함수
const delay = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(); // setTimeout이 완료된 후 resolve 호출
    }, ms);
  });
// reject 함수가 나오면 => .catch()
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 처음 시간 출력
showTime('<<시작>>');
// Promise 체이닝으로 로직 처리
delay(3000) // 3초 후
  .then(() => {
    showTime('1 : 3초후');
    return delay(5000); // 5초 후
  })
  .then(() => {
    showTime('2 : 5초후');
    return delay(1000); // 1초 후
  })
  .then(() => {
    showTime('3 : 1초후');
  });

// fetch() => promise 객체를 반환하는 함수
// fetch(url).then().catch() => url 비동기 요청, 응답완료까지 기다림

// promise 패턴 기반의 라이브러리 => axios
