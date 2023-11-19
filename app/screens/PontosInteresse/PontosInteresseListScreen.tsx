import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { PontosInteresseNavigatorScreenProps } from "app/navigators"
import { Screen } from "app/components"
import { PontosInteresseFlatlist } from "app/screencomponents"
import PontosInteresseHeader from "app/screencomponents/PontosInteresseHeader"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const usePontosInteresseListScreenViewController = ({ navigation }) => {
  const navigateToPontosInteresseDetail = (pontosInteresseId: number) => {
    navigation.navigate("PontosInteresseDetail", { pontosInteresseId })
  }

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


  
  return { pontosInteresseDataArray, navigateToPontosInteresseDetail }
}

interface PontosInteresseListScreenProps
  extends PontosInteresseNavigatorScreenProps<"PontosInteresseList"> {}

export const PontosInteresseListScreen: FC<PontosInteresseListScreenProps> = observer(
  function PontosInteresseListScreen({ navigation }: PontosInteresseListScreenProps) {
    const screenObj = usePontosInteresseListScreenViewController({ navigation})

    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="fixed" safeAreaEdges={["top", "bottom"]}>
        <PontosInteresseFlatlist headerComponent={<PontosInteresseHeader />} onCardPress={screenObj.navigateToPontosInteresseDetail} pontosInteresseList={screenObj.pontosInteresseDataArray} />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
