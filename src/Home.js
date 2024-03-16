import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import PopularBook from './components/PopularBook';
import NewBook from './components/NewBook';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Homepage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <PopularBook />
          <NewBook />
          <View style={styles.blank}></View>
        </ScrollView>
      </View>
    </View>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        drawerLabelStyle: {
          fontSize: 20,
        },
        headerStyle: {
          height: 100, // 增加标题栏的高度
        },
      }}>
      <Drawer.Screen name="home" component={Homepage}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={require('./components/img/icon_menu.png')}
                style={{ width: 30, height: 30, marginLeft: 20, marginTop: 5, }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Image
              source={require('./components/img/icon_search.png')}
              style={{ width: 30, height: 30, marginRight: 20, marginTop: 5, }}
            />
          )
        })}
      />
    </Drawer.Navigator>
  );
}

export default function Home() {
  return (
    <MyDrawer />
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
  headerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  blank: {
    width: '100%',
    height: 180,
    position: 'relative'
  }
});
