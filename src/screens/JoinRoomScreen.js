import React , {Component, useState, useEffect} from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Input,Button,Header} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Firebase from '../config/firebase';
import firebase from 'firebase';

class JoinRoomScreen extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      name:''
    }
  }



  UNSAFE_componentWillMount(){
   ()=> {
     <Firebase/>
   }
  }

  _onChangeName = (text) => {
    this.setState({
      name:text
    })
  }
    _toChatRoom = () => {
      firebase.auth().signInAnonymously().then((user) => {
          AsyncStorage.setItem('name',this.state.name);
          this.props.navigation.navigate('ChatRoom');
      }).catch( (err) => alert(err) );
  }


  render(){
    
    return(
      <View>
        <Icon name="users" size={100} color="#5face3" style={{alignSelf:'center',marginTop:50}} />
        <Input 
          placeholder="Enter your name"
          leftIcon={
            <Icon name="code" size={30} color="#5face3"style={{marginRight:10}} />
          }
          label="Name"
          labelStyle={{marginLeft:20,marginTop:100}}
          onChangeText={(text)=>this._onChangeName(text)}
          inputStyle={{}}
        />
        <Button
          type="solid"
          title="Join Room"
          buttonStyle={{
            width:100,
            height:40,
            alignSelf:'center',
            margin:50
          }}
          color="#5face3"
          onPress={()=>this._toChatRoom()}
        />
      
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:0.5,
    justifyContent:'center'
  }
});


export default JoinRoomScreen;
