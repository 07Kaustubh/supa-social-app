import React from "react"
import { StyleSheet } from "react-native"
import { Image } from "expo-image"

import { theme } from "../constants"
import { hp } from "../helpers/common"
import { getUserImageSrc } from "../services/imageService"

const Avatar = ({ rounded = theme.radius.md, size = hp(4.5), style, uri }) => {
  return (
    <Image
      source={getUserImageSrc(uri)}
      style={[
        styles.avatar,
        { borderRadius: rounded, height: size, width: size },
        style
      ]}
    />
  )
}

const styles = StyleSheet.create({
  avatar: {
    borderColor: theme.colors.darkLight,
    borderCurve: "continuous",
    borderWidth: 1
  }
})

export default Avatar
