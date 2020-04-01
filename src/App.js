import React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import Icon from 'react-native-vector-icons/Feather';

import JoinRoomScreen from './screens/JoinRoomScreen';
import ChatRoomScreen from './screens/ChatRoomScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="JoinRoom" component={JoinRoomScreen} />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
    </Stack.Navigator>
  );
}


const App = function () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Join"
          component={Root}
          options={{
            tabBarLabel: 'Join Room',
            tabBarIcon: () => (
              <Icon name="send" size={30} color="#5face3"  />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

export default App;
