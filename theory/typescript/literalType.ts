type Color = "black" | "pink" | "yellow";
const makeColor = (color: Color) => `${color} 색은 이쁘다`;
makeColor("pink");

type Coffee1 = "아메리카노" | "라떼" | "민초" | "모카";

// 템플릿 리터럴 타입
type Greeting = `Hello ${"kim" | "lee" | "park"}`;
const a5: Greeting = "Hello lee";

type Language = "ko" | "en" | "jp";
type Message = `message_${Language}`;
const b3: Message = "message_en";
