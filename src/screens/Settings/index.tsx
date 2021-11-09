import React from 'react'

import * as S from './styles'

export default function SettingsScreen() {
  return (
    <>
      <S.Container>
        <S.OptionItem>
          <S.OptionItemInfo>
            <S.OptionItemIcon />
            <S.OptionItemText>language</S.OptionItemText>
          </S.OptionItemInfo>
        </S.OptionItem>
        <S.OptionItem>
          <S.OptionItemInfo>
            <S.OptionItemIcon />
            <S.OptionItemText>notifications</S.OptionItemText>
          </S.OptionItemInfo>
        </S.OptionItem>
        <S.OptionItem>
          <S.OptionItemInfo>
            <S.OptionItemIcon />
            <S.OptionItemText>avaliar</S.OptionItemText>
          </S.OptionItemInfo>
        </S.OptionItem>
      </S.Container>
    </>
  )
}