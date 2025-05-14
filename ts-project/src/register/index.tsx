"use client";

import { useState } from "react";
import Agreement from "./subcomponents/agreement/Agreement";
import Next from "./subcomponents/Next/Next";

type Agreement = { isMandantory: boolean; isChecked: boolean };

const Register = () => {
  const [agreements, setAgreement] = useState<Agreement[]>([
    { isMandantory: false, isChecked: false },
    { isMandantory: true, isChecked: false },
    { isMandantory: false, isChecked: false },
    { isMandantory: false, isChecked: false },
  ]);

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleClick = () => setIsChecked((prev) => !prev);

  const [isChecked1, setIsChecked1] = useState<boolean>(false);
  const handleClick1 = () => setIsChecked1((prev) => !prev);

  const [isChecked2, setIsChecked2] = useState<boolean>(false);
  const handleClick2 = () => setIsChecked2((prev) => !prev);

  const [isChecked3, setIsChecked3] = useState<boolean>(false);
  const handleClick3 = () => setIsChecked3((prev) => !prev);

  return (
    <div>
      회원등록
      <Agreement isChecked={isChecked} handleClick={handleClick} Instruction='만 14세 이상입니다.' />
      <Agreement isChecked={isChecked1} handleClick={handleClick1} required='mandantory' Instruction='이용약관, 개인정보 수집/이용' />
      <Agreement isChecked={isChecked2} handleClick={handleClick2} required='option' Instruction='위치 기반 서비스 이용' />
      <Agreement isChecked={isChecked3} handleClick={handleClick3} required='option' Instruction='홍보성 정보 수신' />
      <Next isPass={isChecked1} />
    </div>
  );
};

export default Register;
