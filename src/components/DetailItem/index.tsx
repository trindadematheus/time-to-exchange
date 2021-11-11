import React from 'react'
import { View } from 'react-native'

import * as S from './styles'

export default function DetailItem() {
  return (
    <>
      <S.Container>
        <S.Icon />
        <View>
          <S.Title>PPrice</S.Title>
          <S.Value>asdas</S.Value>
        </View>
      </S.Container>
    </>
  )
}