import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import CardToDos from "../components/CardToDos";
import api from "../services/api";


export default function ToDos() {
  const [toDos, setToDos] = useState([]);
  

  useEffect(() => {
    async function getToDos() {
      try {
        const response = await api.getToDos();
        setToDos(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    getToDos();
  }, []);

  const renderItem = ({ item }) => <CardToDos todos={item} />;

  return (
    <View style={styles.container}>
      {/* Header Fixo */}
      <Header />

      {/* Lista Scrollável */}
      <FlatList
        data={toDos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
    alignItems: 'center',  // Simula maxWidth + centralização
  },
});
