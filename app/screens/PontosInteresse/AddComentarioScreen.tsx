import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Screen, TextField } from "app/components"
import { colors, spacing } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const useAddComentarioScreenViewController = (props: AddComentarioScreenProps) => {
  const { pontosInteresseId } = props.route.params
  const [titulo, setTitulo] = useState<string>()
  const [descricao, setDescricao] = useState<string>()

  return {
    formProps: {
      titulo,
      descricao,
    },
    formSets: {
      setTitulo,
      setDescricao,
    },
  }
}

interface AddComentarioScreenProps extends AppStackScreenProps<"AddComentario"> {}

export const AddComentarioScreen: FC<AddComentarioScreenProps> = observer(
  function AddComentarioScreen(props) {
    const { formProps, formSets } = useAddComentarioScreenViewController(props)
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen preset="scroll" safeAreaEdges={["bottom"]} contentContainerStyle={$root}>
        <View style={$formInputsContainer}>
          <TextField
            inputWrapperStyle={$textInputStyle}
            placeholder="Assunto"
            value={formProps.titulo}
            onChangeText={formSets.setTitulo}
          />
          <TextField
            inputWrapperStyle={$textInputStyle}
            placeholder="Escreva sua avaliação aqui..."
            multiline={true}
            value={formProps.descricao}
            onChangeText={formSets.setDescricao}
          />
        </View>

        <View style={$buttonContainer}>
          <Button text="Enviar" preset="filled" />
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.lg,
}

const $buttonContainer: ViewStyle = {
  marginTop: spacing.lg,
}

const $textInputStyle: ViewStyle = {
  backgroundColor: colors.palette.neutral300,
  borderWidth: 0,
}

const $formInputsContainer: ViewStyle = {
  flex: 1,
  gap: spacing.lg,
}
