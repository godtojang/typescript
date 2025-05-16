import { FaCheck } from "react-icons/fa";

export type RoundCheckerProps = { isChecked: boolean; handleClick: () => void };

const RoundChecker = ({ handleClick, isChecked }: RoundCheckerProps) => {
  const border = isChecked ? "border-red-500" : "border-gray-500";

  return (
    <div onClick={handleClick} className={`p-2 w-fit rounded-full border-2 ${border}`}>
      <FaCheck style={{ color: isChecked ? "red" : "gray" }} />
    </div>
  );
};

export default RoundChecker;
