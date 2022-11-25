import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NavigationBar from "react-native-navigation-bar";

const Nav = () => {
  return (
    <View>
      <NavigationBar
        title="Main title"
        height={50}
        leftButtonTitle="back"
        rightButtonTitle="forward"
      />
      <Text>ABC</Text>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({});
