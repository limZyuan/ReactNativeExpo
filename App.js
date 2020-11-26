import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Op GG</Text>
      <Text>Whooper</Text>
      <Text>Sick lad</Text>
      <Button title="Get WHOOPED" />
      <TouchableOpacity style={styles.button}>
        <Text>Get Whooped 2</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "red",
    padding: 20,
  },
});
