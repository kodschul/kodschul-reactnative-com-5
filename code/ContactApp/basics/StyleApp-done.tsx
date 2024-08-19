import {View, Text} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 20,
        backgroundColor: 'green',
      }}>
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
    </View>
  );
};

const Footer = () => {
  return (
    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
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

const StyleApp = () => {
  return (
    <View style={{flex: 1}}>
      <Header />

      <View style={{flex: 1, backgroundColor: 'purple'}}>
        <Text> The middle</Text>
      </View>

      <Footer />
    </View>
  );
};

export default StyleApp;
