import Box from "./Box";
import Button from "./Button";
import Button1 from "./Button1";
import Circle from "./Circle";
import Text from "./Text";

function App() {
  return (
    <>
      <Box text="네모짱" />
      <Circle text="동그라미짱" />
      <Button backgroundColor="pink" borderRadius="10px" />
      <Text content="타입스크립트 뭐이리 어렵냐" color="blue" />
      <Button1 backgroundColor="primary" borderRadius="hard" />
      <Button1 backgroundColor="primary" borderRadius="smooth" />
      <Button1 backgroundColor="primary" borderRadius="circle" />

      <Button1 backgroundColor="secondary" borderRadius="hard" />
      <Button1 backgroundColor="secondary" borderRadius="smooth" />
      <Button1 backgroundColor="secondary" borderRadius="circle" />
    </>
  );
}

export default App;
