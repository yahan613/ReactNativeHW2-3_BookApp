import {Text, View, StyleSheet} from 'react-native';
import React from 'react';


const SettingsScreen = () => {
  return (
    <View style={styles.text}>
            <Text>Settings</Text>
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

 export default SettingsScreen;
