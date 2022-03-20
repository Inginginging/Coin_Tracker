import { useParams } from "react-router-dom";

function Coin() {
  //url의 parameter obj를 가져오는 hook
  const params = useParams();
  //parameter obj 안의 coinId property
  const coinId = params.coinId;
  return <h1>Coin {coinId}</h1>;
}

export default Coin;
