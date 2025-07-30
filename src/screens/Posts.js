import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import CardPost from "../components/CardPost";
import api from "../services/api";


export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await api.getPosts();
        setPosts(response.data);  // Ajuste conforme a resposta real
      } catch (error) {
        console.log("error", error);
      }
    }
    getPosts();
  }, []);

  const renderItem = ({ item }) => <CardPost post={item} />;

  return (
    <View style={styles.container}>
      {/* Header Fixo */}
      <Header />

      {/* Lista Scrollável */}
      <FlatList
        data={posts}
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
    alignItems: 'center', // Centraliza os cards (como maxWidth no web)
  },
});
