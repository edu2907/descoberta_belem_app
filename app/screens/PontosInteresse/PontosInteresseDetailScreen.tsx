import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { AutoImage, Card, Dropdown, Screen, Text } from "app/components"
import { Mock } from "app/services/mock"
import { spacing } from "app/theme"
import { PontoInteresseComentariosList } from "app/screencomponents"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

type PontosInteresseDetailScreenViewControllerParams = {
  route: PontosInteresseDetailScreenProps["route"]
}

const usePontosInteresseDetailScreenViewController = ({
  route,
}: PontosInteresseDetailScreenViewControllerParams) => {
  const pontoInteresseId = route.params.pontosInteresseId
  const pontoInteresseData = Mock.fetchPontosInteresseById(pontoInteresseId)
  const comentarios = Mock.fetchComentariosById(pontoInteresseId)

  return { pontoInteresseData, comentarios }
}

interface PontosInteresseDetailScreenProps extends AppStackScreenProps<"PontosInteresseDetail"> {}

export const PontosInteresseDetailScreen: FC<PontosInteresseDetailScreenProps> = observer(
  function PontosInteresseDetailScreen({ route }) {
    const { pontoInteresseData, comentarios } = usePontosInteresseDetailScreenViewController({
      route,
    })
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="fixed" safeAreaEdges={["bottom"]}>
        <PontoInteresseComentariosList
          comentarios={comentarios}
          header={
            <>
              <AutoImage style={$image} source={{ uri: pontoInteresseData.caminho_imagem }} />
              <View style={$textInfoContainer}>
                <Text preset="bold" text={pontoInteresseData.nome} />
                <Text text={`3 Avaliações`} />
              </View>
              <Dropdown
                title="mainScreen.about_place"
                dropContent={`${pontoInteresseData.descricao}\n\nEndereço: ${pontoInteresseData.localizacao}`}
              />
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
  paddingVertical: spacing.sm,
}

const $image: ImageStyle = {
  width: "100%",
  height: 200,
  borderRadius: spacing.xs,
}
