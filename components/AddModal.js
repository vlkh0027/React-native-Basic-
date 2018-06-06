import React, {Component} from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View,
    Image, Alert, Platform, TouchableHighlight, Dimensions, TextInput 
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import FlatListData from '../data/flatListData';
var screen = Dimensions.get('window');
export default class AddModal extends Component{
    constructor(props){
        super(props);
        this.state={
            newFoodName: "",
            newFoodDescription: "",
        };
    }
    ShowAddModal = ()=>{
        this.refs.myModal.open();
    }

    generateKey= (length, chars)=>{
        var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
    };
    render(){
        return(
            <Modal
            ref={"myModal"}
                style={{
                    justifyContent:'center',
                    borderRadius: Platform.OS === 'ios' ? 30:0,
                    shadowRadius:10,
                    width:screen.width-80,
                    height:250,
                    borderRadius:20,
                
                }}
                position = 'center'
                backdrop={true}
                onClosed={ ()=>{
                    alert("food add success ");
                }}
            >
                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    textAlign:'center',
                    marginTop:20
                }}>New food's information </Text>
                <TextInput style={{
                    height:40,
                    borderBottomColor:'gray',
                    marginLeft:30,
                    marginTop:10,
                    marginBottom:20,
                    borderBottomWidth:1                   
                }}
                onChangeText = {(text)=>{
                    this.setState({newFoodName : text})
                }}
                placeholder = "Enter new food's name "
                value={this.state.newFoodName}
                ></TextInput>
                <TextInput style={{
                    height:40,
                    borderBottomColor:'gray',
                    marginLeft:30,
                    marginTop:10,
                    marginBottom:20,
                    borderBottomWidth:1                   
                }}
                onChangeText = {(text)=>{
                    this.setState({newFoodDescription : text})
                }}
                placeholder = "Enter new food's description "
                value={this.state.newFoodDescription}
                ></TextInput>
                <Button
                style = {{fontSize:18, color:'white'}}
                containerStyle={{
                    padding:8,
                    backgroundColor: '#0ad397',
                    marginRight:70,
                    marginLeft:70,
                    borderRadius:6,
                    height:40
                }}
                onPress ={()=>{
                    if(this.state.newFoodName.length ==0 || this.state.newFoodDescription.length == 0){
                        alert("you must enter food's name and description");
                        return;
                    }
                    const newKey = this.generateKey(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
                    const newFood ={
                        key:newKey,
                        name:this.state.newFoodName,
                        phonenumber : this.state.newFoodDescription,
                        image:require('../images/1.jpg')
                    }
                    FlatListData.push(newFood);
                    this.props.parentFlatList.refreshFlatList(newKey);
                    this.refs.myModal.close();
                }}
                >Save</Button>
            </Modal>
        );
    }
}


 