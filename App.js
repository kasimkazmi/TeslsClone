import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View} from "react-native";
import CarsList from "./Component/CarsList";
import Header from "./Component/Header"

export default function App() {
  return (
    <View style={styles.container}>
    
   
     <Header/>
      <CarsList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  // buttonContainer: {
  //   position: "absolute",
  //   bottom: 20,
  //   width: "100%",
  
});
