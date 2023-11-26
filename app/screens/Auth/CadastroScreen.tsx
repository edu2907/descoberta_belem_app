import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "app/navigators"
import { SecureTextField, TextField } from "app/components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import { AuthScreenLayout } from "app/screencomponents"


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

interface CadastroScreenProps extends AppStackScreenProps<"Cadastro"> {}
export const CadastroScreen: FC<CadastroScreenProps> = observer(function CadastroScreen() {
  const { register, goToLogin } = useCadastroScreenViewController()

  return (
    <AuthScreenLayout
      onConfirm={register}
      onLinkPress={goToLogin}
      buttonTx="auth.registerVerb"
      linkText={I18n.t("auth.loginOption")}
      form={
        <>
          <TextField placeholder="Nome" />
          <TextField placeholder="Email" />
          <SecureTextField placeholder="Senha" />
          <SecureTextField placeholder="Confirmar Senha" />
        </>
      }
    />
  )

})