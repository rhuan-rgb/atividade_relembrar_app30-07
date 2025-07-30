import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { LeftArrowIcon} from "./topIcons";

export default function Header({
  children,
}) {
  return (
    <View>
      {/* Cabeçalho */}
      <View style={styles.header_red} />
      <View style={styles.header_grey}>
      </View>
      <View style={styles.header_minired} />
      {/* Ícones */}
      <View style={styles.icon}>
        <LeftArrowIcon />
      </View>

      {/* Conteúdo centralizado */}
      <View style={styles.container}>{children}</View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    paddingHorizontal: 20, 
  },
  header_grey: {
    backgroundColor: "#D9D9D9",
    width: "100%",
    height: 80,
    paddingLeft: 20,
    justifyContent: "center",
  },
  header_red: {
    backgroundColor: "#D52D2D",
    width: "100%",
    height: 40,
  },
  header_minired: {
    backgroundColor: "#D52D2D",
    width: "100%",
    height: 1,
  },
  icon: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 50,
    width: "100%",

  },
});