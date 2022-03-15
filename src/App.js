import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Btn = styled.button`
  border-radius: 5px;
  width: 100px;
  padding: 15px 0;
  background-color: blue;
`;

function App() {
  return (
    <Container>
      <Btn />
      <Btn as="a" href="/" />
    </Container>
  );
}

export default App;
