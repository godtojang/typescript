import type { CSSProperties } from "react";

const Circle = (props: { text: string }) => {
  const circleStyle: CSSProperties = {
    width: "100px",
    height: "100px",
    backgroundColor: "pink",
    borderRadius: "9999px",
    border: "1px solid black",
  };

  return <div style={circleStyle}>{props.text}</div>;
};

export default Circle;
