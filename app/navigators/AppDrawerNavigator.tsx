import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { PontosInteresseListScreen, WelcomeScreen } from "app/screens"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { colors, spacing } from "app/theme"
import { ImageStyle } from "react-native"
import { AutoImage, Icon } from "app/components"
import I18n from "i18n-js"

export type AppDrawerNavigatorParamList = {
  PontosInteresseList: undefined
  Welcome: undefined
}

export type AppDrawerNavigatorScreenProps<T extends keyof AppDrawerNavigatorParamList> =
  NativeStackScreenProps<AppDrawerNavigatorParamList, T>

const LogoImage = require("app/../assets/images/logo.png")

const AppDrawer = createDrawerNavigator<AppDrawerNavigatorParamList>()
export const AppDrawerNavigator = () => {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.tint },
        headerTintColor: colors.invertedText,
      }}
    >
      <AppDrawer.Screen
        name="PontosInteresseList"
        options={{
          title: I18n.t("mainScreen.title"),
          headerTitleStyle: { flex: 1 },
          headerTitle: () => (
            <AutoImage style={$imageSize} source={LogoImage} resizeMode="contain" />
          ),
          headerRight: (props) => (
            <Icon icon="view" style={$rightIconContainer} color={props.tintColor} />
          ),
        }}
        component={PontosInteresseListScreen}
      />
      <AppDrawer.Screen name="Welcome" component={WelcomeScreen} />
    </AppDrawer.Navigator>
  )
}

const $imageSize: ImageStyle = {
  width: 270,
  height: '80%',
}

const $rightIconContainer: ImageStyle = {
  marginRight: spacing.sm,
}
