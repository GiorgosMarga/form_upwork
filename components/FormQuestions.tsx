import {useState} from 'react'
import styled from "@emotion/styled";
import Header from "./Header";
import React from "react";
import FormChoice from "./FormChoice";
import AdditionalDetails from "./AdditionalDetails";
import SkillReport from "./SkillReport";
import { reports } from '../questions/reports';

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
  answers: any
}
export const FormQuestions = ({title, disabled, index, subtitle, questions,question , setAnswer, onChangeValue, showDetails, showReport, answers}: Props) => {
  const [additionalDetails,setAdditionalDetails] = useState("")
  const [skillsReport,setSkillsReport] = useState("")
  const [chosenValue, setChosenValue] = useState(-1)
  const onChangeDetailsHandler = (e:any) => {
      e.stopPropagation();
      setAnswer((prevState: { [x: string]: any; }) => {
        let newObject = Object.assign({},{...prevState[index.toString()],details:e.target.value });
        return {...prevState, [index]: newObject}
       })
      setAdditionalDetails(e.target.value)
  }
  const generateReport = (index: number) => {
    console.log(index)
    if(index === 13){
      const value10 = reports[10].sentences[answers[11]?.answer] ?? ""
      const value11 = reports[11].sentences[answers[12]?.answer] ?? ""
      const value12 = reports[12].sentences[answers[13]?.answer] ?? ""
      return value10 + value11 + value12 + reports[index].sentences[chosenValue]  
    }
    return reports[index].sentences[chosenValue]
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
        <QuestionsForm  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue(index,e.target.value)}>
          {questions.map((question,indexQuestion) => <FormChoice setChosenValue={setChosenValue} key={indexQuestion} value={indexQuestion.toString()} index={index.toString()} question={question}/>)}
          
          {showDetails && <AdditionalDetails title={title} detailsValue={additionalDetails}  changeDetails={onChangeDetailsHandler} />}
          {showReport && <SkillReport report={chosenValue !== -1 ? generateReport(index-1)  + additionalDetails: ""} disabled={disabled}/>}
        </QuestionsForm>
      </div>
    </Container>
  );
};
