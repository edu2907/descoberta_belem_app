import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { AutoImage, Button, Dropdown, Icon, Screen, Text } from "app/components"
import { Mock } from "app/services/mock"
import { colors, spacing } from "app/theme"
import { ComentariosList } from "app/screencomponents"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"

type PontosInteresseDetailScreenViewControllerParams = {
  route: PontosInteresseDetailScreenProps["route"]
}

const usePontosInteresseDetailScreenViewController = ({
  route,
}: PontosInteresseDetailScreenViewControllerParams) => {
  const pontosInteresseId = route.params.pontosInteresseId
  const pontoInteresseData = Mock.fetchPontosInteresseById(pontosInteresseId)
  const navigation = useNavigation()
  const {
    authenticationStore: { isAuthenticated },
    comentariosListStore: { comentarios },
  } = useStores()

  const getComentarios = () => {
    return [
      ...comentarios
        .filter((comentario) => comentario.ponto_interesse_id === pontosInteresseId)
        .map((comentario) => ({ ...comentario, userName: "Você" })),
      ...Mock.fetchComentariosById(pontosInteresseId),
    ]
  }

  const goToAddComentario = () => {
    if (isAuthenticated) {
      navigation.navigate("AddComentario", { pontosInteresseId })
    } else {
      navigation.navigate("Login")
    }
  }

  return { pontoInteresseData, comentarios: getComentarios(), goToAddComentario }
}

interface PontosInteresseDetailScreenProps extends AppStackScreenProps<"PontosInteresseDetail"> {}

export const PontosInteresseDetailScreen: FC<PontosInteresseDetailScreenProps> = observer(
  function PontosInteresseDetailScreen({ route }) {
    const { pontoInteresseData, comentarios, goToAddComentario } =
      usePontosInteresseDetailScreenViewController({
        route,
      })
    return (
      <Screen style={$root} preset="fixed" safeAreaEdges={["bottom"]}>
        <ComentariosList
          comentarios={comentarios}
          header={
            <>
              <AutoImage style={$image} source={{ uri: pontoInteresseData.caminho_imagem }} />
              <View style={$textInfoContainer}>
                <Text preset="subheading" text={pontoInteresseData.nome} />
                <Text text={`3 Avaliações`} />
              </View>
              <Dropdown
                title="mainScreen.about_place"
                dropContent={`${pontoInteresseData.descricao}\n\nEndereço: ${pontoInteresseData.localizacao}`}
              />
              <View style={$buttonContainer}>
                <Button
                  tx="mainScreen.post_comment"
                  preset="reversed"
                  onPress={goToAddComentario}
                  RightAccessory={(props) => (
                    <Icon {...props} icon="check" color={colors.palette.neutral100} />
                  )}
                />
              </View>
              <View style={$textInfoContainer}>
                <Text preset="subheading" tx="mainScreen.comentarios_head" />
              </View>
            </>
          }
        />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $textInfoContainer: ViewStyle = {
  gap: spacing.xxxs,
  paddingVertical: spacing.xxs,
}

const $image: ImageStyle = {
  width: "100%",
  height: 200,
  borderRadius: spacing.xs,
}

const $buttonContainer: ViewStyle = {
  paddingVertical: spacing.sm,
  width: "100%",
}
