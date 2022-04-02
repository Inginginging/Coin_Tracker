import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Home from "./routes/Home";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

//App에서 받아온 toggle의 type을 정해주는 interface
interface IRouter {
  toggle: () => void;
}

function Router({ toggle }: IRouter) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId/*" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Home toggle={toggle} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
