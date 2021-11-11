import React from 'react'
import DetailItem from '../../components/DetailItem'

import * as S from './styles'

export default function CoinDetailScreen() {
  return (
    <>
      <S.Container>
        <S.Header>
          <S.Image />
          <S.Name>ethereum</S.Name>
          <S.Initial>eth</S.Initial>
        </S.Header>

        <S.Price>
          <S.PriceLabel>Price USD</S.PriceLabel>
          <S.PriceValueArea>
            <S.PriceValue>$2.000</S.PriceValue>
            <S.PricePercent>-1.27%</S.PricePercent>
          </S.PriceValueArea>
          <S.PriceIndicator>last 1h</S.PriceIndicator>
        </S.Price>

        <DetailItem />
        <DetailItem />
        <DetailItem />
        <DetailItem />
      </S.Container>
    </>
  )
}