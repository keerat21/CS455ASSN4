import React, { useState} from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {UseTextInputMultiline} from './useTextInput'
const Stack = createNativeStackNavigator();

export default function AddTodo({submitHandler}){
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style = {styles.input}
        placeholder='add notes'
        onChangeText={changeHandler}
        value = {text}
      />


      
      <Button color='coral' onPress = {()=>{if(text!='') submitHandler(text)}} title = 'add notes'/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    },
  });