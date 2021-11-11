import styled from "styled-components/native";

import theme from "../../styles/theme";

export const Container = styled.View`
  background-color: ${theme.colors.dark_700};
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 10px;

  flex-direction: row;
  align-items: center;
`

export const Icon = styled.View`
  background-color: red;
  border-radius: 40px;
  height: 40px;
  width: 40px;
  margin-right: 10px;
`

export const Title = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: ${theme.colors.light_200};
`

export const Value = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${theme.colors.light_100};
`