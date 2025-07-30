import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CardUser({ user }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Nome: {user.name}</Text>
      <Text style={styles.info}>Email: {user.email}</Text>
      <Text style={styles.info}>zipcode: {user.address.zipcode}</Text>
      <Text style={styles.info}>empresa: {user.company.name}</Text>
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
  info: {
    fontSize: 16,
    marginBottom: 4,
  },
});
