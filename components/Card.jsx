import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { SAMPLE_DATA } from "../assets/wordsapi_sample";

export default Card = ({
  word,
  definition,
  partOfSpeech,
  synonyms,
  pronunciation,
  syllables,
  typeOf,
  hasTypes,
  hasCategories,
}) => {
  // const [word, setWord] = useState("");
  // const [res, setRes] = useState([]);
  // const [btnText, setBtnText] = useState("Search");
  /**
   *
   *
   * Fetch word usage using the API
   */
  // const fetchUsage = async e => {
  // 	e.preventDefault();
  // 	try {
  // 		setBtnText('Loading...');
  // 		const res = await axios.get(`/api/usage`, {
  // 			params: {
  // 				word
  // 			}
  // 		});
  // 		setRes(res.data.examples);
  // 	} catch (err) {
  // 		console.log(err);
  // 	}
  // 	setBtnText('Search');
  // };
  return (
    <ScrollView
      style={{
        backgroundColor: "#E2FFB2",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
      }}
    >
      {/* definition,
  partOfSpeech,
  synonyms,
  pronunciation,
  syllables,
  typeOf,
  hasTypes,
  hasCategories, */}
      <View>
        <Text style={styles.bigTitle}>{word.toUpperCase()}</Text>
      </View>
      <View style={styles.contain}>
        <Text style={styles.heading}>Definition:</Text>

        <Text style={styles.content}>{definition}</Text>
      </View>
      <View style={styles.contain}>
        <Text style={styles.heading}>Figure of Speech:</Text>
        <Text style={styles.content}>{partOfSpeech}</Text>
      </View>
      <View style={styles.contain}>
        <Text style={styles.heading}>Synonyms:</Text>
        <Text style={styles.content}>{synonyms}</Text>
      </View>
      <View style={styles.contain}>
        <Text style={styles.heading}></Text>
        <Text style={styles.content}>{pronunciation}</Text>
      </View>
      <View style={styles.contain}>
        <Text style={styles.heading}></Text>
        <Text style={styles.content}>{typeOf}</Text>
      </View>
      <View style={styles.contain}>
        <Text style={styles.heading}></Text>
        <Text style={styles.content}>{hasTypes}</Text>
      </View>

      <View style={styles.contain}>
        <Text style={styles.heading}></Text>
        <Text style={styles.content}>{hasCategories}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bigTitle: {
    fontSize: 20,
    margin: 5,
  },
  contain: {
    marginTop: 10,
  },
  content: {
    fontSize: 14,
    marginHorizontal: 5,
  },
  heading: {
    marginHorizontal: 5,
    fontWeight: "bold",
  },
});
