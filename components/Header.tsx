import styled from "@emotion/styled";


const HeaderDiv = styled.div`
  width: 100%;
  height: 50px;
  border-style: none none solid none;
  display: flex;
  justify-items: center;
  align-items: center;
  border-color: gray;
  border-width: 1px;
`;

const Title = styled.h1`
  font-size: 20px;
  color: black;
`;


interface Props {
  header: string
}
export const Header = ({header}: Props) => {
  return (
    <HeaderDiv>
      <Title>{header}</Title>
    </HeaderDiv>
  );
};

export default Header;
