import type { CSSProperties } from "react";

const Box = (props: { text: string }) => {
  const boxStyle: CSSProperties = {
    width: "100px",
    height: "100px",
    backgroundColor: "pink",
  };

  return <div style={boxStyle}>{props.text}</div>;
};

export default Box;
