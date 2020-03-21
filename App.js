import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import { green, red } from "ansi-colors";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [Goals, setGoals] = useState([]);
  const [addMode, setaddMode] = useState(false);
  const [enteredGoal, setEnteredGoal] = useState("");

  const inputHandler = (text) => {
    setEnteredGoal(text);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setaddMode(false);
  };

  const deleteHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoal = () => {
    setaddMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title="add new goal" onPress={() => setaddMode(true)} />
      <GoalInput
        visible={addMode}
        addGoal={addGoalHandler}
        input={inputHandler}
        onCancel={cancelGoal}
        enteredGoal={enteredGoal}
        setEnteredGoal={setEnteredGoal}
      />

      <FlatList // better than ScrollList for potentially long lists.
        keyExtractor={(item, index) => item.id}
        data={Goals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            delete={deleteHandler}
            id={itemData.item.id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 50,
  },
});

// customElements
