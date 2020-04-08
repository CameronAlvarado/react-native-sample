import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { green, red } from 'ansi-colors';

export default function App() {

  const [outputText, setOutputText] = useState("");

  const [count, setCount] = useState(0);

  const countPlusOne = () => {
    return setCount(count + 1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.bigText}>{count}</Text>
        <Button title="Add One" onPress={() => countPlusOne()} />
      </View>
      <View style={styles.box}>
        <Text style={styles.medText}>{outputText}</Text>
        <Button title="Click to reveal name" onPress={() => setOutputText(`Jeffery`)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // color: 'black',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box: {
    flex: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius:10,
    borderTopRightRadius:10,
    borderTopLeftRadius: 30,
    borderColor: 'grey',
    padding: 15
  },
  bigText: {
    color: 'black',
    fontSize: 60
  },
  medText: {
    color: 'black',
    fontSize: 30
  }
});
