import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { chartFetcher } from "../api";
import ApexChart from "react-apexcharts"; //chart lib.
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

//data type
interface IData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface IChart {
  coinId: string;
}

function Chart() {
  const { coinId } = useOutletContext<IChart>(); //outlet의 context porp으로부터 받아오는 coinId
  const { isLoading, data } = useQuery<IData[]>(
    ["ohlcv", coinId],
    () => chartFetcher(coinId),
    {
      refetchInterval: 5000,
    }
  );
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: data!.map((price) => ({
                x: price.time_close,
                y: [
                  price.open.toFixed(4),
                  price.high.toFixed(4),
                  price.low.toFixed(4),
                  price.close.toFixed(4),
                ],
              })),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              type: "candlestick",
              height: 900,
              background: "transparent",
              toolbar: {
                show: false,
              },
            },
            title: {
              text: `${coinId} Chart`,
              align: "left",
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              show: false,
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#3ceb4b",
                  downward: "#e61919",
                },
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
