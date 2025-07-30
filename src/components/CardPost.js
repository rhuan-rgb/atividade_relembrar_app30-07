import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import api from "../services/api";

export default function CardPost({ post }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchUserName() {
      try {
        const response = await api.getUserNameById(post.userId);
        setUserName(response.data.name);
      } catch (error) {
        console.log("Error fetching user name", error);
      }
    }

    fetchUserName();
  }, [post.id]);  // Roda apenas quando o id mudar

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Título: {post.title}</Text>
      <Text style={styles.body}>Corpo: {post.body}</Text>
      <Text style={styles.body}>Usuário: {userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
  },
});
