import { FaCheck } from "react-icons/fa";

export type CheckerProps = { isChecked: boolean; handleClick: () => void };

const Checker = ({ isChecked, handleClick }: CheckerProps) => {
  return (
    <div onClick={handleClick} className='w-fit'>
      <FaCheck style={{ color: isChecked ? "red" : "gray" }} />
    </div>
  );
};

export default Checker;
