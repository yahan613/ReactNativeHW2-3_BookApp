import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './Screen/Homepage';
import WishList from './Screen/WishList';
import MyBook from './Screen/MyBook';
import { getnavicon } from './components/Data/getNavigator';
import { Image } from 'react-native';
import BookinfoStack from './Navigator/BookinfoStack';
import MyDrawer from './DrawerNavigator';


const Tab = createBottomTabNavigator();


export default function MainNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          headerShown: false, 
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 90,
            backgroundcolr: '#fff',
          },
          tabBarInactiveTintColor: '#666666', 
          tabBarActiveTintColor: '#6200EE', 
          tabBarLabelStyle: { 
            fontSize: 17, 
            marginBottom: 10, 
          },
          tabBarIconStyle: { 
            marginTop:10,
            width: 40,
            height: 40,
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={BookinfoStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
              focused
                ? <Image source={getnavicon("Activated_Homeimg")} style={{ width: 30, height: 30 }} />
                : <Image source={getnavicon("Original_Homeimg")} style={{ width: 30, height: 30 }} />
            )
          }}
        />
  
        <Tab.Screen
          name="WishList"
          component={WishList}
          options={{
            tabBarLabel: 'WishList',
            tabBarIcon: ({ focused }) => (
              focused
                ? <Image source={getnavicon("Activated_Listimg")} style={{ width: 30, height: 30 }} />
                : <Image source={getnavicon("Original_Listimg")} style={{ width: 30, height: 30 }} />
            )
          }}
        />
        <Tab.Screen
          name="MyBook"
          component={MyBook}
          options={{
            tabBarLabel: 'MyBook',
            tabBarIcon: ({ focused }) => (
              focused
                ? <Image source={getnavicon("Activated_Mybookimg")} style={{ width: 30, height: 30 }} />
                : <Image source={getnavicon("Original_Mybookimg")} style={{ width: 30, height: 30 }} />
            )
          }}
        />
      </Tab.Navigator>
    );
  }

