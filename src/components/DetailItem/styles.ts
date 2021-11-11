import styled, { css } from "styled-components/native";

import theme from "../../styles/theme";

export const Container = styled.View`
  background-color: ${theme.colors.dark_700};
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 10px;

  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: ${theme.colors.light_200};
`

type ValueProps = {
  color: string;
}

export const Value = styled.Text<ValueProps>`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${props => props.color};
`