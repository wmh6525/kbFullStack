let showTime = (msg) => {
  let dt = new Date();
  console.log(
    `${msg} 현재시간:${dt.getHours()}시 ${dt.getMinutes()}분 ${dt.getSeconds()}초`
  );
};

// 처음 시간 출력
showTime('<<시작>>');

// 3초 후 실행
setTimeout(() => {
  showTime('1 : 3초후');

  // 5초 후 실행
  setTimeout(() => {
    showTime('2 : 5초후');

    // 3초 후 실행
    setTimeout(() => {
      showTime('3 : 1초후');
    }, 1000);
  }, 2000);
}, 3000);
// 비동기 작업에서 동기처리를 하기 위해 promise 가 필요하다.
