import { InstructionProps } from "./Instruction";

type TitleInstructionComponentProps = Pick<InstructionProps, "Instruction">;

const TitleInstruction = ({ Instruction }: TitleInstructionComponentProps) => {
  return <span className='font-bold text-xl'>{Instruction}</span>;
};

export default TitleInstruction;
