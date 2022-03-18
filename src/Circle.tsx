import styled from "styled-components";

//Circle의 interface
interface ICircle {
  bgColor: string;
}
//Container의 interface
interface IContainer {
  bgColor: string;
}

const Container = styled.div<IContainer>`
  //styled component에 interface를 적용할때는 <> 사용
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
`;

//componenet에 interface 적용
function Circle({ bgColor }: ICircle) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
