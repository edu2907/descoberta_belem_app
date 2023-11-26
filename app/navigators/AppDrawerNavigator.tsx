import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { PontosInteresseListScreen, WelcomeScreen } from "app/screens"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import I18n from "i18n-js"
import { colors } from "app/theme"

export type AppDrawerNavigatorParamList = {
  PontosInteresseList: undefined
  Welcome: undefined
}

export type AppDrawerNavigatorScreenProps<T extends keyof AppDrawerNavigatorParamList> =
  NativeStackScreenProps<AppDrawerNavigatorParamList, T>

const AppDrawer = createDrawerNavigator<AppDrawerNavigatorParamList>()
export const AppDrawerNavigator = () => {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.palette.primary400 },
        headerTintColor: colors.invertedText,
      }}
    >
      <AppDrawer.Screen
        name="PontosInteresseList"
        options={{ title: I18n.t("mainScreen.title") }}
        component={PontosInteresseListScreen}
      />
      <AppDrawer.Screen name="Welcome" component={WelcomeScreen} />
    </AppDrawer.Navigator>
  )
}
