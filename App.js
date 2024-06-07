import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, ScrollView, Image, Pressable } from 'react-native';
import MainStack from './src/Navigator/NavigatorStack';
import MyDrawer from './src/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/ButtomNavigator';
import Homepage from './src/Screen/Homepage';
import BookinfoStack from './src/Navigator/BookinfoStack';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <MainNavigator/>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})