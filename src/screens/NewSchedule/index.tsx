import React, { useEffect, useState } from 'react'
import { FlatList, KeyboardAvoidingView, Modal, Platform, TouchableOpacity, View } from 'react-native'
import { MaskService } from 'react-native-masked-text'

import CoinSelectItem from '../../components/CoinSelectItem'
import LoadingScreen from '../../components/Loading'
import { getCoins } from '../../services/coins'
import { CoinTicker } from '../../types/coin-ticker'
import coinLogo from '../../utils/coinLogo'

import * as S from './styles'

export default function NewScheduleScreen() {
  const [loadingScreen, setLoadingScreen] = useState(true)

  const [coins, setCoins] = useState<CoinTicker[]>([])
  const [filtredCoins, setFiltredCoins] = useState<CoinTicker[]>([])
  const [modality, setModality] = useState('none')
  const [condition, setCondition] = useState('none')
  const [showModalCoin, setShowModalCoin] = useState(false)
  const [selectedCoin, setSelectedCoin] = useState<CoinTicker | null>(null)
  const [value, setValue] = useState('0')
  const [coinName, setCoinName] = useState('')

  useEffect(() => {
    setValue(handleMaskMoney('0'))
    setSelectedCoin(null)
    setCondition('none')
    setModality('none')
    setCoins([])

    handleGetCoins()
  }, [])

  async function handleGetCoins() {
    setLoadingScreen(true)

    try {
      const { data: { data } } = await getCoins();

      setCoins(data)
      setFiltredCoins(data)
    } catch (error: any) {
      console.log({ error })
    } finally {
      setLoadingScreen(false)
    }
  }

  function handleSelectCoin(item: CoinTicker) {
    setSelectedCoin(item)
    setShowModalCoin(false)
  }

  function handleMaskMoney(txt: string) {
    return MaskService.toMask('money', txt, {
      unit: '$',
      separator: '.',
      delimiter: ','
    })
  }

  function handleCreateSchedule() {
    console.log('continue')
  }

  function handleFilterCoinList(txt: string) {
    const filtered = coins.filter((coin) => coin.name.toLowerCase().includes(txt.toLowerCase()))

    setCoinName(txt)
    setFiltredCoins(filtered)
  }

  if (loadingScreen) {
    return <LoadingScreen />
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior="height"
        style={{ flex: 1 }}
      >
        <S.Container>
          <S.Title>I want to</S.Title>
          <S.Options>
            <S.OptionItem onPress={() => setModality('buy')} isActive={modality === 'buy'} style={{ marginRight: 14 }} >
              <S.OptionItemText isActive={modality === 'buy'}>buy</S.OptionItemText>
            </S.OptionItem>
            <S.OptionItem onPress={() => setModality('sell')} isActive={modality === 'sell'}>
              <S.OptionItemText isActive={modality === 'sell'} >sell</S.OptionItemText>
            </S.OptionItem>
          </S.Options>

          <S.CoinItem onPress={() => setShowModalCoin(true)} >
            <S.CoinItemInfo>
              {selectedCoin && <S.CoinItemImage source={{ uri: coinLogo(selectedCoin.symbol) }} />}
              <S.CoinItemTitle>
                {selectedCoin
                  ? `${selectedCoin.symbol} - ${selectedCoin.name} $${selectedCoin.price_usd}`
                  : 'touch to select a coin'
                }
              </S.CoinItemTitle>
            </S.CoinItemInfo>
          </S.CoinItem>

          <S.Title>when its value is</S.Title>
          <S.Options>
            <S.OptionItem onPress={() => setCondition('greather')} isActive={condition === 'greather'} style={{ marginRight: 14 }} >
              <S.OptionItemText isActive={condition === 'greather'}>greather than</S.OptionItemText>
            </S.OptionItem>
            <S.OptionItem onPress={() => setCondition('less')} isActive={condition === 'less'}>
              <S.OptionItemText isActive={condition === 'less'}>less than</S.OptionItemText>
            </S.OptionItem>
          </S.Options>

          <S.TextInput
            keyboardType="numeric"
            value={value}
            onChangeText={txt => setValue(handleMaskMoney(txt))}
          />
        </S.Container>

        <S.ActionArea>
          <S.ConfirmButton onPress={handleCreateSchedule} >
            <S.ConfirmButtonText>create schedule</S.ConfirmButtonText>
          </S.ConfirmButton>
        </S.ActionArea>
      </KeyboardAvoidingView>

      <Modal
        animationType="slide"
        transparent
        visible={showModalCoin}
        onRequestClose={() => setShowModalCoin(false)}
      >
        <S.ModalContainer>
          <S.ModalHeader>
            <S.ModalHeaderTitle>select a coin</S.ModalHeaderTitle>

            <S.ModalHeaderClose onPress={() => setShowModalCoin(false)} >
              <S.ModalHeaderTitle>x</S.ModalHeaderTitle>
            </S.ModalHeaderClose>
          </S.ModalHeader>

          <View style={{ marginBottom: 40 }} >
            <S.TextInput
              value={coinName}
              onChangeText={handleFilterCoinList}
              placeholder="insert a coin name"
            />
          </View>

          <FlatList
            data={filtredCoins}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => handleSelectCoin(item)} >
                <CoinSelectItem key={index} coin={item} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </S.ModalContainer>
      </Modal>
    </>
  )
}