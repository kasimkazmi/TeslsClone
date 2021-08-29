import React from "react";
import CarItem from "../CarItem";
import cars from "./cars";
import { Dimensions, FlatList, View } from "react-native";
import styles from "./styles";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        keyExtractor={(item)=>item.id}
       
      />
    </View>
  );
};

export default CarsList;
