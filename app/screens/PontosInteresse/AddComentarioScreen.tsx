import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Screen, TextField } from "app/components"
import { colors, spacing } from "app/theme"
import { useStores } from "app/models"
import { useNavigation } from "@react-navigation/native"
import { comentarioFormSchema } from "./helpers/schemas"
import { ValidationError } from "yup"
import { parseValidationError } from "app/utils/yupUtils"

const useAddComentarioScreenViewController = (props: AddComentarioScreenProps) => {
  const { pontosInteresseId } = props.route.params
  const [titulo, setTitulo] = useState<string>()
  const [descricao, setDescricao] = useState<string>()
  const [error, setError] = useState<any>({})
  const { comentariosListStore: { addComment } } = useStores()
  const navigation = useNavigation()


  const onSubmit = () => {
    try {
      comentarioFormSchema.validateSync({titulo, descricao}, {abortEarly: false})
      addComment({
        titulo,
        descricao,
        ponto_interesse_id: pontosInteresseId,
        avaliacao: 10,
        id: (new Date()).toISOString(),
        published_at: (new Date()).toISOString(),
      })
  
      navigation.goBack()
    } catch (error) {
      if (error instanceof ValidationError) {
        setError(parseValidationError(error))
      }
    }
  }

  return {
    formProps: {
      titulo,
      descricao,
    },
    formSets: {
      setTitulo,
      setDescricao,
    },
    onSubmit,
    formErrors: error,
  }
}

interface AddComentarioScreenProps extends AppStackScreenProps<"AddComentario"> {}

export const AddComentarioScreen: FC<AddComentarioScreenProps> = observer(
  function AddComentarioScreen(props) {
    const { formProps, formSets, formErrors, onSubmit } = useAddComentarioScreenViewController(props)
    return (
      <Screen preset="scroll" safeAreaEdges={["bottom"]} contentContainerStyle={$root}>
        <View style={$formInputsContainer}>
          <TextField
            inputWrapperStyle={$textInputStyle}
            placeholder="Assunto"
            value={formProps.titulo}
            onChangeText={formSets.setTitulo}
            status={formErrors.titulo ? "error" : undefined}
            helper={formErrors.titulo?.message}
          />
          <TextField
            inputWrapperStyle={$textInputStyle}
            placeholder="Escreva sua avaliação aqui..."
            multiline={true}
            value={formProps.descricao}
            onChangeText={formSets.setDescricao}
            status={formErrors.descricao ? "error" : undefined}
            helper={formErrors.descricao?.message}
          />
        </View>

        <View style={$buttonContainer}>
          <Button text="Enviar" preset="filled" onPress={onSubmit} />
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
