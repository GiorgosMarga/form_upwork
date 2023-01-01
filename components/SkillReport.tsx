import React from "react";
import styled from "@emotion/styled";

 const H3 = styled.h3`
  font-size: 14px;
  font-weight: 600;
`;
 const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 10px;
  margin-top: 20px;
`;

 const PBold = styled.p`
  font-weight: 600;
  font-size: 11px;
`;
 const P = styled.p`
  font-size: 11px;
`;
 const SideNoteContainer = styled.div``;

 const TextArea = styled.textarea`
  padding: 5px;
  font-size: 15px;
  width: 98%;
  min-height: 40px;
  margin-top: 10px;
  min-width: 500px;
  font-weight: bold;
`;

const SkillReportDisabledArea = styled.div`
  display: flex;
  color: gray;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 500;
`
const SkillReportArea = styled.div`
  display: flex;
  color: black;
  margin-top: 10px;
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 500;
`
interface Props {
  disabled: boolean
  report: string

}
const SkillReport = ({disabled, report}: Props) => {
  return (
    <Container>
      <H3>Skills report notes preview.</H3>
      <SideNoteContainer>
        <PBold>These notes will be shown directly to the client.</PBold>
        <P>
          This is a preview of the final note describing the candidate's
          performance for this section. Please use complete sentences to match
          the pre-filled notes.
        </P>
      </SideNoteContainer>
      {disabled ? <SkillReportDisabledArea>
        <p>No notes will be generated for this section.</p></SkillReportDisabledArea> : <SkillReportArea >{report}</SkillReportArea>}
      
    </Container>
  );
};

export default SkillReport;
