import React, { useMemo } from 'react'
import { View } from 'react-native'
import theme from '../../styles/theme'

import * as S from './styles'

type DetailItemProps = {
  title: string;
  desc: string;
  isPercent?: boolean;
}

export default function DetailItem({ title, desc, isPercent }: DetailItemProps) {
  const valueColor = useMemo(() => {
    if (isPercent) {
      return desc.includes('-') ? 'red' : '#009e73'
    }

    return theme.colors.light_100
  }, [isPercent])

  return (
    <>
      <S.Container>
        <View>
          <S.Title>{title}</S.Title>
          <S.Value color={valueColor} >{desc}</S.Value>
        </View>
      </S.Container>
    </>
  )
}