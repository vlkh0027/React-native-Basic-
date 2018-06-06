/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styleX from './style';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    let char1 = ` My name is Linh, i am 23 years old, i an from ho chi minh city, my favourite
    is chicken rice, humbeger, milk tea `
    return (
      <View style= {{marginTop: 20}}>
        <Text style={{margin:5, color:'black'}}> first</Text>

      </View>
    );
  }
}


