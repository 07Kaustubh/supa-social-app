import React from "react"
import { Pressable, StyleSheet } from "react-native"

import Icon from "../assets/icons"
import { theme } from "../constants/theme"

const BackButton = ({ router, size = 26 }) => {
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
      <Icon
        color={theme.colors.text}
        name={"arrowLeft"}
        strokeWidth={2.5}
        size={size}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(0, 0, 0, 0.07)",
    borderRadius: theme.radius.sm,
    padding: 5
  }
})

export default BackButton
