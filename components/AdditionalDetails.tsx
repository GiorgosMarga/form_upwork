import React from "react";
import styled from "@emotion/styled";

export const H3 = styled.h3`
  font-size: 14px;
  font-weight: 600;
`;
export const SideNote = styled.p`
  font-size: 11px;
  margin-top:5px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 10px;
  margin-top: 20px;
  border-style: solid none none none;
  border-width: 1px;
  border-color: lightgray;
  padding-top: 5px;
`;

export const TextArea = styled.textarea`
  padding: 5px;
  font-size: 17px;
  font-weight: bold;
  width: 98%;
  min-height: 80px;
  margin-top: 20px;
`;

interface Props {
  detailsValue: string,
  changeDetails: (e:any,  value:string) => void
  title: string
}
const AdditionalDetails = ({detailsValue, changeDetails, title}: Props) => {
  return (
    <Container>
      <H3>
        {title.length > 0 ? `Please leave any additional details about the candidate's response to
        the ${title?.toLowerCase()} here.` : ""}
      </H3>
      <SideNote>
        Please note that a response here is required if the auto-generated
        response doesn't provide enough detail about the candidate's
        performance. We will be copying this feedback directly into the
        candidate's skills report to show the clients. Please use complete
        sentences and end all of your sentences with periods ("."). Refer to the
        Byteboard Voice guide for more information on providing effective
        feedback.https://www.notion.so/byboard/
      </SideNote>
      <TextArea value={detailsValue} onChange={(e) => changeDetails(e, e.target.value)}/>
    </Container>
  );
};

export default AdditionalDetails;
