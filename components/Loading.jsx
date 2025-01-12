import React from "react"
import { ActivityIndicator, View } from "react-native"

import { theme } from "../constants/theme"

const Loading = ({ color = theme.colors.primary, size = "large" }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator color={color} size={size} />
    </View>
  )
}

export default Loading
