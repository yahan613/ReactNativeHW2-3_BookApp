import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity, Linking, SafeAreaView } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import AccountScreen from './Screen/Account';
import SettingsScreen from './Screen/Settings';
const Drawer = createDrawerNavigator();
import Homepage from './Screen/Homepage';
import ButtomNavigator from './ButtomNavigator'
import MyDrawer from './DrawerNavigator';


export default function Home() {
  return (
      <View style={styles.content}>
        <MyDrawer/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});


