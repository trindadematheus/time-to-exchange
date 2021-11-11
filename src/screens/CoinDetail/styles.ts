import styled, { css } from "styled-components/native";

import theme from "../../styles/theme";

export const Container = styled.ScrollView`
  background-color: ${theme.colors.dark_900};
  padding: 20px;

  flex: 1;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Menu = styled.View`
  background-color: ${theme.colors.dark_900};
  padding: 20px;
  padding-bottom: 0px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const MenuRight = styled.View`
  flex-direction: row;
  align-items: center;
`

export const MenuButton = styled.TouchableOpacity`
  background-color: ${theme.colors.dark_700};
  height: 40px;
  width: 40px;
  border-radius: 40px;

  justify-content: center;
  align-items: center;
`

export const Header = styled.View`
  height: 180px;

  justify-content: center;
  align-items: center;
`

export const Image = styled.Image`
  background-color: ${theme.colors.dark_900};
  height: 70px;
  width: 70px;
  border-radius: 70px;
  margin-bottom: 6px;
`

export const Name = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: ${theme.colors.light_100};
`

export const Initial = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: ${theme.colors.light_200};
`

export const Price = styled.View`
  margin-bottom: 40px;

  align-items: center;
`

export const PriceLabel = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: ${theme.colors.light_200};
`

export const PriceValueArea = styled.View`
  flex-direction: row;
  align-items: center;
`

export const PriceValue = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${theme.colors.light_100};
  margin-right: 4px;
`

type PricePercentProps = {
  isNegative: boolean;
}

export const PricePercent = styled.Text<PricePercentProps>`
  font-size: 16px;
  margin-right: 4px;

  ${props => props.isNegative && css`
    color: red;
  `}

  ${props => !props.isNegative && css`
    color: green;
  `}
`

export const PriceIndicator = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.6);
`