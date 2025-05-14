// union typoe (|) [합집합]
const a2: number | string = 100;

//타입 알리아스
type icecream = { icecream: string; price?: number; kcal?: number };

// {icecreamName, price, kcal}
// string, number, number
const b2: { icecream: string; price?: number; kcal?: number } = {
  icecream: "아이스크림",
};

// Person 정의 이름, 나이
type Person = { name: string; age: number };
// Colleger 대학생 전공, 학년
type Colleger = { major: string; grade: number };
// Worker 노동자 직급, 급여
type Workers = { rank: string; wage: number };
type Chungchun = Person & Colleger & Workers;

// intersection type (&) [교집합]
const c3: { name: string } & { age: number } = {
  name: "또랭",
  age: 20,
};

const jong: Chungchun = {
  age: 24,
  grade: 4,
  major: "IT",
  name: "종욱이",
  rank: "학생",
  wage: 0,
};
