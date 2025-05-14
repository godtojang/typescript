import Checker, { CheckerProps } from "./Checker";
import Instruction, { InstructionProps } from "./Instruction";

type AgreementProps = InstructionProps & CheckerProps;

const Agreement = (props: AgreementProps) => {
  return (
    <div className='flex gap-2 items-center'>
      <Checker {...props} /> <Instruction {...props} />
    </div>
  );
};

export default Agreement;
