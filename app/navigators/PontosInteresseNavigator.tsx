import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  PontosInteresseListScreen,
  WelcomeScreen
} from "app/screens"

export type PontosInteresseNavigatorParamList = {
  PontosInteresseList: undefined
}

const Stack = createNativeStackNavigator<PontosInteresseNavigatorParamList>()
export const PontosInteresseNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false, }}>
      <Stack.Screen name="PontosInteresseList" component={PontosInteresseListScreen} />
    </Stack.Navigator>
  )
}
