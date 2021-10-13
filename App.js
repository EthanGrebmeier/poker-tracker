import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { UilSpade, UilFileAlt } from '@iconscout/react-native-unicons'
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import ContentSection from './components/ContentSection/ContentSection';
import HandsScreen from './components/Screens/Hands/HandsScreen';
import HomeScreen from './components/Screens/Home/HomeScreen';

const Page = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #22302B;
  padding: 15px 15px 10px 15px;
`

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaProvider
      style={{
        backgroundColor: '#22302B'
      }}
    >
      <NavigationContainer>
          <Tab.Navigator 
            initialRouteName="Hands"
            screenOptions={{
              tabBarStyle: { 
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                backgroundColor: '#003B36',
                borderTopColor: 'transparent',
              },
              tabBarActiveTintColor: '#FACC57',
              tabBarInactiveTintColor: '#F8EDD3',
              headerShown: false
            }}
          >
            <Tab.Screen 
              name="Hands" 
              component={HandsScreen} 
              options={{
                title: 'Hands',
                tabBarIcon: ({focused, color, size}) => (<UilSpade color={focused ? '#FACC57' : '#F8EDD3'} />)
              }}
            />
            <Tab.Screen 
              name="Sessions" 
              component={HomeScreen} 
              options={{
                title: 'Sessions',
                tabBarIcon: ({focused, color, size}) => (<UilFileAlt color={focused ? '#FACC57' : '#F8EDD3'} />)
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}
