import React from 'react'
import {StyleSheet, View, Animated,  Text, Pressable} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





export default function TodoItem({pressHandler, item, navigation }){

  const navigation2 = useNavigation();
  var ACTION_TIMER = 200;
  var COLORS = ["rgb(255,255,255)", "rgb(111,235,62)"];

  return (

            <Pressable onPress={() =>{navigation2.push('Details')}} onLongPress={() => {pressHandler(item.key)}}>
                <View style={styles.button}>
            <Animated.View style={styles.bgFill} />
            <Text style = {styles.item}>{item.text}</Text>
          </View>
            </Pressable>

        )

}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 3,
    borderColor: "#111",
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  }

});


