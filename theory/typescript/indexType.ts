type User = {
  id: `#${number}`;
  name: string;
  email: string;
};
// keyof 연산자
// 역할: 프로퍼티 키를 유니온 타입으로 반환
type F = keyof User;
const test10: F = "id";

// 인덱스 타입
type G = User["name"];
type G1 = User["id"];
const test11: G = "아무거나 문자열";
const test12: G1 = "#1234123";

// 인덱스 시그니쳐
type H = {
  [key: number]: string;
};

const test13: H = {
  1: "떡볶이",
  2: "라면",
};

// in 연산자
type I = {
  [key in "kim" | "lee"]: number;
};

const test14: I = {
  kim: 1,
  lee: 2,
  //   park: 3,
};
