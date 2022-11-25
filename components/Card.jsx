import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import axios from "axios";

export default Card = () => {
  const [word, setWord] = useState("");
  const [res, setRes] = useState([]);
  const [btnText, setBtnText] = useState("Search");
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
    <ScrollView style={{ backgroundColor: "yellow" }}>
      <Text>Word Name</Text>
      <Text>Meaning</Text>
      <Text>Synonyms</Text>
      <Text>Usage</Text>
      <Text>Noun</Text>
      <Text>Card</Text>
      <Text>Cards</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
