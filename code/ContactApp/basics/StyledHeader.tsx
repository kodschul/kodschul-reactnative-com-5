import {View, Text} from 'react-native';
import React from 'react';

type HeaderProps = {
  title?: string;
};

const StyledHeader = ({title = 'Hi'}: HeaderProps) => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        // justifyContent: 'center',
        flexDirection: 'row',
        // paddingTop: 20,
        backgroundColor: 'silver',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}>
      <View
        style={
          {
            // backgroundColor: 'red',
          }
        }>
        <Text>Top Left</Text>
      </View>

      <Text style={{fontWeight: 'bold'}}>{title}</Text>

      <View
        style={
          {
            // backgroundColor: 'blue',
          }
        }>
        <Text>Top Right</Text>
      </View>
    </View>
  );
};

export default StyledHeader;
