import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import React, {useState} from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.main}>
      <Text>CounterApp</Text>
      <Pressable
        style={({pressed}) => ({backgroundColor: pressed ? 'red' : 'white'})}
        onPress={() => setCount(count + 1)}>
        <Text>+</Text>
      </Pressable>
      {/* <Button title="+" onPress={() => setCount(count + 1)} /> */}
      <Text>{count}</Text>
      {/* <Button title="-" onPress={() => setCount(count - 1)} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default CounterApp;
