import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subtitle, image, style }) {
  return (
    <View style={[styles.card, style]}>
      <Image source={image} style={styles.image} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom:20,
    overflow: "hidden",
    elevation: 3, // Adds a shadow for Android
    shadowColor: colors.black, // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
  
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default Card;
