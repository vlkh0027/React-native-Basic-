import React,{Component} from 'react';
import {AppRegistry, FlatList, StyleSheet, Text, View,
     Image, Alert, Platform, TouchableHighlight} from 'react-native';

export default class HorizontalFlatList extends Component{
    render(){
        return(
            <View style={{
                flex:1,
                flexDirection:'column',
                marginTop: Platform.OS === 'ios' ? 34 : 0
            }}>
                <View style={{height:150}}>
                    <FlatList
                        style={{
                            backgroundColor:'black',
                            opacity:0.5,
                        }}
                    >

                    </FlatList>
                </View>
            </View>
        );
    }
}

