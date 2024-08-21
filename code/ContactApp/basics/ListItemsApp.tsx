import {
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import StyledHeader from './StyledHeader';
import Icon from 'react-native-vector-icons/Entypo';

const ListItemsApp = () => {
  const [fruits, setFruits] = useState(['apple', 'mango', 'lemon', 'orange']);

  const [inputText, setInputText] = useState('');

  useEffect(() => {
    let _newFruits = [];
    for (let i = 0; i < 1; i++) {
      _newFruits.push('apple' + i);
    }
    setFruits(_newFruits);
  }, []);

  const removeItem = (value: string) =>
    setFruits(fruits.filter(x => x !== value));

  const addItem = () => {
    setFruits([...fruits, inputText]);
    setInputText('');
  };

  const renderFruit = (fruit: string, i) => (
    <Pressable
      onPress={() => removeItem(fruit)}
      style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}>
      <View
        style={{height: 400, backgroundColor: i % 2 == 0 ? 'green' : 'red'}}>
        <Text>{fruit}</Text>
      </View>
    </Pressable>
  );

  return (
    <View>
      <StyledHeader title="List Items App" />

      <View>
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          style={{fontSize: 16, padding: 10}}
        />

        <Icon name="video-camera" />
        <Text
          onPress={() => addItem()}
          style={{padding: 10, borderWidth: 1, backgroundColor: 'silver'}}>
          Add
        </Text>
      </View>

      <FlatList
        data={fruits}
        renderItem={({item, index}) => renderFruit(item, index)}
        initialNumToRender={1}
        refreshing={false}
        onRefresh={() => console.warn('REFRESH')}
        keyExtractor={item => item.toString()}
        onEndReached={() => console.warn('END_REACHED')}
      />

      {/* <ScrollView>{fruits.map(renderFruit)}</ScrollView> */}
    </View>
  );
};

export default ListItemsApp;
