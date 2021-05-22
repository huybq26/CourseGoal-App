// Serve to handle the text input and the button
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState(''); // empty string

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal); // Dont need bind anymore since this line will be executed when the addGoalHandler is called
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={goalInputHandler} // Don't add () because it will execute when the code parsed for the first time. We want it to run after every keystroke
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='CANCEL' onPress={props.onCancel} color='red' />
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // make sure for this to take all the available space
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
