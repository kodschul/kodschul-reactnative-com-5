import {View, Text} from 'react-native';
import React from 'react';

import SplashScreen from './screens/Splash';
import LoginScreen from './screens/Login';
import ContactDetailsScreen from './screens/ContactDetails';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Splash>">
        <AppStack.Screen name="Splash" component={SplashScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
        <AppStack.Screen
          name="ContactDetails"
          component={ContactDetailsScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
