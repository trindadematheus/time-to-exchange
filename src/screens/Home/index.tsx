import React from 'react'

import CoinItem from '../../components/CoinItem'
import * as S from './styles'

export default function HomeScreen() {

  if (true) {
    return (
      <S.WithoutScheduleArea>
        <S.WithoutScheduleAreaTitle>no schedule registered</S.WithoutScheduleAreaTitle>
        <S.WithoutScheduleAreaDesc>create a schedule on 'New Schedule' section</S.WithoutScheduleAreaDesc>
      </S.WithoutScheduleArea>
    )
  }

  return (
    <>
      <S.Header>
        <S.AppName>TIME TO EXCHANGE</S.AppName>
      </S.Header>
      <S.Container>
        <S.Title>My schedules</S.Title>
        {/* <S.Subtitle>
          <S.SubtitleItem>
            <S.SubtitleItemStatus style={{ backgroundColor: 'yellow' }} />
            <S.SubtitleItemLabel>current value</S.SubtitleItemLabel>
          </S.SubtitleItem>
          <S.SubtitleItem>
            <S.SubtitleItemStatus style={{ backgroundColor: 'green' }} />
            <S.SubtitleItemLabel>expected value</S.SubtitleItemLabel>
          </S.SubtitleItem>
        </S.Subtitle> */}
        {/* 
        <CoinItem />
        <CoinItem />
        <CoinItem /> */}
      </S.Container>
    </>
  )
}
