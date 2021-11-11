import axios from "axios";

const apiCoinLore = axios.create({
  baseURL: 'https://api.coinlore.net/api',
});

export async function getCoins() {
  return await apiCoinLore.get('/tickers')
}