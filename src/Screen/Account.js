import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import ButtomNavigator from '../ButtomNavigator';


const AccountScreen = () => {
  return (
    <View style={styles.text}>
            <Text>Account</Text>
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

 export default AccountScreen;
