import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MyProvider } from './myContext';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <MyProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyProvider>
  );
};

export default App;