import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

// Screens
import MainScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';
import BMICalculatorScreen from './screens/BMICalculatorScreen';
import RiskSurveyScreen from './screens/RiskSurveyScreen';
import FoodAddScreen from './screens/FoodAddScreen';
import InfoCenterScreen from './screens/InfoCenterScreen';
import FAQScreen from './screens/FAQScreen';
import ContactScreen from './screens/ContactScreen';
import PedometerScreen from './screens/PedometerScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
        initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f6f8f8',
          },
          headerTintColor: '#19c3e6',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: '#f6f8f8',
          }
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Diyabet Takip' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
        <Stack.Screen name="BMI" component={BMICalculatorScreen} options={{ title: 'BKI Hesaplama' }} />
        <Stack.Screen name="Risk" component={RiskSurveyScreen} options={{ title: 'Risk Anketi' }} />
        <Stack.Screen name="Food" component={FoodAddScreen} options={{ title: 'Besin Ekle' }} />
        <Stack.Screen name="Info" component={InfoCenterScreen} options={{ title: 'Bilgi Merkezi' }} />
        <Stack.Screen name="FAQ" component={FAQScreen} options={{ title: 'S.S.S.' }} />
        <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'İletişim' }} />
        <Stack.Screen name="Pedometer" component={PedometerScreen} options={{ title: 'Adımsayar' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
