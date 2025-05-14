// import type { CSSProperties } from "react";

import { useState } from "react";

// const Box = (props: { text: string }) => {
//   const boxStyle: CSSProperties = {
//     width: "100px",
//     height: "100px",
//     backgroundColor: "pink",
//   };

//   return <div style={boxStyle}>{props.text}</div>;
// };

// export default Box;

type Box = { text: "하늘" | "핑크"; backgroundColor: "skyblue" | "pink" };

const Box = () => {
  // color, text
  // 배경색: skyblue, pink 문구: 하늘, 핑크
  // 클릭하면 토글로 하늘 <-> 핑크

  const [box, setBox] = useState<Box>({
    text: "하늘",
    backgroundColor: "skyblue",
  });

  const handleClick = () => {
    setBox((prev) => {
      const text = prev.text == "하늘" ? "핑크" : "하늘";
      const backgroundColor =
        prev.backgroundColor == "skyblue" ? "pink" : "skyblue";
      return { text, backgroundColor };
    });
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: box.backgroundColor,
        padding: "20px",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      {box.text}
    </div>
  );
};

export default Box;
