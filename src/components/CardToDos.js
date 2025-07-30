import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Checkbox from "expo-checkbox";

export default function CardToDos({ todos }) {
  const [isChecked, setChecked] = useState(todos.completed);

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
