import React from "react"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  PontosInteresseDetailScreen,
  PontosInteresseListScreen,
} from "app/screens"

export type PontosInteresseNavigatorParamList = {
  PontosInteresseList: undefined
  PontosInteresseDetail: { pontosInteresseId: number }
}

export type PontosInteresseNavigatorScreenProps<T extends keyof PontosInteresseNavigatorParamList> = NativeStackScreenProps<
  PontosInteresseNavigatorParamList,
  T
>

const Stack = createNativeStackNavigator<PontosInteresseNavigatorParamList>()
export const PontosInteresseNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
      <Stack.Screen name="PontosInteresseList" component={PontosInteresseListScreen} />
      <Stack.Screen name="PontosInteresseDetail" component={PontosInteresseDetailScreen} />
    </Stack.Navigator>
  )
}
