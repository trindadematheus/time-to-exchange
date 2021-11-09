import React from 'react'

import * as S from './styles'

export default function NewScheduleScreen() {
  return (
    <>
      <S.Container>
        <S.Title>I want to</S.Title>
        <S.Options>
          <S.OptionItem style={{ marginRight: 14 }} >
            <S.OptionItemText>buy</S.OptionItemText>
          </S.OptionItem>
          <S.OptionItem>
            <S.OptionItemText>sell</S.OptionItemText>
          </S.OptionItem>
        </S.Options>

        <S.CoinItem>
          <S.CoinItemInfo>
            <S.CoinItemImage />
            <S.CoinItemTitle>BTC - Bitcoin</S.CoinItemTitle>
          </S.CoinItemInfo>
        </S.CoinItem>

        <S.Title>when its value is</S.Title>
        <S.Options>
          <S.OptionItem style={{ marginRight: 14 }} >
            <S.OptionItemText>greather than</S.OptionItemText>
          </S.OptionItem>
          <S.OptionItem>
            <S.OptionItemText>less than</S.OptionItemText>
          </S.OptionItem>
        </S.Options>

        <S.TextInput keyboardType="numeric" />
      </S.Container>

      <S.ActionArea>
        <S.ConfirmButton>
          <S.ConfirmButtonText>create schedule</S.ConfirmButtonText>
        </S.ConfirmButton>
      </S.ActionArea>
    </>
  )
}