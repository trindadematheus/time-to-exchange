import styled from "styled-components/native";

import theme from "../../styles/theme";

export const Container = styled.ScrollView`
  background-color: ${theme.colors.dark_900};
  padding: 20px;

  flex: 1;
`

export const Header = styled.View`
  background-color: ${theme.colors.dark_700};
  height: 200px;

  justify-content: center;
  align-items: center;
`

export const AppName = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: ${theme.colors.light_100};
`

export const Title = styled.Text`
  margin-bottom: 20px;
  font-size: 24px;
  color: ${theme.colors.light_200};
  font-weight: bold;
`

export const Subtitle = styled.View`
  margin-top: 8px;
  margin-bottom: 20px;

  flex-direction: row;
  align-items: center;
`

export const SubtitleItem = styled.View`
  margin-right: 20px;

  flex-direction: row;
  align-items: center;
`

export const SubtitleItemStatus = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 20px;
  margin-right: 4px;
`

export const SubtitleItemLabel = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: ${theme.colors.light_200};
`