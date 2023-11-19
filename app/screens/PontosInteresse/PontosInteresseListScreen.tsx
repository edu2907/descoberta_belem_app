import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, ViewStyle } from "react-native"
import { PontosInteresseNavigatorScreenProps } from "app/navigators"
import { AutoImage, Card, Screen } from "app/components"
import { FlatList } from "react-native-gesture-handler"
import { formatEnderecoAvaliacao } from "app/utils/pontosInteresseUtils"
import { spacing } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface PontosInteresseListScreenProps
  extends PontosInteresseNavigatorScreenProps<"PontosInteresseList"> {}

const usePontosInteresseListScreenViewController = () => {


  const pontosInteresseDataArray = [
    {
      id: 6,
      nome: "Parque Estadual do Utinga",
      caminho_imagem:
        "https://www.parquedoutinga.com.br/wp-content/uploads/2020/09/parque-do-utinga-jonas-santana-1024x573.png",
      localizacao: "Av. João Paulo II, S/N - Curió-Utinga, Belém",
    },
    {
      id: 7,
      nome: "Museu Emílio Goeldi",
      caminho_imagem:
        "https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/museu_emilio_goeldi.jpeg",
      localizacao: "Av. Gov Magalhães Barata, 376 - São Braz",
    },
    {
      id: 10,
      nome: "Estação das Docas",
      caminho_imagem:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/a8/32/90/as-vistas-sao-muito-legais.jpg?w=1200&h=-1&s=1",
      localizacao: "Av. Mal. Hermes, S/N - Campina",
    },
  ]

  return { pontosInteresseDataArray }
}

export const PontosInteresseListScreen: FC<PontosInteresseListScreenProps> = observer(
  function PontosInteresseListScreen() {
    const viewController = usePontosInteresseListScreenViewController()

    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="fixed" safeAreaEdges={["top", "bottom"]}>
        <FlatList
        contentContainerStyle={$cardListContainer}
          data={viewController.pontosInteresseDataArray}
          renderItem={({ item: pontoInteresse }) => {
            return (
              <Card
                HeadingComponent={
                  <AutoImage
                    style={$cardImage}
                    source={{ uri: pontoInteresse.caminho_imagem }}
                  />
                }
                content={pontoInteresse.nome}
                footer={formatEnderecoAvaliacao(pontoInteresse.localizacao)}
              />
            )
          }}
        />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1, 
}

const $cardListContainer: ViewStyle = {
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.xl,
  gap: spacing.md,
  paddingBottom: spacing.sm,
}

const $cardImage: ImageStyle = {
  width: "100%",
  height: 200,
}