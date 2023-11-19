import React from "react"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  PontosInteresseListScreen,
} from "app/screens"

export type PontosInteresseNavigatorParamList = {
  PontosInteresseList: { a: string }
}

export type PontosInteresseNavigatorScreenProps<T extends keyof PontosInteresseNavigatorParamList> = NativeStackScreenProps<
  PontosInteresseNavigatorParamList,
  T
>

const Stack = createNativeStackNavigator<PontosInteresseNavigatorParamList>()
export const PontosInteresseNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false, }}>
      <Stack.Screen name="PontosInteresseList" component={PontosInteresseListScreen} />
    </Stack.Navigator>
  )
}
