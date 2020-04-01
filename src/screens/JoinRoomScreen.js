import React , {Component} from 'react';
import {View,Text,Button} from 'react-native';
import Icon from 'react-native-vector-icons';

const JoinRoomScreen = ({navigation}) => {
  return(
    <View>
      <Text>JoinRoomScreen</Text>
      <Button
        onPress={()=>navigation.navigate('ChatRoom')}
        title="BackToChat"
      ></Button>
    
    </View>
  );
}

export default JoinRoomScreen;
