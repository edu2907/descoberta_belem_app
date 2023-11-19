import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { PontosInteresseNavigatorScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

type PontosInteresseDetailScreenViewControllerParams = {
  route: PontosInteresseDetailScreenProps["route"]
}

const usePontosInteresseDetailScreenViewController = ({ route }: PontosInteresseDetailScreenViewControllerParams) => {
  const pontoInteresseId = route.params.pontosInteresseId
  const pontoInteresseData = {
    id: 6,
    nome: "Parque Estadual do Utinga",
    caminho_imagem:
      "https://www.parquedoutinga.com.br/wp-content/uploads/2020/09/parque-do-utinga-jonas-santana-1024x573.png",
    localizacao: "Av. João Paulo II, S/N - Curió-Utinga, Belém",
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et rhoncus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam purus, malesuada ac ante nec',
    comentarios: [
      {
        id: 1,
        titulo: "Lugar incrível!!!",
        descricao: "Lugar muito bonito, com uma vista incrível, recomendo a todos.",
        avaliacao: 10,
        userName: "Usuário da Silva",
        published_at: "2021-10-10T00:00:00.000Z"
      },
      {
        id: 2,
        titulo: "Maravilhoso!!!",
        descricao: "Lugar muito bonito, com uma vista incrível, recomendo a todos.",
        avaliacao: 10,
        userName: "Usuário Pereira",
        published_at: "2021-10-10T00:00:00.000Z"
      }
    ]
  }
  return { pontoInteresseData }
}

interface PontosInteresseDetailScreenProps
  extends PontosInteresseNavigatorScreenProps<"PontosInteresseDetail"> {}

export const PontosInteresseDetailScreen: FC<PontosInteresseDetailScreenProps> = observer(function PontosInteresseDetailScreen({ route }) {
  const { pontoInteresseData } = usePontosInteresseDetailScreenViewController({ route })
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Text text="pontosInteresseDetail" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
