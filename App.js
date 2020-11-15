import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Todo from "./Todo";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([input, ...todos]);
    setInput("");
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.firstLabel}>Hello World!</Text>
        <Text>Open up App.js to start working on your apps!</Text>
        <StatusBar style="auto" />
        {todos.map((todo) => (
          <Todo title={todo} />
        ))}
      </View>

      <TextInput
        style={styles.todoInput}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Button onPress={addTodo} title="ADD TODO" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  firstLabel: {
    fontSize: 30,
    fontWeight: "bold",
  },
  todoInput: {
    margin: 20,
    height: 40,
    borderColor: "red",
    borderWidth: 1,
  },
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
  },
});
