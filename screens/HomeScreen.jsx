import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.topText, { flexDirection: "column" }]}>
        <Text style={{ color: `black`, fontSize: 18 }}>
          What are you looking for? 👀
        </Text>
      </View>
      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 50,
            marginLeft: 5,
          }}
        >
          {/* <Text>Welcome to your wordbuddy!</Text> */}
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Type the word"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white" }}>O</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white" }}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 40, marginHorizontal: 10, borderRadius: 50 }}>
          <Card />
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textArea: {
    borderWidth: 1,
    borderColor: "black",
    width: "62%",
    height: 40,
    borderRadius: 5,
    // position: "absolute",
    // top: 90,
    // left: 10,
  },

  button: {
    backgroundColor: "#3D3D3D",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: "black",
  },
  topText: {
    top: "2%",
  },
});
