import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';



import TodoItem from './todoItem';
import AddTodo from './addTodos';

export default function TList(){
  
const [todos, setTodos] = useState([
  { text: 'Buy egg', key: '1'},
  { text: 'Peel egg', key: '2'},
  { text: 'Eat egg', key: '3'},
  { text: 'Take Gas-X', key: '4'},
  { text: 'Finish CS 455/855 assignments', key: '5'}
]);  

const pressHandler = (key) => {
  setTodos( prevTodos => {
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
    
    backgroundColor: '#fff',
  },

  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  },
});


