import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import theme from '../styles/theme';
import NewScheduleScreen from '../screens/NewSchedule';
import SettingsScreen from '../screens/Settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            backgroundColor: theme.colors.dark_700,
          },
          headerTitleStyle: {
            fontSize: 18,
            color: theme.colors.light_200
          },
          tabBarActiveTintColor: theme.colors.primary_500,
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            backgroundColor: theme.colors.dark_700,
            borderTopColor: theme.colors.dark_700,
            height: 64,
            paddingTop: 8,
            paddingBottom: 10,
          }
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Home'
          }}
        />
        <Tab.Screen
          name="NewScheduleScreen"
          component={NewScheduleScreen}
          options={{
            tabBarLabel: 'New Schedule',
            title: 'New Schedule'
          }}
        />
        <Tab.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            title: 'Settings'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}