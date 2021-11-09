import styled from "styled-components/native";

import theme from "../../styles/theme";

export const Container = styled.TouchableOpacity`
  background-color: ${theme.colors.dark_700};
  border-radius: 12px;
  margin-bottom: 10px;
  padding: 20px 14px;
`

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Image = styled.View`
  background-color: red;
  border-radius: 40px;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${theme.colors.light_100};
`

export const Prices = styled.View`
  flex-direction: row;
`

export const Price = styled.Text`
  font-size: 14px;
`