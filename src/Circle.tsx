import styled from "styled-components";

//Circle의 interface
interface ICircle {
  bgColor: string;
  borderColor?: string;
}
//Container의 interface
interface IContainer {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<IContainer>`
  //styled component에 interface를 적용할때는 <> 사용
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  //style을 지정하므로 styled Componenet의 interface는 optional이 되어선 안됨.
  border: 5px solid ${(props) => props.borderColor};
`;

//componenet에 interface 적용
function Circle({ bgColor, borderColor }: ICircle) {
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ? borderColor : bgColor}
    />
  );
}

export default Circle;
