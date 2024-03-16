import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, Dimensions } from 'react-native';
import navigatorIcon from './Data/navigatorIcon.json';
import { getnavicon } from './Data/getNavigator';

const windowWidth = Dimensions.get('window').width;

const NavigatorBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView 
                horizontal={true} 
                contentContainerStyle={styles.scrollContainer} // 使用不同的样式名
                showsHorizontalScrollIndicator={false} // 移除水平滚动条
                scrollEnabled={false}
            >
                {navigatorIcon.map((icon, index) => (
                    <View key={index} style={styles.item}>
                        <Image
                            source={getnavicon(icon.image)}
                            style={styles.navIcon}
                            resizeMode="contain"
                        />
                        <Text style={styles.navName}>{icon.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 90,
        width: '100%',
        marginBottom: 0,
        alignItems: 'center', 
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    scrollContainer: {
        justifyContent: 'space-evenly',
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: windowWidth / 3,
    },
    item: {
        alignItems: 'center',
        marginHorizontal: 10, // 添加水平间距
        width: windowWidth / 3,
    },
    navIcon: {
        width: 30,
        height: 30,
        marginBottom: 5,
    },
    navName: {
        top: -8,
        fontSize: 16,
        color: '#666666',
    },
});

export default NavigatorBar;
