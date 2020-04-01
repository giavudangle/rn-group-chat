import React from 'react';
import {View,Text} from 'react-native';


import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

import JoinRoomScreen from './screens/JoinRoomScreen';
import ChatRoomScreen from './screens/ChatRoomScreen';



const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();


const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="JoinRoom" component={JoinRoomScreen}/>
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen}/>
    </Stack.Navigator>
  );
}

const App = function(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Root" component={Root}/>
        <Tab.Screen
          name="Join"
          component={JoinRoomScreen}
          options={{
            tabBarLabel:'Join Room',
            tabBarIcon:() => (
              <Icon name="check" size={25}/>
            )
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatRoomScreen}
          options={{
            tabBarIcon: () => (
              <Icon name="trash-o" size={30} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

export default App;
