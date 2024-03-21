import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 添加了使用導航鉤子的引入


const BookinfoPage = ({navigation}) => {
    return (
        <View style={styles.text}>
            <Pressable
                onPress={() => navigation.navigate('MyDrawer')}>
                <Text>Bookinfo Go Back</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default BookinfoPage;
