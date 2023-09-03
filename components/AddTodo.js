import React , {useState} from 'react'
import { StyleSheet, Text, Button, TextInput,View,  TouchableOpacity } from 'react-native';


export default function AddTodo({submtHandler}) {
    const [text, setText] = useState('');

    function changehandler(val){
        setText(val);
    }
    function submit () {
        submtHandler(text); 
        setText('');
    }

  return (
    <View>
      <TextInput
      style={styles.input}
      value={text}
      placeholder='new todo...'
      onChangeText={changehandler} />
      <Button onPress={submit} color='coral' title='add todo' />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    }
})
