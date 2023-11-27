import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "app/navigators"
import { SecureTextField, TextField } from "app/components"
import { AuthScreenLayout } from "app/screencomponents"
import I18n from "i18n-js"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
import { parseValidationError } from "app/utils/yupUtils"
import { ValidationError } from "yup"
import { loginSchema } from "./helpers/schemas"
import { Mock } from "app/services/mock"
// import { useStores } from "app/models"

const useLoginScreenViewController = () => {
  const navigation = useNavigation()
  const {
    authenticationStore: { setAndDistributeAuthToken, setAuthEmail },
    userStore: { setProp: setUserProp },
  } = useStores()

  const [userName, setUserName] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [error, setError] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(false)

  const login = async () => {
    const userCredentials = { userName, password }

    try {
      loginSchema.validateSync(userCredentials, { abortEarly: false })
      setError({})
      setLoading(true)

      const response = await Mock.postLogin({
        username: userCredentials.userName,
        password1: userCredentials.password,
      })

      setAndDistributeAuthToken(response.key)
      setAuthEmail("example@reactnative.com")
      setUserProp("userName", userCredentials.userName)
      
      goToMain()
    } catch (error) {
      setLoading(false)
      if (error instanceof ValidationError) {
        setError(parseValidationError(error))
      }
    }
  }

  const goToCadastro = () => {
    navigation.navigate("Cadastro")
  }

  const goToMain = () => {
    navigation.navigate("Drawer")

  }
  return {
    login,
    goToCadastro,
    loading,
    formErrors: error,
    formProps: { userName, password },
    formSetters: { setUserName, setPassword },
  }
}

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}
export const LoginScreen: FC<LoginScreenProps> = observer(function CadastroScreen() {
  const { login, goToCadastro, formProps, formSetters, formErrors, loading } =
    useLoginScreenViewController()
  return (
    <AuthScreenLayout
      onConfirm={login}
      onLinkPress={goToCadastro}
      buttonTx="auth.loginVerb"
      loading={loading}
      linkText={I18n.t("auth.registerOption")}
      form={
        <>
          <TextField
            placeholder="Nome"
            value={formProps.userName}
            onChangeText={formSetters.setUserName}
            status={formErrors.userName ? "error" : undefined}
            helper={formErrors.userName?.message}
          />
          <SecureTextField
            placeholder="Senha"
            value={formProps.password}
            onChangeText={formSetters.setPassword}
            status={formErrors.password ? "error" : undefined}
            helper={formErrors.password?.message}
          />
        </>
      }
    />
  )
})
