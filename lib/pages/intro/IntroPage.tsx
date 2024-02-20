import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const IntroPage = (): React.JSX.Element => {
  return (
    <View style={styles.parent}>
      <Image style={styles.logo} source={require('../../../images/react_native_logo.png')} />
      <Text style={styles.text}>Somba Na Tshombo</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continuer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles= StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  logo: {
    height: 150,
    width: 150
    // top: "40%",
    // left: "27%"
  },
  text: {},
  button: {
    borderRadius: 5,
    backgroundColor: "blue",
    padding: 10,
    width: "100%",
    marginTop: 40
  },
  buttonText:{
    color: "white",
    textAlign: "center"
  }
})

export default IntroPage;
