import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,Keyboard
} from 'react-native';
let widthPlatform = Platform.select({
    ios:100,
    android:50
});
export default class FixedDimension extends Component{
    constructor(props){
        super(props);
        this.state={
            typedText:'please type your text',
            typedDescription:'' 
        };
    }

    componentWillMount(){
        this.KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=>{
            this.setState(()=>{
                return {typedText:'Key board is shown'}
            })
        });

        this.KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', ()=>{
            this.setState(()=>{
                return{typedText:'key board is hided'}
            })
        });
    }

    componentWillUnmount(){
        this.KeyboardDidShowListener.remove();
        this.KeyboardDidHideListener.remove();
    }
    render(){
        console.log("ahihi");                                   
        return(
            <View style={{flex:1, flexDirection:'column', 
            //justifyContent:'flex-end',
            //justifyContent:'flex-start',
            //justifyContent:'space-between',
            //justifyContent:'space-around',
            justifyContent:'center',
            }}>
                <View style={{width:widthPlatform, height: 50,backgroundColor:'blue',margin:10}}></View>
                <View style={{ width:widthPlatform, height:50, backgroundColor:'red',margin:10}}></View>
                <View style={{width:widthPlatform, height:50, backgroundColor:'cyan',margin:10}}></View>
                <TextInput style={{
                    height:40,
                    margin:20,
                    borderColor:'gray',
                    borderWidth:1,
                    padding:10
                }}
                keyboardType='email-address'
                placeholder='enter your email'
                placeholderTextColor='red'
                onChangeText={
                    (text)=>{
                        this.setState(
                            (previousState)=>{
                                return{
                                    typedText: text
                                }
                            }
                          
                        );
                    }
                }
                />
                <Text style={{marginLeft:20}}>{this.state.typedText}</Text>
                <TextInput style={{
                    height:100,
                    margin:20,
                    borderColor:'gray',
                    borderWidth:1,
                    padding:10
                }}
                placeholderTextColor='red'
                //multiline={true}
                editable={true}
                autoFocus={true}
                returnKeyType ='done'
                onSubmitEditing = {Keyboard.dismiss}
                onChangeText={
                    (text)=>{
                        this.setState(
                            (previousState)=>{
                                return{
                                    typedDescription: text
                                }
                            }
                          
                        );
                    }
                }
                />
            </View>
        );
    }
}

