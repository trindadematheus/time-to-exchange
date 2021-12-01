import React, { useEffect, useState } from 'react'
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import BackgroundTimer from 'react-native-background-timer';
import PushNotification from "react-native-push-notification";

import LoadingScreen from '../../components/Loading'
import theme from '../../styles/theme';
import bgImage from '../../assets/bg.png';

import detailsImage from '../../assets/details.png';
import newScheduleImage from '../../assets/new-schedule.png';
import schedulesImage from '../../assets/schedules.png';
import { getCoinById } from '../../services/coins';
import { CoinScheduled } from '../../types/coin-scheduled';
import { CoinTicker } from '../../types/coin-ticker';

export default function WelcomeScreen() {
  const [showOnBoarding, setShowOnBoarding] = useState(true)

  const navigation: any = useNavigation()
  const db = useDatabase()

  useEffect(() => {
    handleVerify()
  }, [])

  async function handleVerify() {
    const isDoneTutorial = await AsyncStorage.getItem('@TEX:isDoneTutorial')

    if (!isDoneTutorial) {
      setShowOnBoarding(true)
      return;
    }

    navigation.navigate('AppRoutes')
  }

  async function handleComplete() {
    // await AsyncStorage.setItem('@TEX:isDoneTutorial', 'true')
    console.log('foi')
    BackgroundTimer.runBackgroundTimer(async () => {
      console.log('back')
      // const storagedSchedules: any[] = await db.get('coin_schedules').query().fetch()

      // const str = storagedSchedules.reduce((acc, item) => {
      //   acc += `${item._raw.coin_symbol} - ${item._raw.value}`

      //   return acc;
      // }, '')

      PushNotification.localNotification({
        channelId: 'default-channel',
        title: 'testnotify',
        message: 'test'
      })
    }, 1000);
    // }, 60000);

    // const storagedSchedules: any[] = await db.get('coin_schedules').query().fetch()

    // for (const schedule of storagedSchedules) {
    //   const storagedSchedule: CoinScheduled = schedule._raw;
    //   const { data } = await getCoinById(storagedSchedule.coin_id);
    //   const coinTicker: CoinTicker = data[0];

    //   console.log('-------')
    //   console.log(coinTicker.symbol)
    //   console.log(storagedSchedule.condition)
    //   console.log('Meu: ' + storagedSchedule.value)
    //   console.log('Coin: ' + coinTicker.price_usd)

    //   if (storagedSchedule.condition === 'greater') {
    //     if (parseFloat(coinTicker.price_usd) > parseFloat(storagedSchedule.value)) {
    //       console.log('maior')
    //     }
    //   }

    //   if (storagedSchedule.condition === 'less') {
    //     if (parseFloat(storagedSchedule.value) > parseFloat(coinTicker.price_usd)) {
    //       console.log('menor')
    //     }
    //   }
    // }

    // await AsyncStorage.setItem('@TEX:isDoneTutorial', 'true')

    // BackgroundTimer.runBackgroundTimer(() => {
    //   console.log('test')
    // }, 1800000);
  }

  if (!showOnBoarding) {
    return <LoadingScreen />
  }

  return (
    <>
      <Onboarding
        onDone={handleComplete}
        onSkip={handleComplete}
        pages={[
          {
            backgroundColor: theme.colors.dark_900,
            image: <Image source={newScheduleImage} style={{ width: 300, height: 150, borderRadius: 20 }} />,
            title: 'schedules',
            subtitle: 'receive alerts in better hour to buy/sell',
          },
          {
            backgroundColor: theme.colors.dark_900,
            image: <Image source={schedulesImage} style={{ width: 300, height: 150, borderRadius: 20 }} />,
            title: 'schedules',
            subtitle: 'organize your investiments',
          },
          {
            backgroundColor: theme.colors.dark_900,
            image: <Image source={detailsImage} style={{ width: 300, height: 150, borderRadius: 20 }} />,
            title: 'informations',
            subtitle: 'analyse data from cryptos',
          },
        ]}
      />
    </>
  )
}