import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

class Greeting extends Component{
    render(){
        return(
            <Text>hello {this.props.name}</Text>
        );
    }
}

export default class MultipleGreeting extends Component{
    render(){
        return(
            <View style={{alignItems:'center'}}>
                <Greeting name="tao la linh"></Greeting>
            </View>
        );
    }
}