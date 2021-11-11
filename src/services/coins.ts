import axios from "axios";

const apiCoinLore = axios.create({
  baseURL: 'https://api.coinlore.net/api',
});

export async function getCoins() {
  return await apiCoinLore.get('/tickers')
}

export async function getCoinById(coinId: string) {
  return await apiCoinLore.get(`/ticker/?id=${coinId}`)
}