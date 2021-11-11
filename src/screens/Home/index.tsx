import React, { useEffect, useState } from 'react'
import { useDatabase } from '@nozbe/watermelondb/hooks';

import CoinItem from '../../components/CoinItem'
import * as S from './styles'
import { CoinScheduled } from '../../types/coin-scheduled';
import { useIsFocused } from '@react-navigation/core';

export default function HomeScreen() {
  const [schedules, setSchedules] = useState<any[]>([])

  const db = useDatabase()
  const isFocused = useIsFocused()

  useEffect(() => {
    handleGetSchedules();
  }, [isFocused])

  async function handleGetSchedules() {
    const storagedSchedules: any[] = await db.get('coin_schedules').query().fetch()

    setSchedules(storagedSchedules)
  }

  if (schedules.length === 0) {
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

        {schedules.map((schedule, key) => <CoinItem key={key} coin={schedule._raw} />)}
      </S.Container>
    </>
  )
}
