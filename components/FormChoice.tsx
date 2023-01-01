import React from "react";
import styled from "@emotion/styled";

export const Choice = styled.div`
  display: flex;
  padding: 5px;
  margin-top: 5px;
`;
export const Input = styled.input`
  transform: scale(1.3);
  background-color: black;
  border: 1px solid black;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-left: 10px;
  font-weight:500;
`;

interface Props {
  index: string;
  question:string;
}
const FormChoice = ({index, question}: Props) => {
  return (
    <Choice>
      <Input type="radio" id={index} name={'question'} value={index}/>
      <Label >
        {question}
      </Label>
    </Choice>
  );
};

export default FormChoice;
