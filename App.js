import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Login } from './components/main/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Family Social</Text>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: '20%',
    fontSize: 33,
    left: 0,
    right: 0,
    textAlign: 'center',

}

});
