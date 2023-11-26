import React from "react"
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { colors, spacing } from "app/theme"
import { View, ViewStyle } from "react-native"
import { Link, Text } from "app/components"
import I18n from "i18n-js"
import { useNavigation } from "@react-navigation/native"

const Header = () => {
  const navigation = useNavigation()

  const goToRegister = () => navigation.navigate("Cadastro")
  const goToLogin = () => navigation.navigate("Login")

  return (
    <View style={$header}>
      <Link preset="subheadingInverted" text={I18n.t('auth.registerVerb')} onPress={goToRegister} />
      <Text preset="inverted" tx="common.or" />
      <Link preset="subheadingInverted" text={I18n.t('auth.loginVerb')} onPress={goToLogin} />
    </View>
  )
}

export function AppDrawerNavigatorContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={$root}>
      <Header />
      <View style={$body}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  )
}

const $root: ViewStyle = {
  backgroundColor: colors.tint,
  flex: 1
}

const $header: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.xxl,
  gap: spacing.xs,
  alignItems: 'center',
}

const $body: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

