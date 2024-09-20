import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Colors from "../config/colors";
import ListItem from "../components/ListItem"

function ListingDetailScreen(props) {
  return (
    <View>
      <Image style={styles.Image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacked for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <ListItem
        image={require("../assets/Palestine.png")}
        title= "Palestine"
        subTitle="Free Palestine"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  Image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: Colors.secondary,
    fontWeight: "700",
    fontSize: 20,
    marginVertical: 10,
  },
});
export default ListingDetailScreen;
