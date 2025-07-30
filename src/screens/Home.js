import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from '../components/Header.js';
import {View, Button, StyleSheet} from "react-native";

function Home() {
  const navigation = useNavigation();

  const goToPosts = () => navigation.navigate("Posts");
  const goToTodos = () => navigation.navigate("Todos");
  const goToUsers = () => navigation.navigate("Users");

  return (
    <View>
      <Header />
      <View style={Styles}>
      <Button title="POSTS" onPress={goToPosts} />
      <Button title="TODOS" onPress={goToTodos} />
      <Button title="USERS" onPress={goToUsers} />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "80%",  // ou Dimensions.get('window').height * 0.8,
    },
    button: {
      marginHorizontal: 8,  // Simula o gap
    }
  });

export default Home;