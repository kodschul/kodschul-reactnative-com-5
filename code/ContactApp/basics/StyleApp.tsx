import {View, Text} from 'react-native';
import React from 'react';

const StyleApp = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'red',
        }}>
        <Text>Top Left</Text>
      </View>

      <View
        style={{
          backgroundColor: 'blue',
        }}>
        <Text>Top Right</Text>
      </View>

      <View>
        <Text> The middle</Text>
      </View>

      <View
        style={{
          backgroundColor: 'green',
        }}>
        <Text>Bottom Left</Text>
      </View>

      <View
        style={{
          backgroundColor: 'orange',
        }}>
        <Text>Bottom Right</Text>
      </View>
    </View>
  );
};

export default StyleApp;
