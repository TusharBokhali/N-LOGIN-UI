import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from '@/hooks/useColorScheme';
import Home from './Home';
import Login from './Login';
import SingUp from './SingUp';
import Welcome from './Welcome';



export default function RootLayout() {
  

  const Stack = createNativeStackNavigator();

 

  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName='Welcome'>  
    <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
    <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
    <Stack.Screen name="SingUp" options={{headerShown: false}} component={SingUp} />
    <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
