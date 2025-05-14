export type InstructionProps = {
  required?: "mandantory" | "option";
  Instruction: string;
};

const Instruction = ({ required, Instruction }: InstructionProps) => {
  const requiredObj = {
    mandantory: "[필수]",
    option: "[선택]",
    no: "",
  };

  return (
    <span>
      {requiredObj[required || "no"]} {Instruction}
    </span>
  );
};

export default Instruction;
