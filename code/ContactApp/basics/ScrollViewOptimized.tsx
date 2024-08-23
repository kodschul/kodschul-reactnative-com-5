import {
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
  TextInput,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import StyledHeader from './StyledHeader';
import Icon from 'react-native-vector-icons/Entypo';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const ScrollViewOptimized = () => {
  const [fruits, setFruits] = useState(['apple', 'mango', 'lemon', 'orange']);

  const [inputText, setInputText] = useState('');

  useEffect(() => {
    let _newFruits = [...fruits];
    for (let i = 0; i < 4; i++) {
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

  const renderFruitA = (fruit: string, i) => (
    <Pressable
      onPress={() => removeItem(fruit)}
      style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}>
      <View
        style={{
          height: 300,
          width: deviceWidth,
          backgroundColor: i % 2 == 0 ? 'blue' : 'orange',
        }}>
        <Text>{fruit}</Text>
      </View>
    </Pressable>
  );

  const renderFruitB = (fruit: string, i) => (
    <Pressable
      onPress={() => removeItem(fruit)}
      style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}>
      <View
        style={{
          height: deviceHeight,
          width: deviceWidth,
          backgroundColor: i % 2 == 0 ? 'green' : 'red',
        }}>
        <Text>{fruit}</Text>
      </View>
    </Pressable>
  );

  return (
    <>
      {/* <StyledHeader title="List Items App" /> */}

      {/* <View>
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
      </View> */}

      {/* <FlatList
        data={fruits}
        renderItem={({item, index}) => renderFruit(item, index)}
        initialNumToRender={1}
        refreshing={false}
        onRefresh={() => console.warn('REFRESH')}
        keyExtractor={item => item.toString()}
        onEndReached={() => console.warn('END_REACHED')}
      /> */}

      <FlatList
        data={[]}
        // stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <ScrollView
            horizontal
            snapToInterval={deviceHeight}
            snapToAlignment={'end'}>
            {fruits.map(renderFruitA)}
          </ScrollView>
        }
        contentContainerStyle={{flex: 1}}
        ListEmptyComponent={
          <View style={{flex: 1, backgroundColor: 'red'}}>
            <Text>No Items</Text>
          </View>
        }
        ListFooterComponent={<ActivityIndicator />}
        renderItem={({item, index}) => renderFruitB(item, index)}
        initialNumToRender={1}
        refreshing={false}
        onRefresh={() => console.warn('REFRESH')}
        keyExtractor={item => item.toString()}
        onEndReached={() => console.warn('END_REACHED')}
      />

      {/* <ScrollView>
        <ScrollView
          horizontal
          snapToInterval={deviceHeight}
          snapToAlignment={'start'}>
          {fruits.map(renderFruitA)}
        </ScrollView>
        <ScrollView snapToInterval={deviceHeight} snapToAlignment={'start'}>
          {fruits.map(renderFruitB)}
        </ScrollView>
      </ScrollView> */}
    </>
  );
};

export default ScrollViewOptimized;
