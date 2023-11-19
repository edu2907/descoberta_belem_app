import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppDrawerNavigatorScreenProps } from "app/navigators"
import { Screen } from "app/components"
import { PontosInteresseFlatlist } from "app/screencomponents"
import PontosInteresseHeader from "app/screencomponents/PontosInteresseHeader"
import { Mock } from "app/services/mock"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const usePontosInteresseListScreenViewController = ({ navigation }) => {
  const navigateToPontosInteresseDetail = (pontosInteresseId: number) => {
    navigation.navigate("PontosInteresseDetail", { pontosInteresseId })
  }
  const pontosInteresseDataArray = Mock.fetchPontosInteresse()  

  return { pontosInteresseDataArray, navigateToPontosInteresseDetail }
}

interface PontosInteresseListScreenProps
  extends AppDrawerNavigatorScreenProps<"PontosInteresseList"> {}

export const PontosInteresseListScreen: FC<PontosInteresseListScreenProps> = observer(
  function PontosInteresseListScreen({ navigation }: PontosInteresseListScreenProps) {
    const screenObj = usePontosInteresseListScreenViewController({ navigation })

    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="fixed" safeAreaEdges={["bottom"]}>
        <PontosInteresseFlatlist headerComponent={<PontosInteresseHeader />} onCardPress={screenObj.navigateToPontosInteresseDetail} pontosInteresseList={screenObj.pontosInteresseDataArray} />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
