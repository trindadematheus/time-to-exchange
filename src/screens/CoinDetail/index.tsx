import { useDatabase } from '@nozbe/watermelondb/hooks';
import { useIsFocused, useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import Toast from 'react-native-toast-message';
import Feather from 'react-native-vector-icons/Feather'

import DetailItem from '../../components/DetailItem'
import LoadingScreen from '../../components/Loading';
import { getCoinById } from '../../services/coins';
import { CoinTicker } from '../../types/coin-ticker';
import coinLogo from '../../utils/coinLogo';
import maskMoney from '../../utils/maskMoney';

import * as S from './styles'

export default function CoinDetailScreen({ route }: any) {
  const { coin } = route.params;

  const [coinData, setCoinData] = useState<CoinTicker | null>(null)

  const isFocused = useIsFocused()
  const navigation: any = useNavigation()
  const db = useDatabase()

  useEffect(() => {
    handleGetCoinDetail()
  }, [isFocused])

  async function handleGetCoinDetail() {
    try {
      const { data } = await getCoinById(coin.coin_id)

      setCoinData(data[0])
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'An error was ocurred'
      });
    }
  }

  async function handleRemoveSchedule() {
    const schedule = await db.get('coin_schedules').find(coin.id)

    await db.write(async () => {
      await schedule.destroyPermanently()
    })

    Toast.show({
      type: 'success',
      text1: 'schedule removed with success'
    });
    navigation.goBack()
  }

  if (!coinData) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <>
      <S.Menu>
        <S.MenuButton onPress={() => navigation.goBack()} >
          <Feather name="chevron-left" color="white" size={18} />
        </S.MenuButton>

        <S.MenuRight>
          <S.MenuButton style={{ marginRight: 10 }} >
            <Feather name="share" color="white" size={18} />
          </S.MenuButton>
          <S.MenuButton onPress={handleRemoveSchedule} >
            <Feather name="trash" color="red" size={18} />
          </S.MenuButton>
        </S.MenuRight>
      </S.Menu>

      <S.Container>
        <S.Header>
          <S.Image source={{ uri: coinLogo(coinData.symbol) }} />
          <S.Name>{coinData.name}</S.Name>
          <S.Initial>{coinData.symbol}</S.Initial>
        </S.Header>

        <S.Price>
          <S.PriceLabel>Price USD</S.PriceLabel>
          <S.PriceValueArea>
            <S.PriceValue>{maskMoney(coinData.price_usd, '$', ',', '.')}</S.PriceValue>
            <S.PricePercent isNegative={coinData.percent_change_1h.includes('-')} >{coinData.percent_change_1h}%</S.PricePercent>
          </S.PriceValueArea>
          <S.PriceIndicator>last 1h</S.PriceIndicator>
        </S.Price>

        <S.Row>
          <View style={{ flex: 1 }} >
            <DetailItem
              isPercent
              title="% 1h"
              desc={`${coinData.percent_change_1h}%`}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }} >
            <DetailItem
              isPercent
              title="% 24h"
              desc={`${coinData.percent_change_24h}%`}
            />
          </View>
          <View style={{ flex: 1 }} >
            <DetailItem
              isPercent
              title="% 7d"
              desc={`${coinData.percent_change_7d}%`}
            />
          </View>
        </S.Row>

        <DetailItem
          title="Market Cap"
          desc={maskMoney(coinData.market_cap_usd, '$', ',', ',')}
        />
        <DetailItem
          title="Circulating Supply"
          desc={maskMoney(coinData.csupply, `${coinData.symbol} `, ',', ',')}
        />
        <DetailItem
          title="Volume (24h)"
          desc={maskMoney(coinData.volume24.toString(), '$', ',', ',')}
        />

        <View style={{ height: 40 }} />
      </S.Container>
    </>
  )
}