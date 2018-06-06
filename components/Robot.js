import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Robot extends Component{
    render(){
        return(
            <Image source={ {uri: "https://static.generation-robots.com/5474-large_default/programmable-humanoid-nao-evolution-robot-red.jpg"}}
                style={{width:200, height:200}}
            ></Image>
        );
    }
}
