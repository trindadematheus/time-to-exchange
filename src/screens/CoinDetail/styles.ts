import styled from "styled-components/native";

import theme from "../../styles/theme";

export const Container = styled.View`
  background-color: ${theme.colors.dark_900};
  padding: 20px;

  flex: 1;
`

export const Header = styled.View`
  height: 200px;

  justify-content: center;
  align-items: center;
`

export const Image = styled.View`
  background-color: red;
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

export const PricePercent = styled.Text`
  font-size: 16px;
  color: red;
  margin-right: 4px;
`

export const PriceIndicator = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.6);
`