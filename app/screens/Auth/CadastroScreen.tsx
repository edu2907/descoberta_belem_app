import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "app/navigators"
import { SecureTextField, TextField } from "app/components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import { AuthScreenLayout } from "app/screencomponents"
import { cadastroSchema } from "./helpers/schemas"
import { ValidationError } from "yup"
import { parseValidationError } from "app/utils/yupUtils"
import { Mock } from "app/services/mock"

const useCadastroScreenViewController = () => {
  const navigation = useNavigation()
  const {
    authenticationStore: { setAndDistributeAuthToken, setAuthEmail },
    userStore: { setProp: setUserProp },
  } = useStores()

  const [userName, setUserName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>()
  const [error, setError] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(false)

  const register = async () => {
    const userCredentials = { userName, email, password, passwordConfirmation }

    try {
      cadastroSchema.validateSync(userCredentials, { abortEarly: false })
      setError({})
      setLoading(true)

      const response = await Mock.postRegistration({
        username: userCredentials.userName,
        password1: userCredentials.password,
        password2: userCredentials.passwordConfirmation,
      })

      setAndDistributeAuthToken(response.key)
      setAuthEmail(userCredentials.email)
      setUserProp("userName", userCredentials.userName)
      
      goToMain()
    } catch (error) {
      setLoading(false)
      if (error instanceof ValidationError) {
        setError(parseValidationError(error))
      }
    }
  }

  const goToLogin = () => {
    navigation.navigate("Login")
  }

  const goToMain = () => {
    navigation.navigate("Drawer")
  }

  return {
    register,
    goToLogin,
    loading,
    formErrors: error,
    formProps: { userName, email, password, passwordConfirmation },
    formSetters: { setUserName, setEmail, setPassword, setPasswordConfirmation },
  }
}

interface CadastroScreenProps extends AppStackScreenProps<"Cadastro"> {}
export const CadastroScreen: FC<CadastroScreenProps> = observer(function CadastroScreen() {
  const { register, goToLogin, formProps, formSetters, formErrors, loading } =
    useCadastroScreenViewController()

  return (
    <AuthScreenLayout
      onConfirm={register}
      onLinkPress={goToLogin}
      buttonTx="auth.registerVerb"
      loading={loading}
      linkText={I18n.t("auth.loginOption")}
      form={
        <>
          <TextField
            placeholder="Nome"
            value={formProps.userName}
            onChangeText={formSetters.setUserName}
            status={formErrors.userName ? "error" : undefined}
            helper={formErrors.userName?.message}
          />
          <TextField
            placeholder="Email"
            value={formProps.email}
            onChangeText={formSetters.setEmail}
            status={formErrors.email ? "error" : undefined}
            helper={formErrors.email?.message}
          />
          <SecureTextField
            placeholder="Senha"
            value={formProps.password}
            onChangeText={formSetters.setPassword}
            status={formErrors.password ? "error" : undefined}
            helper={formErrors.password?.message}
          />
          <SecureTextField
            placeholder="Confirmar Senha"
            value={formProps.passwordConfirmation}
            onChangeText={formSetters.setPasswordConfirmation}
            status={formErrors.passwordConfirmation ? "error" : undefined}
            helper={formErrors.passwordConfirmation?.message}
          />
        </>
      }
    />
  )
})
