/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import {View} from 'react-native'; 
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';  

export default class HelloRN extends Component {
  render() {
    return (
      <View style={{flex:1}}>
      <View style={{backgroundColor:'cadetblue',flex:1}}/>
      <View style={{backgroundColor:'pink',flex:1}}/>
      </View>
      /*<View style={styles.container}>
        <Text style={styles.welcome}>
          你好！我是測試唷唷
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>*/
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff9c4',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    color:'#000000',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HelloRN', () => HelloRN);
