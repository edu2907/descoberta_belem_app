import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { AutoImage, Button, Link, Screen, SecureTextField, TextField } from "app/components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
import { colors, spacing } from "app/theme"
import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"

const logoImage = require("app/../assets/images/logo.png")

interface CadastroScreenProps extends AppStackScreenProps<"Cadastro"> {}
const useCadastroScreenViewController = () => {
  const navigation = useNavigation()
  const {
    authenticationStore: { setAndDistributeAuthToken },
  } = useStores()

  const register = async () => {
    setAndDistributeAuthToken("token")
  }

  const goToLogin = () => {
    navigation.navigate("Login")
  }

  return { register, goToLogin }
}

export const CadastroScreen: FC<CadastroScreenProps> = observer(function CadastroScreen() {
  const { register, goToLogin } = useCadastroScreenViewController()

  return (
    <Screen
      style={$root}
      preset="scroll"
      safeAreaEdges={["top", "bottom"]}
      backgroundColor={colors.tint}
    >
      <AutoImage source={logoImage} style={$logoImage} resizeMode="contain" />
      <View style={$formContainer}>
        <View style={$formInputsContainer}>
          <TextField placeholder="Nome" />
          <TextField placeholder="Email" />
          <SecureTextField placeholder="Senha" />
          <SecureTextField placeholder="Confirmar Senha" />
        </View>
        <Button preset="filled" tx="auth.registerVerb" onPress={register} />
      </View>
      <View style={$footerContainer}>
        <Link text={I18n.t("auth.loginOption")} onPress={goToLogin} />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.lg,
}

const $logoImage: ImageStyle = {
  width: 200,
  height: 200,
  alignSelf: "center",
  marginBottom: spacing.xxxl,
}

const $formContainer: ViewStyle = {
  flex: 1,
  gap: spacing.lg,
}

const $formInputsContainer: ViewStyle = {
  flex: 1,
  gap: spacing.lg,
}

const $footerContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: spacing.lg,
}