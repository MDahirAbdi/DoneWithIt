import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";


function WelcomeScreen(props) {
  return (
    <ImageBackground
    blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={{fontSize: 25, fontWeight: '600', paddingVertical: 20}}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.ButtonsContainer}>
      <AppButton title="Login" color="primary"/>
      <AppButton title="Register" color="secondary"/>
      </View>
     
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: '100%',
  
  },
  ButtonsContainer: {
    width: "100%",
    padding: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
export default WelcomeScreen;
