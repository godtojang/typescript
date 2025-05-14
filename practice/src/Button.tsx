import type { CSSProperties } from "react";
type ButtonProps = { backgroundColor: string; borderRadius: string };
const Button = ({ backgroundColor, borderRadius }: ButtonProps) => {
  const buttonStyle: CSSProperties = {
    padding: "5px 10px",
    border: "1px solid black",
    backgroundColor,
    borderRadius,
  };
  return <button style={buttonStyle}>버튼</button>;
};

export default Button;
