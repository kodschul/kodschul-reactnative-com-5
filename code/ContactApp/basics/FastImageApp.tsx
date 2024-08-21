import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import FastImage from 'react-native-fast-image';

const FastImageApp = () => {
  useEffect(() => {
    FastImage.clearDiskCache();
    FastImage.clearMemoryCache();
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>FastImageApp</Text>

      <FastImage
        source={{
          uri: 'https://images.unsplash.com/photo-1722755417793-6924c6b5ba93?q=80&w=3240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D#4543535',
          priority: 'low',
        }}
        style={{width: 400, height: 400}}
      />
      <FastImage
        source={{
          uri: 'https://images.unsplash.com/photo-1722755417793-6924c6b5ba93?q=80&w=3240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D#122222',
          priority: 'low',
        }}
        style={{width: 400, height: 400}}
      />
      <FastImage
        source={{
          uri: 'https://images.unsplash.com/photo-1722755417793-6924c6b5ba93?q=80&w=3240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          priority: 'high',
        }}
        style={{width: 400, height: 400}}
      />
    </View>
  );
};

export default FastImageApp;
