type User2 = { name: string; age: number; gender: "male" | "female" };
type User3 = { name: string; age?: number; gender?: "male" | "female" };

// Partial 모든 속성을 optional[?] 하게 바꾸기
type A1 = Partial<User2>;

// Required 모든 속성을 required(필수)하게 바꾸기
type B1 = Required<User3>;

// Pick 특정 키만 선택하여 타입 생성
type C1 = Pick<User2, "name">;

// Omit 특정 키를 제외한 타입 생성
type D1 = Omit<User2, "name">;

// Record

type Role = "admin" | "user" | "superuser";

type E1 = Record<Role, boolean>;
