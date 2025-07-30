import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import CardUser from "../components/CardUser";
import api from "../services/api";  // Mantém o axios, presume que está ok.

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await api.getUsers();
        setUsers(response.data);  // <-- Ajuste conforme a API real
      } catch (error) {
        console.log("error", error);
      }
    }
    getUsers();
  }, []);

  const renderItem = ({ item }) => <CardUser user={item} />;

  return (
    <View style={styles.container}>
      {/* Header Fixo */}
      <Header />

      {/* Conteúdo Scrollável */}
      <FlatList
        data={users}
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
    alignItems: 'center',
  },
});
