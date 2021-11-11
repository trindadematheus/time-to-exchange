import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View } from 'react-native'

import theme from '../../styles/theme'
import * as S from './styles'

export default function CoinItem() {
  const navigation: any = useNavigation()

  return (
    <>
      <S.Container onPress={() => navigation.navigate('CoinDetailScreen')} >
        <S.Left>
          <S.Image />
          <View>
            <S.Title>BTC - Bitcoin</S.Title>

            <S.Prices>
              <S.Price
                style={{ color: theme.colors.light_200, marginRight: 4 }}
              >
                grather than -
              </S.Price>
              <S.Price
                style={{ color: '#FFE600', marginRight: 10 }}
              >
                $200,00
              </S.Price>
            </S.Prices>
          </View>
        </S.Left>
      </S.Container>
    </>
  )
}