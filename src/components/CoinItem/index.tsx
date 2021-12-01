import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View } from 'react-native'

import theme from '../../styles/theme'
import { CoinScheduled } from '../../types/coin-scheduled'
import coinLogo from '../../utils/coinLogo'
import maskMoney from '../../utils/maskMoney'
import * as S from './styles'

type CoinItemProps = {
  coin: CoinScheduled;
}

export default function CoinItem({ coin }: CoinItemProps) {
  const navigation: any = useNavigation()

  return (
    <>
      <S.Container onPress={() => navigation.navigate('CoinDetailScreen', { coin })} >
        <S.Left>
          <S.Image source={{ uri: coinLogo(coin.coin_symbol) }} />
          <View>
            <S.Title>{`${coin.coin_symbol} - ${coin.coin_name}`}</S.Title>

            <S.Prices>
              <S.Price
                style={{ color: theme.colors.light_200, marginRight: 4 }}
              >
                {coin.modality} - {coin.condition} -
              </S.Price>
              <S.Price
                style={{ color: '#FFE600', marginRight: 10 }}
              >
                {maskMoney(parseFloat(coin.value).toFixed(2), '$', ",", '.')}
              </S.Price>
            </S.Prices>
          </View>
        </S.Left>
      </S.Container>
    </>
  )
}