import React from 'react'
import {StyleSheet,  Text, Pressable} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
export default function TodoItem({pressHandler, item }){

  const navigation = useNavigation();
  return (
    <Pressable onPress={() => {navigation.push('Details')}} onLongPress={() => {pressHandler(item.key)}}>
      <Text style = {styles.item}>{item.text}</Text>
    </Pressable>

  )

}

const styles = StyleSheet.create({

  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  }

});


