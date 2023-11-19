import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { Mock } from "app/services/mock"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

type PontosInteresseDetailScreenViewControllerParams = {
  route: PontosInteresseDetailScreenProps["route"]
}

const usePontosInteresseDetailScreenViewController = ({ route }: PontosInteresseDetailScreenViewControllerParams) => {
  const pontoInteresseId = route.params.pontosInteresseId
  const pontoInteresseData = Mock.fetchComentariosById(pontoInteresseId)
  const comentarios = Mock.fetchComentariosById

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
    <Screen style={$root} preset="scroll">
      <Text text="pontosInteresseDetail" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
