import {View, Text, ImageBackground, Image, TextInput} from 'react-native';
import React from 'react';

import BackgroundImage from '../assets/background.jpeg';

const ImageApp1 = () => {
  return (
    <ImageBackground
      source={BackgroundImage}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'white', fontSize: 20}}>ImageApp</Text>
    </ImageBackground>
  );
};

const ImageApp2 = () => {
  return (
    <View style={{flex: 1}}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1722755417793-6924c6b5ba93?q=80&w=3240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        style={{flex: 1}}
      />

      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.8)',
        }}>
        <Text
          style={{color: 'white', fontSize: 20}}
          numberOfLines={1}
          onPress={() => console.warn('ON_PRESS')}
          onLongPress={() => console.warn('LONG_PRESS')}>
          ImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageAppImageApp
        </Text>
      </View>
    </View>
  );
};

export default ImageApp2;
