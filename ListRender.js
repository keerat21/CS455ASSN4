import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';



import TodoItem from './todoItem';
import AddTodo from './addTodos';
import { useNavigation } from '@react-navigation/native';




export default function TList(){
  const [todos, setTodos] = useState([
    { text: 'Task1', key: '1'},
    { text: 'Task2', key: '2'},
    { text: 'Task3', key: '3'}
  ]);  
  const navigation = useNavigation();
const pressHandler = (key) => {
  setTodos( prevTodos => {
    if (todos.length-1 == 0)
    navigation.goBack();
    return prevTodos.filter(filterTodo => filterTodo.key != key);
  });
};

const submitHandler = (text) =>{
  setTodos((prevTodos) => {
    return [
      {text: text, key: Math.random().toString()}, ...prevTodos];
    
  }
  )
}

return (
<View style = {styles.container}>

  <View style={styles.content}>
    <AddTodo submitHandler = {submitHandler}/>
    <View style = {styles.list}>
      <FlatList
        data ={todos}
        renderItem={({item})=>(
          <TodoItem item={item} pressHandler={pressHandler}/>    
        )}
      />
    </View>  
  </View>

</View>

);

}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#ff9',
  },

  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  },
});


