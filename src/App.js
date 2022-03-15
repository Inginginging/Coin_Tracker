import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor}; //theme의 property 사용
`;
const Title = styled.h1`
  font-size: 100px;
  color: ${(props) => props.theme.textColor}; //theme의 property 사용
`;

function App() {
  return (
    <Container>
      <Title>Hello</Title>
    </Container>
  );
}

export default App;
