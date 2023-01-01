import {useRef, useState} from 'react'
import styled from "@emotion/styled";
import Header from "./Header";
import React from "react";
import FormChoice from "./FormChoice";
import AdditionalDetails from "./AdditionalDetails";
import SkillReport from "./SkillReport";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px lightgray solid;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const QuestionTitle = styled.h3`
  font-size: 16px;
  margin-top: 5px;
`;
const QuestionSubTitle = styled.p`
  font-size: 12px;
  margin-top: 3px;
`;

const QuestionsForm = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  title: string;
  disabled: boolean;
  index : number;
  subtitle: string;
  questions: string[];
  question?: string; 
  showReport: boolean;
  showDetails:   boolean;
  setAnswer: (prevState: any) => any
  onChangeValue: (index: number, value: string) => void
}
export const FormQuestions = ({title, disabled, index, subtitle, questions,question , setAnswer, onChangeValue, showDetails, showReport}: Props) => {
  const [additionalDetails,setAdditionalDetails] = useState("")
  const [skillReport,setSkillReport] = useState("")
  

  const onChangeDetailsHandler = (e:any) => {
      e.stopPropagation();
      setAnswer((prevState: { [x: string]: any; }) => {
        console.log(e.target.value)
        let newObject = Object.assign({},{...prevState[index.toString()],details:e.target.value });
        
        return {...prevState, [index]: newObject}
       })
      setAdditionalDetails(e.target.value)
  }
  const onChangeReportHandler = (e:any) => {
    e.stopPropagation();
    setAnswer((prevState: { [x: string]: any; }) => {
      let newObject =  Object.assign({},{ ...prevState[index.toString()],skillsReport: e.target.value});
      return {...prevState, [index]: newObject}
     })
    setSkillReport(e.target.value)
  }
  return (
    <Container>
      {title?.length > 0 && <Header header={title}/>}
      <div>
        <QuestionTitle>
          {question !== null ? question : `Which of the following options best describes the candidate's response to the ${title.toLowerCase()}? `}
        </QuestionTitle>
        <QuestionSubTitle>
          {subtitle}
        </QuestionSubTitle>
        <QuestionsForm  onChange={(e) => onChangeValue(index,e.target.value)}>
          {questions.map((question,indexQuestion) => <FormChoice key={indexQuestion} value={indexQuestion.toString()} index={index.toString()} question={question}/>)}
          
          {showDetails && <AdditionalDetails title={title} detailsValue={additionalDetails}  changeDetails={onChangeDetailsHandler} />}
          {showReport && <SkillReport report={'Test for report.'} disabled={disabled}/>}
        </QuestionsForm>
      </div>
    </Container>
  );
};
