// annotation annotate : 명시하다

// 기본 : number, string, boolean, undefined, null
const a: string = String(100);
const b: number = 100;
const c: boolean = !1;

// 참조 : array, object
const d: number[] = [1, 2, 3, 4, 5];
const e: boolean[] = [true, false, true, false, true];

const props: { text: string } = { text: "네모네모" };

const f: { name: string; price: number } = {
  name: "아메리카노",
  price: 2000,
};

// 이름, 나이 오브젝트 배열

const g: { name: string; age: number }[] = [
  { name: "종욱", age: 24 },
  { name: "심종욱", age: 24 },
];

const h: { name: string; price: number; ingredient: string[] }[] = [
  { name: "쿠키", price: 2500, ingredient: ["밀가루", "설탕"] },
  { name: "달고나", price: 3500, ingredient: ["소다", "설탕"] },
];

// add a, b a + b
const add = (a: number, b: number) => a + b;
