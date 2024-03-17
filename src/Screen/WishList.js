import {Text, View, StyleSheet} from 'react-native';
import React from 'react';


export default function WishList() {
    return (
        <View style={styles.text}>
            <Text>WishList</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   text:{
    flex:1, 
    alignItems:'center', 
    justifyContent:'center'
   }
  });