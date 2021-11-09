import styled from "styled-components/native";

import theme from "../../styles/theme";

export const Container = styled.View`
  background-color: ${theme.colors.dark_900};
  padding: 20px;

  flex: 1;
`

export const OptionItem = styled.TouchableOpacity`
  background-color: ${theme.colors.dark_700};
  padding: 18px;
  border-radius: 12px;
  margin-bottom: 14px;
`

export const OptionItemInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const OptionItemIcon = styled.View`
  background-color: ${theme.colors.primary_500};
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin-right: 10px;
`

export const OptionItemText = styled.Text`
  color: ${theme.colors.light_200};
`