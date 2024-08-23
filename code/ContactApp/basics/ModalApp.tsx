import {View, Text, Button, Pressable} from 'react-native';
import React, {useState} from 'react';

import Modal from 'react-native-modal';

const ModalApp = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Text style={{fontFamily: 'Poppins-Bold', fontSize: 50}}>ModalApp</Text>

      <Button title="Open Modal" onPress={() => setModalVisible(true)} />

      <Modal
        isVisible={isModalVisible}
        swipeDirection={'down'}
        style={{
          //   flex: 1,
          margin: 0,
          justifyContent: 'flex-end',
          //   backgroundColorq: 'red',
        }}
        onSwipeComplete={() => setModalVisible(false)}
        // onBackButtonPress={() => setModalVisible(false)}
        // onDismiss={() => setModalVisible(false)}
        // onBackdropPress={() => setModalVisible(false)}
      >
        <View
          style={{
            backgroundColor: 'white',
            padding: 15,
            minHeight: 250,
            borderRadius: 10,
          }}>
          <Text>Are you sure you want to proceed?</Text>
          <View style={{flexDirection: 'row'}}>
            <Button title="Yes" onPress={() => setModalVisible(false)} />
            <Button title="No" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalApp;
