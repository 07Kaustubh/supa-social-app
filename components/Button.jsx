import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

import Loading from "./Loading"
import { theme } from "../constants/theme"
import { hp } from "../helpers/common"

const Button = ({
  buttonStyle,
  loading = false,
  hasShadow = true,
  onPress = () => {},
  title = "",
  titleStyle
}) => {
  const shadowStyle = {
    elevation: 4,
    shadowColor: theme.colors.dark,
    shadowOffset: { height: 10, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 9
  }

  if (loading) {
    return (
      <View style={[styles.button, buttonStyle, { backgroundColor: "white " }]}>
        <Loading />
      </View>
    )
  }

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
    >
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderCurve: "continuous",
    borderRadius: theme.radius.xl,
    height: hp(6.6),
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: hp(2.5),
    fontWeight: theme.fonts.bold
  }
})

export default Button
