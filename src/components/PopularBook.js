import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import PopularBookData from "./Data/PopularBookData.json";
import { getImage } from "./Data/PopularBookImg.js";

const PopularBook = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.title}>Popular Books</Text>
            <ScrollView
                horizontal={true}
                contentContainerStyle={styles.container}
                showsHorizontalScrollIndicator={false} // 移除水平滚动条
            >
                {/* 遍历 PopularBookData 并渲染每一本书的书名和作者 */}
                {PopularBookData.map((book, index) => (
                    <View key={index} style={styles.item}>
                        <Image
                            source={getImage(book.image)}
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <Text style={styles.bookName}>{book.bookName}</Text>
                        <Text style={styles.author}>{book.author}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        marginLeft: 20,
        marginTop: 0,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 0,
    },
    container: {
        marginTop: -15,
        flexDirection: 'row', // 水平排列
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    bookName: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold',
        marginTop: -17,
    },
    author: {
        fontSize: 16,
        color: 'gray',
        bottom: 0,
    },
    image: {
        marginTop: 0,
        width: "90%",
    },
    item: {
        marginTop: 0,
        width: 180,
        height: 350,
    }
});

export default PopularBook;
