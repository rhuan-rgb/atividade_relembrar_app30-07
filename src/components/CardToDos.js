import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Checkbox from "expo-checkbox";
import api from "../services/api";


export default function CardToDos({ todos }) {
  const [isChecked, setChecked] = useState(todos.completed);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchUserName() {
      try {
        const response = await api.getUserNameById(todos.userId);
        setUserName(response.data.name);
      } catch (error) {
        console.log("Error fetching user name", error);
      }
    }

    fetchUserName();
  }, [todos.id]);  // Roda apenas quando o id mudar

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#D52D2D' : undefined}
          style={styles.checkbox}
        />
        <Text
          numberOfLines={2}
          style={[
            styles.title,
            isChecked && styles.strikeThrough,
          ]}
        >
          {todos.title}
        </Text>
      </View>
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
    width: Dimensions.get('window').width * 0.9,  // <-- 90% da tela (fixa largura)
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 12,
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,  // <-- Ocupa todo espaço restante depois do Checkbox
    flexShrink: 1,
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
