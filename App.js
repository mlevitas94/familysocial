import 'react-native-gesture-handler';
import React from 'react';
import { Login } from './components/main/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from './components/logged/Dashboard';
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen
          name='Login'
          component={Login}
          options={{title: 'Family Social'}}
        />
        <Stack.Screen
          name='Dashboard'
          component={Dashboard}
          options={{title: 'Family Social'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

