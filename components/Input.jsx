import React, { forwardRef } from "react"
import { StyleSheet, TextInput, View } from "react-native"

import { theme } from "../constants/theme"
import { hp } from "../helpers/common"

const Input = forwardRef(({ containerStyle, icon, ...props }, ref) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {icon && icon}

      <TextInput
        placeholderTextColor={theme.colors.textLight}
        ref={ref}
        style={{ flex: 1, paddingHorizontal: 0 }}
        {...props}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: theme.colors.text,
    borderCurve: "continuous",
    borderRadius: theme.radius.xxl,
    borderWidth: 0.4,
    flexDirection: "row",
    gap: 12,
    height: hp(7.2),
    justifyContent: "center",
    paddingHorizontal: 18
  }
})

export default Input
