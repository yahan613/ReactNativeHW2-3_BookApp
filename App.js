import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ButtomNavigator from './src/ButtomNavigator'
import Home from './src/Home'
import { createStackNavigator } from '@react-navigation/stack';
import MyDrawer from './src/DrawerNavigator';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <NavigationContainer>
      <Home/>
    </NavigationContainer>
  );
}
