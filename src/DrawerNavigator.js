import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity, Linking, SafeAreaView } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import AccountScreen from './Screen/Account';
import SettingsScreen from './Screen/Settings';
const Drawer = createDrawerNavigator();
import Homepage from './Screen/Homepage';
import ButtomNavigator from './ButtomNavigator'


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{
                paddingLeft: 30,
                paddingBottom: 30,
                borderBottomWidth: 2,
                borderBottomColor: '#EDEDEF',
                borderStyle: 'solid' 
            }}>
                <Image
                    source={{ uri: 'https://github.com/yahan613/ReactNativeHW2-3_BookApp/blob/master/src/components/img/dcea36fbb59ee6c44fdec352c284fb5b.jpg?raw=true' }}
                    style={{
                        width: 60,
                        height: 60,
                        marginTop: 60,
                        borderRadius: 40, // 将边框半径设置为宽度和高度的一半
                        marginBottom: 10,
                    }}
                />
                <Text style={{ fontSize: 25, fontWeight: 'bold', }}>May</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export default function MyDrawer() {
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
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="home"
                component={Homepage}
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
            <Drawer.Screen
                name="Account"
                component={AccountScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image
                                source={require('./components/img/icon_menu.png')}
                                style={{ width: 30, height: 30, marginLeft: 20, marginTop: 5, }}
                            />
                        </TouchableOpacity>
                    ),
                })}
            />
            <Drawer.Screen
                name="settings"
                component={SettingsScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image
                                source={require('./components/img/icon_menu.png')}
                                style={{ width: 30, height: 30, marginLeft: 20, marginTop: 5, }}
                            />
                        </TouchableOpacity>
                    ),
                })}
            />
        </Drawer.Navigator>

    );
}

