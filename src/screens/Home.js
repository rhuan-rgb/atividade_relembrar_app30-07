import React from "react";
import { useNavigation } from "@react-navigation/native";
import Header from '../components/Header.js';
import { View, Button, StyleSheet } from "react-native";

function Home() {
  const navigation = useNavigation();

  const goToPosts = () => navigation.navigate("Posts");
  const goToTodos = () => navigation.navigate("Todos");
  const goToUsers = () => navigation.navigate("Users");

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        <View style={styles.button}>
          <Button title="POSTS" onPress={goToPosts} />
        </View>
        <View style={styles.button}>
          <Button title="TODOS" onPress={goToTodos} />
        </View>
        <View style={styles.button}>
          <Button title="USERS" onPress={goToUsers} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 80,  // altura fixa para manter os botões centralizados verticalmente
    marginTop: 20,
  },
  button: {
    marginHorizontal: 10,
    flex: 1,
  },
});

export default Home;
