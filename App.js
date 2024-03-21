import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ButtomNavigator from './src/ButtomNavigator'
import Home from './src/Home'
import { createStackNavigator } from '@react-navigation/stack';
import MyDrawer from './src/DrawerNavigator';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BookinfoStack from './src/Navigator/BookinfoStack';
import { StyleSheet, View, Text, ScrollView, Image, Pressable } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <BookinfoStack/>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})