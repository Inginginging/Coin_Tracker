import { keyframes } from "styled-components";
import styled from "styled-components";

const rotateAni = keyframes` //animation
  0% {
    transform: rotate(0deg);
    border: 1px solid black;
  }
  50%{
    border: 5px solid black;
  }
  100%{
    transform: rotate(360deg);
    border: 1px solid black;
  }
`;

const Container = styled.div`
  display: flex;
`;
const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  background-color: yellowgreen;
  width: 200px;
  height: 200px;
  animation: ${rotateAni} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  //내가 만든 component를 직접 targeting할 수 있음
  ${Emoji} {
    &:hover {
      font-size: 100px;
    }
  }
`;

function App() {
  return (
    <Container>
      <Box>
        <Emoji>😍</Emoji>
      </Box>
    </Container>
  );
}

export default App;
