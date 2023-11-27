import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { ComentariosList } from "app/screencomponents"
import { useStores } from "app/models"
// import { useNavigation } from "@react-navigation/native"

interface UserComentariosListScreenProps extends AppStackScreenProps<"UserComentariosList"> {}

export const UserComentariosListScreen: FC<UserComentariosListScreenProps> = observer(
  function UserComentariosListScreen() {
    const {
      comentariosListStore: { comentarios },
    } = useStores()

    const parseComentarios = () => {
      return comentarios.map((comentario) => {
        return {
          ...comentario,
          userName: "",
        }
      })
    }

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="fixed" safeAreaEdges={["bottom"]}>
        <ComentariosList
          comentarios={parseComentarios()}
          ListEmptyComponent={() => (
            <View style={$emptyListContainer}>
              <Text preset="subheading" text="Você ainda não avaliou!" />
              <Text
                style={{ textAlign: "center" }}
                text="Procure por locais da cidade e publique suas avaliações!"
              />
            </View>
          )}
        />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $emptyListContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}
