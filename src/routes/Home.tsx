import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { coinFetcher } from "../api";
import { isDarkAtom } from "../atoms";

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
  position: relative;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;
const CoinList = styled.ul``;
const Coin = styled.li`
  background-color: ${(props) => props.theme.cardColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    padding: 20px;
    //coin img와 coin name을 정렬하기 위해
    display: flex;
    align-items: center;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Loader = styled.span`
  display: block;
  text-align: center;
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
const Btn = styled.button`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 3px;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  position: absolute;
  right: 50px;
  padding: 5px 10px;
`;

//Coin data의 type
interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Home() {
  //react Query를 사용하여 한줄로 대체
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", coinFetcher);
  //atom의 prop을 변경시키는 hook
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggle = () => setDarkAtom((prev) => !prev);
  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>코인</Title>
        <Btn onClick={toggle}>toggle</Btn>
      </Header>
      {isLoading ? (
        <Loader>loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={`/${coin.id}`}
                state={{
                  name: coin.name,
                }} /*다음 페이지로 이동 시 현재 페이지의 정보(state)도 같이 보낼 수 있음*/
              >
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Home;
