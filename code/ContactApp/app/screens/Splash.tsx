import {View, Text} from 'react-native-ui-lib';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const SplashScreen = () => {
  return (
    <View flex-1 centerV centerH bg-black>
      <Icon size={80} name="user" color={'white'} />
      <Text marginT-30 white text30BO>
        Contact App
      </Text>
    </View>
  );
};

export default SplashScreen;
