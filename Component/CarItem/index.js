import React from "react";
import styles from "../../CarItem/styles";
import StyledButton from "../../StyleButton";
import { View, Text, ImageBackground } from "react-native";

const CartItem = ({ car }) => {
  const { name, tagline, taglineCTA, image } = car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image}></ImageBackground>
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline}
          <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn(data, "Custom Order Was Pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn(data, "Existing Inventory was Pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
