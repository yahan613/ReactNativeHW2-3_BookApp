import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Pressable } from 'react-native';
import newBookData from './Data/newBookData.json';
import { getImagee } from './Data/NewBookImg.js';
import { getStar } from './Data/star.js';


const NewBook = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <Text style={styles.title}>Newest</Text>
            <ScrollView
                horizontal={true}
                contentContainerStyle={styles.container}
                showsHorizontalScrollIndicator={false}
            >
                {newBookData.map((book, index) => (
                    <Pressable
                        key={index}
                        onPress={() => navigation.navigate('BookinfoPage', {
                            bookName: book.bookName,
                            author: book.author,
                            type: 'NewBook',
                            rate: book.rate,
                            image: book.image,
                        })}
                    >
                        <View key={index} style={styles.item}>
                            <Image
                                source={getImagee(book.image)}
                                style={styles.image}
                                resizeMode="contain"
                            />
                            <View style={styles.starContainer}>
                                {[...Array(book.rate)].map((_, i) => (
                                    <Image
                                        key={i}
                                        source={getStar('full')}
                                        style={styles.star}
                                    />
                                ))}
                                {[...Array(5 - book.rate)].map((_, j) => (
                                    <Image
                                        key={j}
                                        source={getStar('empty')}
                                        style={styles.star}
                                    />
                                ))}
                            </View>
                            <Text style={styles.bookName}>{book.bookName}</Text>
                            <Text style={styles.author}>{book.author}</Text>
                        </View>
                    </Pressable>
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

    },
    author: {
        fontSize: 16,
        color: 'gray',
    },
    image: {
        marginTop: 0,
        width: "90%",
    },
    item: {
        marginTop: 0,
        width: 180,
        height: 350,
    },
    starContainer: {
        flexDirection: 'row',
    },
    star: {
        width: 17,
        aspectRatio: 1,
        marginTop: -17,
        marginRight: 3,
    }
});

export default NewBook;
