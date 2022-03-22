const BASE_URL = `https://api.coinpaprika.com/v1`;

export function coinFetcher() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function infoFetcher(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function priceFetcher(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}
