import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import MainStack from './src/Navigator/NavigatorStack';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
          <MainStack/>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})