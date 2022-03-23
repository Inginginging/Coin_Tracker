import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { priceFetcher } from "../api";

const Animation = keyframes`
 0%{
    opacity:0;
  }
  50%{
    opacity:0.5;
  }100%{  
    opacity:1;
  }
`;

const Cointainer = styled.div`
  width: 100%;
`;
const Tabs = styled.ul``;
const Tab = styled.li`
  background-color: #818380;
  border-radius: 15px;
  color: ${(props) => props.theme.bgColor};
  padding: 15px 20px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${Animation} 0.5s ease-in-out;
  & :first-child {
    font-size: 18px;
  }
`;
const TabTitle = styled.span``;
const TabValue = styled.span<{ isMinus: Boolean }>`
  color: ${(props) => (props.isMinus ? "#e40f0f" : "#0bff28")};
`;

interface IPrice {
  coinId: string;
}
interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price() {
  const { coinId } = useOutletContext<IPrice>();
  const { isLoading, data } = useQuery<IPriceData>(
    ["tickers", coinId],
    () => priceFetcher(coinId),
    { refetchInterval: 5000 }
  );
  return (
    <Cointainer>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <Tabs>
          <Tab>
            <TabTitle>Price: </TabTitle>
            <TabTitle>${data?.quotes.USD.price.toFixed(4)}</TabTitle>
          </Tab>
          <Tab>
            <TabTitle>Change Rate (last 24 hours): </TabTitle>
            <TabValue
              isMinus={
                data?.quotes.USD.percent_change_24h.toString().slice(0, 1) !==
                "-"
              }
            >
              {data?.quotes.USD.percent_change_24h}%
            </TabValue>
          </Tab>
          <Tab>
            <TabTitle>Change Rate (last 12 hours): </TabTitle>
            <TabValue
              isMinus={
                data?.quotes.USD.percent_change_12h.toString().slice(0, 1) !==
                "-"
              }
            >
              {data?.quotes.USD.percent_change_12h}%
            </TabValue>
          </Tab>
          <Tab>
            <TabTitle>Change Rate (last 6 hours): </TabTitle>
            <TabValue
              isMinus={
                data?.quotes.USD.percent_change_6h.toString().slice(0, 1) !==
                "-"
              }
            >
              {data?.quotes.USD.percent_change_6h}%
            </TabValue>
          </Tab>
          <Tab>
            <TabTitle>Change Rate (last 1 hour): </TabTitle>
            <TabValue
              isMinus={
                data?.quotes.USD.percent_change_1h.toString().slice(0, 1) !==
                "-"
              }
            >
              {data?.quotes.USD.percent_change_1h}%
            </TabValue>
          </Tab>
          <Tab>
            <TabTitle>Change Rate (last 30 minutes): </TabTitle>
            <TabValue
              isMinus={
                data?.quotes.USD.percent_change_30m.toString().slice(0, 1) !==
                "-"
              }
            >
              {data?.quotes.USD.percent_change_30m}%
            </TabValue>
          </Tab>
        </Tabs>
      )}
    </Cointainer>
  );
}

export default Price;
