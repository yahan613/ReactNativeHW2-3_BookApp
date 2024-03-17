import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './Screen/Homepage';
import WishList from './Screen/WishList';
import MyBook from './Screen/MyBook';
import { getnavicon } from './components/Data/getNavigator';
import { Image } from 'react-native';


const Tab = createBottomTabNavigator();


export default function MainNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true, // 显示底部导航栏标签文本
          headerShown: false, // 隐藏每个屏幕的上方导航栏
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 90,
            backgroundcolr: '#fff',
          },
          tabBarInactiveTintColor: '#666666', // 非激活状态的文本颜色
          tabBarActiveTintColor: '#6200EE', // 激活状态的文本颜色
          tabBarLabelStyle: { // 底部标签的样式
            fontSize: 17, // 字体大小
            marginBottom: 10, // 调整标签上下间距，向上移动标签文本
          },
          tabBarIconStyle: { // 底部图标的样式
            marginTop:10,
            width: 40,
            height: 40,
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Homepage}
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

