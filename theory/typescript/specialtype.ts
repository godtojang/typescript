const a1: any = [100];

// 서버에서 데이터 가져올 때
// const a2: (url:string): unknown => {};

// 함수 변환 없음
const a3 = (name: string): void => {};

// Empty Object : 아무 값이나 될 수 있음
const a4: {} = { name: "또랭이" };

function test1() {}
const test2 = () => {};

const test3 = {
  name: "라식이",
  age: 10,
  getOld: function () {
    this.name += 1;
  },
};

// const a5: Function;
// const a6: never;
