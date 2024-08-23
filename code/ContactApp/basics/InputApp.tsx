import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import React, {useRef} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const InputApp = () => {
  const emailInputRef = useRef<React.LegacyRef<TextInput>>();
  const passwordInputRef = useRef<React.LegacyRef<TextInput>>();
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>InputApp</Text>

      <KeyboardAwareScrollView>
        <View style={{height: 400, backgroundColor: 'red', width: 200}}></View>

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

        <View style={{height: 400, backgroundColor: 'red', width: 200}}></View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default InputApp;
