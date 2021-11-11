import React from 'react'
import { ActivityIndicator } from 'react-native'

import theme from '../../styles/theme'
import * as S from './styles'

export default function LoadingScreen() {
  return (
    <>
      <S.Container>
        <ActivityIndicator color={theme.colors.primary_500} />
      </S.Container>
    </>
  )
}