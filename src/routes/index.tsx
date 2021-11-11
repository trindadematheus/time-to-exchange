import * as React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'

import HomeScreen from '../screens/Home';
import theme from '../styles/theme';
import NewScheduleScreen from '../screens/NewSchedule';
import SettingsScreen from '../screens/Settings';
import CoinDetailScreen from '../screens/CoinDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer theme={DarkTheme} >
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
          name="HomeRoutes"
          component={HomeRoutes}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => <Feather name="home" size={18} color={color} />
          }}
        />
        <Tab.Screen
          name="NewScheduleScreen"
          component={NewScheduleScreen}
          options={{
            tabBarLabel: 'New Schedule',
            title: 'New Schedule',
            tabBarIcon: ({ color }) => <Feather name="check-square" size={18} color={color} />
          }}
        />
        <Tab.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            title: 'Settings',
            tabBarIcon: ({ color }) => <Feather name="settings" size={18} color={color} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CoinDetailScreen"
        component={CoinDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}