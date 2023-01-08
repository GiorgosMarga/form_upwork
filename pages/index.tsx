import Head from 'next/head'
import {useState, useEffect} from "react"
import { Inter } from '@next/font/google'
import styled from "@emotion/styled"
import {formQuestion} from "../questions/questions"

import { FormQuestions } from "../components/FormQuestions";
const inter = Inter({ subsets: ['latin'] })

const Main = styled.form`
  width: 100%;
  height: 100%;
  padding-left: 15px;
  padding-right:15px;
`;

const Button = styled.button`
  
  background-color: purple;
  border-radius: 20px;
  font-size: 12px;
  color: white;
  padding-left: 13px;
  padding-right: 13px;
  border: none;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  &:hover{
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
`

const ButtonContainer = styled.div`
  height: 40px;
  width: 100%;
  background-color: white;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 50;
  padding: 5px;
  display: flex;
  justify-content: end;
`



interface Answers {
  [index: string]: {
    answer?: string,
    details?: string
  }
}




export default function Home() {

  const [answers, setAnswers] = useState<Answers>({})
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
   }, [])
  

   const onClickHandler = (e: any) => {
    e.preventDefault()
    console.log(answers)
   }

   const onChangeValueHandler = (index: number, value:string) => {
     setAnswers(prevState => {
      let newObject =  Object.assign({},{ ...prevState[index.toString()],answer: value});
      return {...prevState, [index]: newObject}
     })
   }
  
  return mounted ? (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        {formQuestion?.map((question: any, index:number) => 
        <FormQuestions 
          key={question.key} 
          index={question.key} 
          questions={question.questions} 
          question={question.question ? question.question : null} 
          title={question.title} 
          disabled={question.disabled ? true : false} 
          subtitle={question.subtitle} 
          setAnswer={setAnswers} 
          onChangeValue={onChangeValueHandler}
          showReport={question.showReport}
          showDetails={question.showDetails}
          answers={answers}
        />)}
        <ButtonContainer>
          <Button onClick={onClickHandler}>Preview</Button>
        </ButtonContainer>
        
        
      </Main>
    </>
  ): <></>;
}