import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [mynum, setMynum] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Ваше красивое число: {mynum}</Text>
      <View style={styles.buttons}>
        <Pressable style={styles.button} title='+' onPress={() => setMynum(mynum + 1)}><Text style={styles.text}>+</Text></Pressable>
        <Pressable style={styles.button} title='-' onPress={() => setMynum(mynum - 1)}><Text style={styles.text}>-</Text></Pressable>
        <Pressable style={styles.button} title='reset'onPress={() => setMynum(0)}><Text style={styles.text}>Reset</Text></Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons:{
    width: 300,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  titleText:{
    fontSize: 24,
    marginBottom: 30
  }
});
