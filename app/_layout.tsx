import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from '@/hooks/useColorScheme';
import Home from './Home';
import Login from './Login';
import SingUp from './SingUp';
import Welcome from './Welcome';
import React from 'react';
import { StatusBar } from 'expo-status-bar';



export default function RootLayout() {
  
  const Stack =  createStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <StatusBar style='light'/>
    <Stack.Navigator initialRouteName='Welcome'>  
    {/* <Stack.Screen name="Home" options={{headerShown: false}} component={Home} /> */}
    <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
    <Stack.Screen name="SingUp" options={{headerShown: false}} component={SingUp} />
    <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
