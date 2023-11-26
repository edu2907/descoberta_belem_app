import React from 'react'
import { Pressable, ViewStyle, } from 'react-native'
import { Text, TextProps } from './Text'

export type LinkProps = {
  text: string
  onPress?: () => void
  style?: ViewStyle
  preset?: TextProps['preset']
}

export function Link({text, onPress, style, preset = 'inverted' }: LinkProps) {
  return (
    <Pressable onPress={onPress} style={style}>
      <Text preset={preset} style={{ textDecorationLine: 'underline' }} >{text}</Text>
    </Pressable>
  )
}

