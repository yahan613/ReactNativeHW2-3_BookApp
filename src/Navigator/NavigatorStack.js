import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import BookinfoStack from './BookinfoStack';
import MainNavigator from "../ButtomNavigator";
const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="BookinfoStack" component={BookinfoStack}
                    options={{
                        headerShown: false
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
