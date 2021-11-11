import React from 'react'
import { View } from 'react-native'
import { CoinTicker } from '../../types/coin-ticker'
import coinLogo from '../../utils/coinLogo'

import * as S from './styles'

type CoinSelectItemProps = {
  coin: CoinTicker;
}

export default function CoinSelectItem({ coin }: CoinSelectItemProps) {
  return (
    <>
      <S.Container>
        <S.Left>
          <S.Image source={{ uri: coinLogo(coin.symbol) }} />

          <View>
            <S.Title>{coin.symbol} - {coin.name}</S.Title>
            <S.Price>
              ${coin.price_usd}
            </S.Price>
          </View>
        </S.Left>
      </S.Container>
    </>
  )
}