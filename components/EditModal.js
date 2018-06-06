import React, {Component} from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View,
    Image, Alert, Platform, TouchableHighlight, Dimensions, TextInput 
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');
export default class EditModal extends Component{
    constructor(props){
        super(props);
        this.state={
           // key:"",
            eFoodName: "",
            eFoodDescription: "",
            //flatListItem: null,
        };
    }
    ShowEditModal = (editingFood, flatListItem)=>{
        this.setState({
            key:editingFood.key,
            eFoodName: editingFood.name,
            eFoodDescription: editingFood.phonenumber,
            flatListItem: flatListItem,
        });
        this.refs.myModal.open();
    }

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
                    alert("food edit success ");
                }}
            >
                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    textAlign:'center',
                    marginTop:20
                }}>Edit food's information </Text>
                <TextInput style={{
                    height:40,
                    borderBottomColor:'gray',
                    marginLeft:30,
                    marginTop:10,
                    marginBottom:20,
                    borderBottomWidth:1                   
                }}
                onChangeText = {(text)=>{
                    this.setState({eFoodName : text})
                }}
                placeholder = "Enter food's name "
                value={this.state.eFoodName}
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
                    this.setState({eFoodDescription : text})
                }}
                placeholder = "Enter food's description "
                value={this.state.eFoodDescription}
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
                    if(this.state.eFoodName.length ==0 || this.state.eFoodDescription.length == 0){
                        alert("you must enter food's name and description");
                        return;
                    }
                    var foundIndex = flatListData.findIndex(item=>this.state.key == item.key);
                    if(foundIndex < 0){
                        return; // not found
                    }
                    flatListData[foundIndex].name = this.state.eFoodName;
                    flatListData[foundIndex].phonenumber = this.state.eFoodDescription;
                    this.props.parentFlatList.onRefreshFlatListItem();
                    //this.state.flatListItem.refreshFlatListItem();
                    this.refs.myModal.close();
                }}
                >Save</Button>
            </Modal>
        );
    }
}



 