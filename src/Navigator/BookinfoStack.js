import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BookinfoPage from '../Screen/BookinfoPage';
import MyDrawer from '../DrawerNavigator';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
    header: {
        height: 70, // 设置导航栏高度
    },
});

export default function BookinfoStack() {
    const [isPressed, setIsPressed] = useState(false);
    const handlePress = () => {
        setIsPressed(!isPressed);
    };
    let imagePath = isPressed ? 'https://github.com/yahan613/ReactNativeHW2-3_BookApp/blob/d8e1e3bcbf27f4e425ab4ed0ad2c070c05339a25/src/components/img/icon_nav_bookmark_actived.png?raw=true' : 'https://github.com/yahan613/ReactNativeHW2-3_BookApp/blob/d8e1e3bcbf27f4e425ab4ed0ad2c070c05339a25/src/components/img/icon_nav_infobookmark.png?raw=true'
    let imagewidth = isPressed ? 21 : 30;
    return (
        <Stack.Navigator initialRouteName="MyDrawer">
            <Stack.Screen
                name="MyDrawer"
                component={MyDrawer}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="BookinfoPage"
                component={BookinfoPage}
                initialParams={{
                    bookName: 'defaultBookname',
                    author: 'defaultBookAuthor',
                    type: 'defaultType',
                    rate: 'defaultRate',
                    image: 'defaultImage'
                }}
                options={({ navigation, route }) => ({
                    headerStyle: styles.header,
                    headerTitle: '',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={{ uri: 'https://github.com/yahan613/ReactNativeHW2-3_BookApp/blob/a636f96a997da4e95f8d54415334b5a2c8ea632f/src/components/img/icon_back.png?raw=true' }}
                                style={{ width: imagewidth, height: 33, marginLeft: 20, marginTop: 5 }}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={handlePress}>
                            <Image
                                source={{ uri: imagePath }}
                                style={{ width: 21, height: 28, marginRight: 20, marginTop: 5 }}
                            />
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>

    )
}
