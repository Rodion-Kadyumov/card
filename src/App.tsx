import React from 'react'
import Images from "./components/Images.tsx";
import { Title } from './components/styled/Title.tsx';
import styled from 'styled-components';
import { StyledBtn } from './components/styled/Button.styled.tsx';
import { Paragraph } from './components/styled/Paragraph.tsx';


function App() {
  return (
    <>
      <Container>
        <Images />
        <Title>Headline</Title>
        <Paragraph>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Paragraph>
        <NewCont>
          <StyledBtn btnType={"primary"}>See more</StyledBtn>
          <StyledBtn btnType={"outlined"}>Save</StyledBtn>
        </NewCont>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 600px;
  height: 700px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 15px;
  background-color: #FFFFFF;

  // Адаптив:

  @media screen and (max-width: 800px) {
    flex-direction: column;
`
const NewCont = styled.div`
    display: flex;
`
export default App;