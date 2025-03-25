const express = require('express');
const app = express();
const port = 3000;
//CORS문제 해결
const cors = require('cors');
app.use(cors());
/*요청ContentType이 x-www-form-urlencoded인 경우
요청의 body사용하고 싶다면 아래 함수를 사용하세요*/
app.use(express.urlencoded({ extended: true }));
/*요청ContentType이 application/json인 경우
요청의 body사용하고 싶다면 아래 함수를 사용하세요*/
app.use(express.json());
//get요청이 되었을때 할 일
app.get('/', (req, res) => {
  res.send('WELCOME');
});

app.get('/product', (req, res) => {
  //   res.send('아메리카노, 아이스아메리카노, 라테');
  const products = [
    {
      prodNo: 'C0001',
      prodName: '나이트로 바닐라 크림 라떼',
      prodPrice: 1500,
      img: '/Image/drink1.png',
    },
    {
      prodNo: 'C0002',
      prodName: '리저브 HOT라떼',
      prodPrice: 1500,
      img: '/Image/drink2.jpg',
    },
    {
      prodNo: 'C0003',
      prodName: 'HOT아메리카노',
      prodPrice: 2000,
      img: '/Image/drink3.jpg',
    },
    {
      prodNo: 'C0004',
      prodName: 'HOT카페 라테',
      prodPrice: 2000,
      img: '/Image/drink4.jpg',
    },
    {
      prodNo: 'C0005',
      prodName: '콜드브루몰트',
      prodPrice: 2500,
      img: '/Image/drink5.jpg',
    },
    {
      prodNo: 'C0006',
      prodName: '카페브레베',
      prodPrice: 3500,
      img: '/Image/drink6.jpg',
    },
    {
      prodNo: 'C0007',
      prodName: '바닐라라떼',
      prodPrice: 3500,
      img: '/Image/drink7.jpg',
    },
  ];
  res.json(products);
});

app.get('/product/:prodNo', (req, res) => {
  // res.send(`${req.params.prodNo}상품의 상세내용입니다`);
  let product;
  if (req.params.prodNo == 'C0001') {
    product = { prodNo: 'C0001', prodName: '아메리카노', img: 'C0001.jpg' };
  } else if (req.params.prodNo == 'C0002') {
    product = {
      prodNo: 'C0002',
      prodName: '아이스아메리카노',
      img: 'C0002.jpg',
    };
  } else if (req.params.prodNo == 'C0003') {
    product = { prodNo: 'C0003', prodName: '라테', img: 'C0003.jpg' };
  } else if (req.params.prodNo == 'C0004') {
    product = { prodNo: 'C0004', prodName: '아이스라테', img: 'C0004.jpg' };
  } else if (req.params.prodNo == 'C0005') {
    product = { prodNo: 'C0005', prodName: '콜드브루몰트', img: 'C0005.jpg' };
  } else if (req.params.prodNo == 'C0006') {
    product = { prodNo: 'C0006', prodName: '카페브레베', img: 'C0006.jpg' };
  } else if (req.params.prodNo == 'C0007') {
    product = { prodNo: 'C0007', prodName: '바닐라라떼', img: 'C0007.jpg' };
  } else {
    product = {};
  }
  res.json(product);
});

app.get('/cartList', (req, res) => {
  const products = [
    {
      prodNo: 'C0001',
      prodName: '크림베리라떼',
      prodPrice: 4800,
      img: '/Image/drink1.png',
      prodNum: 1,
    },
    {
      prodNo: 'C0002',
      prodName: '따뜻한 카페라떼',
      prodPrice: 1500,
      img: '/Image/drink2.jpg',
      prodNum: 1,
    },
    {
      prodNo: 'C0003',
      prodName: '라테',
      prodPrice: 2000,
      img: '/Image/drink3.jpg',
      prodNum: 1,
    },
    {
      prodNo: 'C0004',
      prodName: '아이스라테',
      prodPrice: 2000,
      img: '/Image/drink4.jpg',
      prodNum: 1,
    },
    {
      prodNo: 'C0005',
      prodName: '콜드브루몰트',
      prodPrice: 2500,
      img: '/Image/drink5.jpg',
      prodNum: 1,
    },
    {
      prodNo: 'C0006',
      prodName: '카페브레베',
      prodPrice: 3500,
      img: '/Image/drink6.jpg',
      prodNum: 1,
    },
    {
      prodNo: 'C0007',
      prodName: '바닐라라떼',
      prodPrice: 3500,
      img: '/Image/drink7.jpg',
      prodNum: 1,
    },
  ];
  res.json(products);
});

//
let customers = [{ id: 'id99', pwd: 'pwd99' }]; //고객저장소
function findById(id) {
  return customers.find((element) => element.id === id);
}
//http://localhost:3000/login
app.post('/login', (req, res) => {
  // if (!req.body.id || req.body.id == 'admin') {
  console.log(req.body.id, req.body.pwd);
  const c = findById(req.body.id);
  if (!req.body.id || !c || c.pwd !== req.body.pwd) {
    res.status(400);
    res.send('로그인 실패');
  } else {
    res.status(200);
    res.send('로그인 성공');
  }
});

//가입용
app.post('/signup', (req, res) => {
  //req.body가 {id: , pwd:   ,name: }객체가 되도록 front를 완성하세요
  //id프로퍼티값은 사용자가 입력한 아이디값으로,
  //pwd프로퍼티값은 사용자가 입력한 비밀번호값으로,
  //name프로퍼티값은 사용자가 입력한 이름값으로 전달되어야합니다
  // console.log(req.body)
  const c = req.body;
  //고객저장소의 고객의 아이디값과 요청된 정보아이디값이 같은 경우에는
  //"이미 저장된 아이디입니다"실패메시지 응답
  //고객저장소의 고객의 아이디값과 요청된 정보아이디값이 다른경우에는
  //고객저장소에 요청된 정보 추가
  //'가입 성공'성공메시지 응답
  if (customers.find((element) => element.id === c.id)) {
    res.status(400);
    res.send('이미 저장된 아이디입니다.');
  } else {
    customers.push(c);
    console.log('추가된 고객저장소', customers);
    res.status(200);
    res.send('가입 성공');
  }
});

//Listen for connections.
app.listen(port, () => {
  console.log('3000번 포트에서 backend server 실행중...');
});
