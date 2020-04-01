import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';
import { Input, Button, ThemeConsumer } from 'react-native-elements';
import firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';
import { ChatLineHolder } from '../components/chatLineHolder';

class ChatRoomScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatData: [],
      chatInputContent: '',
      username: '',
    }
  }


  async componentDidMount(){
    let nameGet=await AsyncStorage.getItem('name');
    this.setState({username:nameGet});
    firebase.database().ref('/chatRoom').on("value",(snapshot)=>{
      
      this.setState({
        chatData:Object.values(snapshot.val())
      })
    })
  }
  
  _onChangeChatInput = (text) => {
    this.setState({
      chatInputContent: text
    })
  }

  _sendMessage = () => {
    firebase.database().ref('/chatRoom').push({
        userName : this.state.username,
        chatContent : this.state.chatInputContent,

    });
    this.setState({
        chatInputContent : ''
    });
}

  _renderChatLine = (item) =>
  {
      if(item.userName === this.state.username)
      {
          return(
              <View style={{ alignItems: 'flex-end' }} >
                      <ChatLineHolder sender="YOU" chatContent={item.chatContent} />
                  </View>
          );
      }
      return(
          <ChatLineHolder sender={item.userName} chatContent={item.chatContent} />
      );
  };

  
  
  render() {
    console.log("==> State:  ", this.state);
   
    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{ opacity: 0.5 }}
          source={require('../images/background.jpg')}
          style={styles.imageStyle}
        >
            <FlatList data={this.state.chatData} renderItem={({item},index) => this._renderChatLine(item)} />
         
        </ImageBackground>

        <View style={styles.subContainer}>
          <View style={styles.chatBox}>
            <View style={styles.chatFrame}>
              <Input
                value={this.state.chatInputContent}
                placeholder="Enter messages"
                onChangeText={(text) => this._onChangeChatInput(text)}
              />
            </View>
            <View style={styles.sendButton}>
              <Button
                onPress={() => this._sendMessage()}
                
                buttonStyle={{ width: 70, height: 40, borderRadius: 30 }}
                title="Send"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  imageStyle: {
    flex: 9 / 10,
    backgroundColor: '#A5A5A5',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  subContainer: {
    flex: 1 / 10
  },
  chatBox: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 2
  },
  chatFrame: {
    flex: 8 / 10
  },
  sendButton: {
    flex: 2 / 10
  }
})

export default ChatRoomScreen;
