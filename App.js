import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput, Button, StyleSheet, Text, View, FlatList, } from 'react-native';
import TaskItem from './src/components/TaskItem'; 

export default function App() {
  const [text, setText] =useState("");

  const [taskList, setTaskList] = useState([]);

  function handleInputText(text) {
    setText(text);}

  function handleAddItem() {
    setTaskList([...taskList, text]);
    setText("");}

  return (
    <View style={styles.container}>

     <View style={styles.inputcontainer}>
        {" "}
       <TextInput onChangeText={handleInputText} style={styles.input} placeholder="Zadaj ulohu" />
       <Button onPress={handleAddItem} title="ADD" />
     </View>

    <FlatList
        data={taskList}
        renderItem={({item}) => <TaskItem title={item} />}
        keyExtractor={item => item}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {borderWidth: 3, width: "80%", borderRadius: 8,},
  inputcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
   paddingHorizontal: 10,
  },
  taskcontainer: {flex: 3,borderTopWidth: 3, margin: 20 },
  text: {padding: 20},
});