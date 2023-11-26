import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, TextField } from "app/components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"

interface CadastroScreenProps extends AppStackScreenProps<"Cadastro"> {}

const useCadastroScreenViewController = () => {
  const { authenticationStore: { setAndDistributeAuthToken,  } } = useStores()

  const register = async () => {
    setAndDistributeAuthToken("token")
  }
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return { register }
}

export const CadastroScreen: FC<CadastroScreenProps> = observer(function CadastroScreen() {
  const { register } = useCadastroScreenViewController()

  return (
    <Screen style={$root} preset="scroll" safeAreaEdges={["top", "bottom"]}>
      <TextField placeholder="Nome" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
