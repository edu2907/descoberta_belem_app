import React from "react"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  CadastroScreen,
  WelcomeScreen
} from "app/screens"

export type AuthNavigatorParamList = {
  Cadastro: undefined
  Login: undefined
}

export type AuthNavigatorScreenProps<T extends keyof AuthNavigatorParamList> =
  NativeStackScreenProps<AuthNavigatorParamList, T>

const Stack = createNativeStackNavigator<AuthNavigatorParamList>()
export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Login" component={WelcomeScreen} />
    </Stack.Navigator>
  )
}
