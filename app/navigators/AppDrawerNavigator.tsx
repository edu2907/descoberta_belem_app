import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PontosInteresseListScreen, WelcomeScreen } from "app/screens";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AppDrawerNavigatorParamList = {
  PontosInteresseList: undefined,
  Welcome: undefined
}

export type AppDrawerNavigatorScreenProps<T extends keyof AppDrawerNavigatorParamList> = NativeStackScreenProps<
  AppDrawerNavigatorParamList,
  T
>

const AppDrawer = createDrawerNavigator<AppDrawerNavigatorParamList>()
export const AppDrawerNavigator = () => {
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name="PontosInteresseList" component={PontosInteresseListScreen} />
      <AppDrawer.Screen name="Welcome" component={WelcomeScreen} />
    </AppDrawer.Navigator>
  )
}
