import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;
const Loader = styled.span`
  display: block;
  text-align: center;
`;

//Home Route에서 받아오는 state의 type 지정
interface IState {
  name: string;
}

//interface ILocation {
//  state: {
//    name: string;
//  };
//}

function Coin() {
  //url의 parameter obj를 가져오는 hook
  const { coinId } = useParams();
  const [loading, setLoading] = useState(true);
  //이전 route에서 넘어온 state정보를 가져오는 hook
  const location = useLocation();
  const { name } = location.state as IState; //Home에서 넘어온 state는 IState형식임
  //const { state } = useLocation() as ILocation;
  return (
    <Container>
      <Header>
        <Title>{name || "loading..."}</Title>
      </Header>
      {loading ? <Loader>loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
