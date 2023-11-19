import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { AutoImage, Card, Dropdown, Screen, Text } from "app/components"
import { Mock } from "app/services/mock"
import { spacing } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

type PontosInteresseDetailScreenViewControllerParams = {
  route: PontosInteresseDetailScreenProps["route"]
}

const usePontosInteresseDetailScreenViewController = ({ route }: PontosInteresseDetailScreenViewControllerParams) => {
  const pontoInteresseId = route.params.pontosInteresseId
  const pontoInteresseData = Mock.fetchPontosInteresseById(pontoInteresseId)
  const comentarios = Mock.fetchComentariosById(pontoInteresseId)

  return { pontoInteresseData, comentarios }
}

interface PontosInteresseDetailScreenProps
  extends AppStackScreenProps<"PontosInteresseDetail"> {}

export const PontosInteresseDetailScreen: FC<PontosInteresseDetailScreenProps> = observer(function PontosInteresseDetailScreen({ route }) {
  const { pontoInteresseData } = usePontosInteresseDetailScreenViewController({ route })
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll" >
      <AutoImage
      style={$image}
        source={{ uri: pontoInteresseData.caminho_imagem }}
      />
      <Text preset="bold" text={pontoInteresseData.nome} />
      <Text text={`3 Avaliações`} />
      <Dropdown title="mainScreen.about_place" dropContent={`${pontoInteresseData.descricao}\n${pontoInteresseData.localizacao}`} />

    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.md
}

const $image: ImageStyle = {
  width: "100%",
  height: 200,
  borderRadius: spacing.xs,
}