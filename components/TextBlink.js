import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Blink extends Component{
    constructor(props){
        super(props);
        this.state={
            showText:true,
        };
        var taskToDo = () =>{
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                }
            });
        };
        const timeToBink = 1000;
        
        setInterval(taskToDo,timeToBink);
    }

    render(){
        let textToDisplay = this.state.showText ? this.props.inputText : '';
        return(
            <Text>{textToDisplay}</Text>
        )
    }
}

export default class TextBlink extends Component{
    render(){
        return(
            <View>
                <Blink inputText='hello , how are you?'></Blink>
                <Blink inputText='i am fine, thanks you!'></Blink>
            </View>
        )
    }
}