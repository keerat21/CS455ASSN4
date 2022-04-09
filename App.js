import React, {useState} from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoItem from './todoItem';
import AddTodo from './addTodos';
import TList from './ListRender';

function HomeScreen({navigation,item}){
  

  return(
    <View style={{flex: 1, justifyContent: 'center' }}>
      <View>
    <TList style={{flex: 1}}/>
    </View>
    <View style={{flex: 1}}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={()=> navigation.navigate('Details')} />

      </View>
      </View>
  


  );
};

function DetailsScreen({navigation,item}){

  const[text, setText] = React.useState("");
  return(

    
    <View style={{ flex: 1, justifyContent: 'center'}}>
      <View>
    <TList style={{flex: 1}}/>
    </View>

    <Text>dd Screen</Text>

    <TextInput
    label ="input"
    value = {text}
    onChangeText = {text => setText(text)}
    />

    <Button 
      title="Go to Home"
      onPress={()=>navigation.navigate('Home')} />


    <Button 
      title="Go Back"
      onPress={()=>navigation.goBack()} />


<TouchableOpacity 
  style={{ borderWidth:1,
    borderColor:'powderblue',
    alignItems:'center',
    justifyContent:'center',
    width:100,

    backgroundColor:'powderblue',
    
    borderRadius:100,
  }}
  >
  <Button borderradius='50' style={{shadowColor: false, borderColor:'powderblue'}} title='HI' color="black"/>
</TouchableOpacity>
    <Button 
      title="Go back to first screen in stack"
      onPress={() => navigation.popToTop()}/>

<Button title="Press" style={{paddingBottom: 5}}/>
    </View>
  
  )
}

function MoreDetails({navigation}){
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>More Details</Text>
    
    <Button 
      title="Home"
      onPress={()=>navigation.navigate('Home')} />

    <Button 
      title="Back to Details"
      
      onPress={()=>navigation.navigate('Details')} />
      <Button title="Press" style={{paddingBottom: 5}}/>
      <Button title="Home"
      onPress={()=>inp}
      />
    </View>
  
  )
}  



const Stack = createNativeStackNavigator();

export default function App(){



  return (

    <NavigationContainer style={{marginBottom: 120}}> 
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name="Home" component ={HomeScreen} />
        <Stack.Screen name="MoreDetails" component={MoreDetails}/>
        
      </Stack.Navigator>

    </NavigationContainer>

        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});
