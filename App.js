import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,FlatList , View , Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo';

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'create some facebook ads', key: '1'},
    {text: 'create some facebook ads', key: '2'},
    {text: 'create some facebook ads', key: '3'},
  ])

  const presshandler = (key) => {
    setTodos(pre=> {
      return pre.filter(todo => todo.key != key)
    })
  }

  const submtHandler = (text) => {
    if(text.length > 3){
      setTodos(pre => {
        return [
          {text: text, key:Math.random.toString() },
          ...pre
        ]
      })  
    } else {
      Alert.alert('OOPS', 'todo must be more then 3 chars long', [
        {text: 'understood', onPress: ()=> console.log('alert closed')}
      ])
    }
   
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }} > 
    <View style={styles.container} >
      <Header />
      <View style={styles.content}>
      <AddTodo submtHandler={submtHandler} />
      <View style={styles.list}>
      <FlatList data={todos} renderItem={ ( {item} ) => (
        <TodoItem presshandler={presshandler} item={item} />
      )} />
      </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    marginTop: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1
  },
});
