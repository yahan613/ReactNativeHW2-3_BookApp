import React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { getImage } from '../components/Data/PopularBookImg';
import { getImagee } from '../components/Data/NewBookImg';
import { getStar } from '../components/Data/star';
import { ScrollView } from 'react-native-gesture-handler';


const BookinfoPage = ({ route, navigation }) => {
    /*const BookSource = bookName === 'A' || bookName === 'B' || bookName === 'C'
        ? getImage('first')
        : getImagee('second');
    const { bookName } = route.params;
    const displayBookName = bookName || 'Unknown Book';*/
    const { bookName, author, type, rate, image } = route.params;
    console.log(type);
    return (
        <View style={styles.container}>
            <Image
                source={type === 'Popularbook' ? getImage(image) : getImagee(image)}
                style={styles.book}
            />
            <ScrollView
                contentContainerStyle={styles.info}
                showsVerticalScrollIndicator={false}>
                <Text style={styles.name}>{bookName}</Text>
                <Text style={styles.author}>{author}</Text>
                {rate !== 'blank' && <View style={styles.ratecontainer}>
                    {[...Array(rate)].map((_, i) => (
                        <Image
                            key={i}
                            source={getStar('full')}
                            style={styles.star}
                        />
                    ))}
                    {[...Array(5 - rate)].map((_, j) => (
                        <Image
                            key={j}
                            source={getStar('empty')}
                            style={styles.star}
                        />
                    ))}
                    <Text style={styles.rate}>{rate}.0</Text>
                    <Text style={styles.rate2}>/5.0</Text>
                </View>}
                {rate === 'blank' && <View style={styles.blankRate}></View>}
                <Text style={styles.content}>
                    A spectacular visual journey through 40 years
                    of haute couture from one of the best-known and
                    most trend-setting brands in fashion.
                </Text>
                <Text style={styles.purchaceButtom}>
                    BUY NOW FOR $46.99
                </Text>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    text: {
        flex: 1,
        justifyContent: 'center',

    },
    book: {
        marginTop: 15,
        justifyContent: 'center',
        width: 252,
        height: 360,
    },
    info: {
        width: '100%',
        height: 350,
        marginTop: 35,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    author: {
        marginTop: 5,
        fontSize: 14,
        color: '#666666',
    },
    ratecontainer: {
        width: '35%',
        height: 100,
        marginTop: 5,
        flexDirection: 'row',
    },
    star: {
        width: 17,
        aspectRatio: 1,
        marginRight: 3,
    },
    rate: {
        fontWeight: 'bold',
        marginLeft: 3,
        letterSpacing: 1.5,
    },
    rate2: {
        color: '#666666',
        letterSpacing: 1.5,
    },
    blankRate: {
        height: 70,
    },
    content: {
        width: 350,
        textAlign: 'center',
        fontSize: 14,
        letterSpacing: 0.5,
        lineHeight: 25,
        marginTop: -50,
    },
    purchaceButtom: {
        marginTop: 50,
        backgroundColor: '#6200EE',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        fontSize: 18,
        color: '#fff',
    }

});

export default BookinfoPage;
