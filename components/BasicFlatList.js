import React,{Component} from 'react';
import {AppRegistry, FlatList, StyleSheet, Text, View,
     Image, Alert, Platform, TouchableHighlight} from 'react-native';
import flatListData from '../data/flatListData'
import Swipeout from 'react-native-swipeout';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import AddModal from './AddModal';
import EditModal from './EditModal';
class FlatListItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            activeRowkey: null,
        };
    }

    

    render(){
        const swipeSetting = {
            autoClose: true,
            onOpen: (sectionID, rowId, direction)=>{
                this.setState({activeRowkey: this.props.item.key})
            },
            onClose: (sectionID, rowId, direction)=>{
                if(this.state.activeRowkey != null){
                    this.setState({activeRowkey:null});
                }
            },
            right:[
                {
                    onPress: ()=>{
                        this.props.parent._onPressEdit(this.props.index);
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress :()=>{
                        const deletingRow = this.state.activeRowkey;
                        Alert.alert(
                            'Notification',
                            'Are you want to delete?',
                            [
                            //   {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                              {text: 'OK', onPress: () =>{
                                  flatListData.splice(this.props.index,1);
                                  this.props.parent.refreshFlatList(deletingRow);
                              }},
                            ],
                            { cancelable: true }
                          )
                    },
                    text:'Delete', type:'delete'
                },
            ],
            rowId: this.props.index,
            sectionId:1
        };
        return(
            <Swipeout {...swipeSetting}>
            <View style={{flex:1}}>            
            <View style={{
                flex:1,
                backgroundColor:this.props.index %2 == 0? '#5263dc' : '#004000',
                flexDirection:'row'
            }}>
                <View>
                        <Image
                            style={{width:100,height:120, margin:5}}
                        source={this.props.item.image}
                        >

                        </Image>
                </View>
                <View>
                    <Text style={styles.textFL}>{this.props.item.key}</Text>
                    <Text style={styles.textFL}>{this.props.item.name}</Text>
                        <Text style={styles.textFL}>{this.props.item.phonenumber}</Text>
                        </View>
                
                </View>
                <View style={{backgroundColor: 'white', height:1}}></View>
             </View>
            </Swipeout>
            
        );
    }
}
const styles = StyleSheet.create({
    textFL:{
        color:'white',
        padding:10,
        fontSize:15,
    }
})
export default class BasicFlatList extends Component {

    constructor(props){
        super(props);
        FLItem = new FlatListItem();
        this.state = ({
            deletedRowkey: null,
            indexItem: null,
            refresh: true,
        });
        this._onPressAdd = this._onPressAdd.bind(this);
        this._onPressEdit = this._onPressEdit.bind(this);
    }

    refreshFlatList = (activeKey) =>{
        this.setState((prevState)=>{
            return {
                deletedRowkey : activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }

    onRefreshFlatListItem(){
        //alert("hihi");
        //FLItem.refreshFlatListItem();
        this.setState({ 
            refresh: !this.state.refresh
          })
    }
    _onPressEdit(index){
        //alert(JSON.stringify(flatListData[index]));
        this.refs.editModal.ShowEditModal(flatListData[index],this);
    }
    _onPressAdd(){
       this.refs.addModal.ShowAddModal();
    }
     render(){
         return(
            <View style={{flex:1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
            <View style={{
                backgroundColor:'tomato',
                height:65,
                flexDirection:'row',
                justifyContent:'flex-end',
                alignItems:'center'
            }}>
                <TouchableHighlight style={{
                    marginRight: 15
                }}
                underlayColor='tomato'
                onPress={this._onPressAdd}
                >
                <Image style={{width:35, height:35}}
                    source={require('../icon/plus-button.png')}
                >

                </Image>

                </TouchableHighlight>
            </View>
                <FlatList
                    ref = {"flatList"}
                    data={flatListData}
                    extraData={this.state.refresh}
                    renderItem={({item,index})=>{
                        return(
                        <FlatListItem ref={'itemFlatList'} item={item} index={index} parent = {this}></FlatListItem>
                        );
                    }}
                >
                
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this}>
                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}> 
                </EditModal>
                
            </View>
         );
     }
}

