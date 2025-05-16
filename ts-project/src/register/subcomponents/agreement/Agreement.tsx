import Checker, { CheckerProps } from "./checkers/Checker";
import Instruction, { InstructionComponentProps } from "./instructions/Instruction";

export type AgreementProps = InstructionComponentProps & CheckerProps;

const Agreement = (props: AgreementProps) => {
  return (
    <div className='flex gap-2 items-center'>
      <Checker {...props} /> <Instruction {...props} />
    </div>
  );
};

export default Agreement;
