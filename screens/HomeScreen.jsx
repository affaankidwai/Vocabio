import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Button,
  FlatList,
} from "react-native";

import Saved from "./Saved";
import { SAMPLE_DATA } from "../assets/wordsapi_sample";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Card from "../components/Card";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.topText, { flexDirection: "column" }]}>
        <Text>
          "I would say something like a quote it will go a long way I guess"
        </Text>
        <Text style={{ color: `black`, fontSize: 18, marginTop: 30 }}>
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
          <TouchableOpacity style={styles.icon}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", textAlign: "center" }}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", textAlign: "center" }}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: "3%",
            marginTop: 80,
            height: "60%",
            bottom: 60,
          }}
        >
          <FlatList
            keyExtractor={(item) => item.word}
            data={SAMPLE_DATA}
            renderItem={({ item }) => (
              <Card
                word={item.word}
                definition={item.results[0].definition}
                partOfSpeech={item.results[0].partOfSpeech}
                synonyms={item.results[0].synonyms}
                typeOf={item.results[0].typeOf}
                hasCategories={item.results[0].hasCategories}
                hasTypes={item.results[0].hasTypes}

                // pronunciation={item.results[1].pronunciation}
              />
            )}
          />
        </View>
        <StatusBar style="auto" />
        <Button title="Saved" onPress={() => navigation.navigate("Saved")} />
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
    width: "90%",
    height: 45,
    borderRadius: 5,
    left: 16,
    // position: "absolute",
    // top: 90,
    // left: 10,
  },

  icon: {
    top: 10,
    right: 8,
  },

  button: {
    backgroundColor: "#212121",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: "black",
    height: 30,
    width: 80,
  },
  topText: {
    top: "2%",
  },
});
