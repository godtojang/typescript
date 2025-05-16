"use client";

import { useState } from "react";
import Agreement, { AgreementProps } from "./subcomponents/agreement/Agreement";
import Next from "./subcomponents/Next/Next";
import RoundChecker from "./subcomponents/agreement/checkers/RoundChecker";
import TitleInstruction from "./subcomponents/agreement/instructions/TitleInstruction";

type Agreement = { isMandantory: boolean } & AgreementProps;

const Register = () => {
  const [agreements, setAgreement] = useState<Agreement[]>([
    { isMandantory: false, isChecked: false, handleClick: () => handleClickTest(0), Instruction: "만 14세 이상입니다." },
    { isMandantory: true, isChecked: false, handleClick: () => handleClickTest(1), Instruction: "이용약관, 개인정보 수집/이용", required: "mandantory" },
    { isMandantory: false, isChecked: false, handleClick: () => handleClickTest(2), Instruction: "위치 기반 서비스 이용", required: "option" },
    { isMandantory: false, isChecked: false, handleClick: () => handleClickTest(3), Instruction: "홍보성 정보 수신", required: "option" },
  ]);

  const handleClickAll = () =>
    setAgreement((prev) => {
      const isAlltrue = agreements.every((v) => v.isChecked);
      const newPrev = [...prev].map((v) => ({ ...v, isChecked: isAlltrue ? false : true }));
      return newPrev;
    });

  const handleClickTest = (num: number) => {
    setAgreement((prev) => [...prev].map((v, i) => (num == i ? { ...v, isChecked: !v.isChecked } : v)));
  };

  const agreementsData: AgreementProps[] = [
    { isChecked: agreements[0].isChecked, handleClick: () => handleClickTest(0), Instruction: "만 14세 이상입니다." },
    { isChecked: agreements[1].isChecked, handleClick: () => handleClickTest(1), Instruction: "이용약관, 개인정보 수집/이용", required: "mandantory" },
    { isChecked: agreements[2].isChecked, handleClick: () => handleClickTest(2), Instruction: "위치 기반 서비스 이용", required: "option" },
    { isChecked: agreements[3].isChecked, handleClick: () => handleClickTest(3), Instruction: "홍보성 정보 수신", required: "option" },
  ];

  return (
    <div>
      <div className='flex gap-1'>
        <RoundChecker isChecked={agreements.every((v) => v.isChecked)} handleClick={() => handleClickAll()} />
        <TitleInstruction Instruction='전체 동의' />
      </div>
      {agreementsData.map((v, i) => (
        <Agreement key={i} {...v} />
      ))}

      {/* <Agreement isChecked={agreements[0].isChecked} handleClick={() => handleClickTest(0)} Instruction='만 14세 이상입니다.' />
      <Agreement isChecked={agreements[1].isChecked} handleClick={() => handleClickTest(1)} required='mandantory' Instruction='이용약관, 개인정보 수집/이용' />
      <Agreement isChecked={agreements[2].isChecked} handleClick={() => handleClickTest(2)} required='option' Instruction='위치 기반 서비스 이용' />
      <Agreement isChecked={agreements[3].isChecked} handleClick={() => handleClickTest(3)} required='option' Instruction='홍보성 정보 수신' /> */}
      <Next isPass={agreements.every((v) => (v.isMandantory ? v.isChecked : true))} />
    </div>
  );
};

export default Register;
