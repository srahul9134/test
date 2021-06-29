import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import Profile from './screens/Profile';
import List from './screens/List';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen
          name="List"
          component={List}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
          />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;