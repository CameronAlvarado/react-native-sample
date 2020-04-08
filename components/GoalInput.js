import React from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';


const GoalInput = (props) => {

const addGoalHandler = () => {
  props.addGoal(props.enteredGoal)
  props.setEnteredGoal('');
}

    return(
        <Modal visible={props.visible} animationType="slide">   
        <View style={styles.box}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input} 
          onChangeText={props.input}
          value={props.entered}
        />
        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      </Modal>
    )
};

styles = StyleSheet.create({
    box: {
        flex: 2,
        marginBottom: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
      input: {
        borderColor: 'dodgerblue', 
        borderWidth: 1, 
        padding: 10, 
        width: '80%', 
        backgroundColor: 'white'
      }
})

export default GoalInput;