import React, { useRef, useState } from "react"
import { Pressable, TextStyle, View, ViewStyle, Animated, LayoutAnimation } from "react-native"
import { Text } from "./Text"
import { TxKeyPath } from "app/i18n"
import { Icon, IconTypes } from "./Icon"
import { colors, spacing } from "app/theme"
import { toggleAnimation } from "app/animation"

interface DropdownProps {
  title: TxKeyPath
  dropContent: string
  headerIcon?: IconTypes
}

export function Dropdown({ title, dropContent = "", headerIcon = "pin" }: DropdownProps) {
  const [showContent, setShowContent] = useState(false)
  const animationController = useRef(new Animated.Value(0)).current
  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    }
    Animated.timing(animationController, config).start()
    LayoutAnimation.configureNext(toggleAnimation)
    setShowContent(!showContent)
  }

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["270deg", "90deg"],
  })

  return (
    <Pressable onPress={toggleListItem}>
      <View style={$root}>
        <View style={$headContainer}>
          <Text style={$dropdownText} tx={title}></Text>
          <Icon icon={headerIcon} color={colors.palette.neutral100} />
        </View>
        {showContent && (
          <View>
            <Text style={$dropdownText} text={dropContent} />
          </View>
        )}
        <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
          <Icon color={colors.palette.neutral100} icon="caretLeft" />
        </Animated.View>
      </View>
    </Pressable>
  )
}

const $root: ViewStyle = {
  width: "100%",
  padding: spacing.md,
  paddingBottom: spacing.xs,
  alignItems: "center",
  backgroundColor: colors.palette.primary600,
}

const $headContainer: ViewStyle = {
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
}

const $dropdownText: TextStyle = {
  color: colors.palette.neutral100,
}
