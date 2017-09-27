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
  View,
  Image,
  TouchableOpacity
} from 'react-native';  

export default class HelloRN extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.center}>
          <Image style={[styles.center,{width:400}]} source={require('./cat.jpg') }>
            <Text style={{color:'#fff',fontSize:30}}>
              Hellooooooooo
            </Text>
            <TouchableOpacity style={styles.button} onPress={function() {console.log('被按了')}}>
              <Text style={styles.buttonText}>TouchableOpacityButton</Text>
            </TouchableOpacity>
          </Image>
          
        </View>
        <View style={[styles.cㄔㄛenter,{backgroundColor:'darksalmon'}]}>
          <Text style={{color:'#fff',fontSize:30}}>
            Worldddddd
          </Text>
        </View>
      </View>
      /*<View style={styles.container}>
        <Text style={styles.welcome}>
          再一次測試
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
    center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('HelloRN', () => HelloRN);
