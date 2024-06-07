import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity, Linking } from 'react-native';
import PopularBook from '../components/PopularBook';
import NewBook from '../components/NewBook';



export default function Homepage({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          {/* 將 navigation 屬性傳遞給 PopularBook 組件 */}
          <PopularBook navigation={navigation}/>
          <NewBook navigation={navigation}/>
          <View style={styles.blank}></View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  blank: {
    width: '100%',
    height: 180,
    position: 'relative'
  }
});
