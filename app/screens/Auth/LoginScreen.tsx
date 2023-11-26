import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "app/navigators"
import { Screen, SecureTextField, Text, TextField } from "app/components"
import { AuthScreenLayout } from "app/screencomponents"
import I18n from "i18n-js"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const useLoginScreenViewController = () => {
  const navigation = useNavigation()
  // const {
  //   authenticationStore: { setAndDistributeAuthToken },
  // } = useStores()

  const login = async () => {
    // setAndDistributeAuthToken("token")
  }

  const goToCadastro = () => {
    navigation.navigate("Cadastro")
  }

  return { login, goToCadastro }
}

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}
export const LoginScreen: FC<LoginScreenProps> = observer(function CadastroScreen() {
  const { login, goToCadastro } = useLoginScreenViewController()

  return (
    <AuthScreenLayout
      onConfirm={login}
      onLinkPress={goToCadastro}
      buttonTx="auth.loginVerb"
      linkText={I18n.t("auth.registerOption")}
      form={
        <>
          <TextField placeholder="Nome" />
          <SecureTextField placeholder="Senha" />
        </>
      }
    />
  )
})
