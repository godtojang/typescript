type User1<T> = {
  name: string;
  age: number;
  gender: "male" | "female";
  something: T;
};

const kim: User1<"쿠키" | "라면"> = {
  name: "김자스",
  age: 24,
  gender: "female",
  something: "라면",
};
