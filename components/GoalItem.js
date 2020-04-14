import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.delete.bind(this, props.id)}
    >
      <View style={styles.list}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    borderWidth: 1,
    borderColor: "dodgerblue",
    padding: 10,
    marginVertical: 10,
    // fontSize: 20  <---- why doesnt this work for childeren???
  },
  text: {
    color: "white",
  },

  // commenting
});

export default GoalItem;
