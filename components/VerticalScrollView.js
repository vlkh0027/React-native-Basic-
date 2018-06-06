import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, TextInput, Dimensions,
    ScrollView
} from 'react-native';

export default class VerticalScrollView extends Component{
    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return(
            <ScrollView
                keyboardDismissMode='on-drag'
                horizontal={true}
                pagingEnabled={true}
            >
                <View style={{
                    backgroundColor: '#43b3e9',
                    flex:1,
                    marginTop:20,
                    width:screenWidth,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Text style={{
                        fontSize:20,
                        padding:15,
                        color:'white'
                    }}>screen1</Text>
                </View>
                <View style={{
                    backgroundColor: '#14d8ba',
                    flex:1,
                    marginTop:20,
                    width:screenWidth,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Text style={{
                        fontSize:20,
                        padding:15,
                        color:'white'
                    }}>screen1</Text>
                </View>
                <View style={{
                    backgroundColor: '#ff0000',
                    flex:1,
                    marginTop:20,
                    width:screenWidth,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Text style={{
                        fontSize:20,
                        padding:15,
                        color:'white'
                    }}>screen1</Text>
                </View>
            </ScrollView>
        );
    }

}

