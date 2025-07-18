let showTime = (msg) => {
  let dt = new Date();
  console.log(
    `${msg} 현재시간:${dt.getHours()}시 ${dt.getMinutes()}분 ${dt.getSeconds()}초`
  );
};

// 처음 시간 출력
showTime('');

// 3초 후 실행
setTimeout(() => {
  showTime('1 : 3초후');
}, 3000);

// 5초 후 실행
setTimeout(() => {
  showTime('2 : 5초후');
}, 5000);

// 1초 후 실행
setTimeout(() => {
  showTime('3 : 1초후');
}, 1000);

// 동시에 함수들이 실행되므로 1 3 5초 순서대로 출력이 된다.
