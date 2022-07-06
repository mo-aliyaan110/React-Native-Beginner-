import { StyleSheet, View, Alert, Text,Dimensions, Platform, Button, StatusBar } from 'react-native';

export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <View style={styles.container}>
      
      <Button title="Click me" onPress={() => Alert.alert(
        "Do you really wana get in?",
        "If so click the buttons below", [{text: "Yes", onPress: () => {console.log("Yes")}}, {text: "No", onPress: console.log("No")}])}    />

      <Text> This is a demo of React-Native </Text> 

      <Button title="How'z That!!" color="black" onPress={() => Alert.prompt("Do you like this button", "Tell us your views", (text) => alert("You have entered this: " + text))}/>
      <Button title="Default Value of prompt" color="black" onPress={() => Alert.prompt("Do you like this button", "Tell us your views", (text) => {console.log(text)} )}/>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: Platform.OS === 'android'? StatusBar.currentHeight : 0
    
  },
});
