import React , {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>my todos</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})
