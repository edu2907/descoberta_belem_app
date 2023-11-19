import { Text } from 'app/components'
import React from 'react'
import { View, ViewStyle } from 'react-native'

export default function PontosInteresseHeader() {
  return (
    <View style={$textContainer}>
      <Text tx="mainScreen.head" preset="subheading"></Text>
    </View>
  )
}

const $textContainer: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
}
