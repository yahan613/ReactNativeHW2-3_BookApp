import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const imageWidth = screenWidth * 0.08; // 將屏幕寬度的20％設置為圖片的寬度
const Drawer = createDrawerNavigator();

const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.image}
                source={require('./img/icon_menu.png')}
            />
            <Image
                style={styles.image}
                source={require('./img/icon_search.png')}
            />
        </SafeAreaView>
    );
};

const Feed = () => {
    return (
        <View>
            {/* 這裡是你的"Feed"畫面內容 */}
        </View>
    );
};

const Article = () => {
    return (
        <View>
            {/* 這裡是你的"Article"畫面內容 */}
        </View>
    );
};

const MyDrawer = () => {
    return (
        <Drawer.Navigator drawerContent={() => <Header />}>
            
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#fff',
        width: '100%',
        height: '8%',
        flexDirection: 'row', // 水平排列子元素
        justifyContent: 'space-between', // 將子元素置中
        alignItems: 'center', // 垂直置中
    },
    image: {
        marginHorizontal: 28, // 添加水平間距
        width: imageWidth,
        aspectRatio: 1,
    },
});

export default MyDrawer;
