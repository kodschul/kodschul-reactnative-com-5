import {View, Text, Image} from 'react-native';
import React from 'react';

import StyledHeader from './StyledHeader';

import BackgroundImage from '../assets/background.jpeg';

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
      <StyledHeader title={'Styled App'} />
      <StyledHeader title={'Home Page'} />
      <StyledHeader />

      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{backgroundColor: 'orange', flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: 'black'}} />
          <View style={{flex: 1, backgroundColor: 'silver'}} />
          <View style={{flex: 1, backgroundColor: 'silver'}} />
        </View>

        <View style={{flex: 1, backgroundColor: 'green'}} />
        {/* <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1724010930544-59b11726a226?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            width: 400,
            height: 400,
          }}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'cover',
            backgroundColor: 'red',
            borderRadius: 100,
          }}
        />
        <Image
          source={BackgroundImage}
          style={{
            width: null,
            height: 400,
            marginTop: 20,
            resizeMode: 'cover',
            backgroundColor: 'red',
          }}
        />
        <Text> The middle</Text> */}
      </View>

      <Footer />
    </View>
  );
};

export default StyleApp;
