import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailScreen(props) {
  return (
    <View>
      <Image style={styles.Image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacked for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh hamedani"
            subTitle="5 listings"
          />
        </View>
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
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailScreen;
