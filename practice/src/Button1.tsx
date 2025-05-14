import type { CSSProperties } from "react";

type Color = "primary" | "secondary";
type Intensity = "hard" | "smooth" | "circle";

type ButtonProps = {
  backgroundColor: Color;
  borderRadius: Intensity;
};

const Button1 = ({ backgroundColor, borderRadius }: ButtonProps) => {
  const bg: { [key in Color]: "#205BF3" | "#478DF5" } = {
    primary: "#205BF3",
    secondary: "#478DF5",
  };

  const br: { [key in Intensity]: "0px" | "5px" | "10px" } = {
    hard: "0px",
    smooth: "5px",
    circle: "10px",
  };

  const buttonStyle: CSSProperties = {
    color: "white",
    padding: "10px 45px",
    border: "none",
    backgroundColor: bg[backgroundColor],
    borderRadius: br[borderRadius],
  };
  return <button style={buttonStyle}>Button</button>;
};

export default Button1;
