import styled from "styled-components/native";

import theme from "../../styles/theme";

export const Container = styled.View`
  background-color: ${theme.colors.dark_700};
  border-radius: 12px;
  margin-bottom: 10px;
  padding: 20px 14px;
`

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Image = styled.Image`
  background-color: ${theme.colors.dark_900};
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

export const Price = styled.Text`
  font-size: 14px;
  color: ${theme.colors.primary_500};
`