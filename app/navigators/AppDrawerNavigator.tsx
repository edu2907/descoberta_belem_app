import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PontosInteresseNavigator } from "./PontosInteresseNavigator";
import { WelcomeScreen } from "app/screens";

export type AppDrawerNavigatorParamList = {
  PontosInteresseNavigator: undefined,
  Welcome: undefined
}

const AppDrawer = createDrawerNavigator<AppDrawerNavigatorParamList>()
export const AppDrawerNavigator = () => {
  return (
    <AppDrawer.Navigator screenOptions={{ headerShown: false, }}>
      <AppDrawer.Screen name="PontosInteresseNavigator" component={PontosInteresseNavigator} />
      <AppDrawer.Screen name="Welcome" component={WelcomeScreen} />
    </AppDrawer.Navigator>
  )
}
