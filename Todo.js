import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Todo = ({ title = "Take the dogs out" }) => {
  return (
    <View>
      <Text style={styles.textTitle}>{title}</Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: "bold",
  },
});
