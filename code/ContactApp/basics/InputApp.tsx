import {View, Text, TextInput} from 'react-native';
import React, {useRef} from 'react';

const InputApp = () => {
  const emailInputRef = useRef<React.LegacyRef<TextInput>>();
  const passwordInputRef = useRef<React.LegacyRef<TextInput>>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>InputApp</Text>

      <TextInput
        ref={emailInputRef}
        style={{
          backgroundColor: 'silver',
          borderWidth: 1,
          padding: 10,
          width: '80%',
        }}
        returnKeyType="next"
        placeholder="Enter E-Mail"
        keyboardType="email-address"
        onSubmitEditing={() =>
          // @ts-ignore
          passwordInputRef.current?.focus?.()
        }
      />

      <TextInput
        ref={passwordInputRef}
        style={{
          backgroundColor: 'silver',
          borderWidth: 1,
          padding: 10,
          width: '80%',
        }}
        placeholder="Enter Password"
        secureTextEntry
        returnKeyType="done"
      />
    </View>
  );
};

export default InputApp;
