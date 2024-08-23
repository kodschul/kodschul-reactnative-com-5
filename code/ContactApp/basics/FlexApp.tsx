import {View, Text} from 'react-native';
import React from 'react';

const FlexApp = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-around',
        gap: 10,
        justifyContent: 'space-between',
      }}>
      <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'yellow'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'yellow'}} />
    </View>
  );
};

export default FlexApp;
