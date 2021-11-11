import styled, { css } from "styled-components/native";

import theme from "../../styles/theme";

export const Container = styled.ScrollView`
  background-color: ${theme.colors.dark_900};
  padding: 20px;

  flex: 1;
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.light_200};
  margin-bottom: 10px;
`

export const Options = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

type OptionItemProps = {
  isActive: boolean;
}

export const OptionItem = styled.TouchableOpacity<OptionItemProps>`
  background-color: ${theme.colors.dark_700};
  padding: 14px;
  border-radius: 12px;
  
  flex: 1;
  justify-content: center;
  align-items: center;

  ${props => props.isActive && css`
    background: rgba(213, 143, 1, 0.1);
  `}
`

export const OptionItemText = styled.Text<OptionItemProps>`
  font-size: 14px;
  color: ${theme.colors.light_200};

  ${props => props.isActive && css`
    color: ${theme.colors.primary_500};
    font-weight: bold;
  `}
`

export const CoinItem = styled.TouchableOpacity`
  background-color: ${theme.colors.dark_700};
  border-radius: 12px;
  padding: 18px;
  margin: 20px 0px;
`

export const CoinItemInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const CoinItemImage = styled.Image`
  background-color: ${theme.colors.dark_900};
  border-radius: 30px;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const CoinItemTitle = styled.Text`
  color: ${theme.colors.light_200};
  font-weight: bold;
`

export const TextInput = styled.TextInput`
  background-color: ${theme.colors.dark_700};
  margin-top: 40px;
  border-radius: 12px;
  color: ${theme.colors.light_100};
  border: 1px solid #333;
  padding: 14px 20px;
  font-weight: bold;
`

export const ActionArea = styled.View`
  background-color: ${theme.colors.dark_900};
  padding: 20px;
`

export const ConfirmButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primary_500};
  height: 50px;
  border-radius: 12px;

  justify-content: center;
  align-items: center;
`

export const ConfirmButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${theme.colors.dark_700};
`

export const ModalContainer = styled.View`
  background-color: ${theme.colors.dark_900};
  padding: 20px;

  flex: 1;
`

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ModalHeaderTitle = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${theme.colors.light_100};
`

export const ModalHeaderClose = styled.TouchableOpacity`
  background-color: ${theme.colors.dark_700};
  height: 40px;
  width: 40px;
  border-radius: 40px;

  justify-content: center;
  align-items: center;
`