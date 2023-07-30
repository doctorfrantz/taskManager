import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [text, onChangeText] = React.useState("Input Text");
  const addATask = () => {
    console.log("Adding Task");
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>Tasks Created</Text>
        <Text>Aqui apareixeran les tasks</Text>
      </View>
      <View>
        <Text>Enter task</Text>
        <TextInput
          onChangeText={onChangeText}
          style={{ backgroundColor: "lightblue", height: 50 }}
        />
      </View>
      <View>
        <Pressable
          onPress={addATask}
          style={{
            backgroundColor: "orange",
            borderRadius: 30,
            height: 40,
            width: 40,
            justifyContent: "center",
          }}>
          <Text style={{ textAlign: "center", fontSize: 25, color: "white" }}>
            +
          </Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
