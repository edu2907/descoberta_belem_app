import React, { FC } from "react"
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer"
import { colors, spacing } from "app/theme"
import { ImageStyle, View, ViewStyle } from "react-native"
import { AutoImage, Link, Text } from "app/components"
import I18n from "i18n-js"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
import { observer } from "mobx-react-lite"
import { askLogoutConfirmation } from "app/utils/alertUtils"

const Header = ({ isAuthenticated, userName }) => {
  const navigation = useNavigation()

  const goToRegister = () => navigation.navigate("Cadastro")
  const goToLogin = () => navigation.navigate("Login")
  if (isAuthenticated) {
    return (
      <View style={[$header, $authenticatedHeader]}>
        <AutoImage
          source={require("assets/images/account_profile.png")}
          style={$headImage}
          resizeMode="contain"
        />
        <Text style={{ flexShrink: 1 }} preset="inverted" text={"Olá, " + userName} />
      </View>
    )
  }

  return (
    <View style={$header}>
      <Link preset="subheadingInverted" text={I18n.t("auth.registerVerb")} onPress={goToRegister} />
      <Text preset="inverted" tx="common.or" />
      <Link preset="subheadingInverted" text={I18n.t("auth.loginVerb")} onPress={goToLogin} />
    </View>
  )
}

export const AppDrawerNavigatorContent: FC<DrawerContentComponentProps> = observer(
  function AppDrawerNavigatorContent(props) {
    const {
      authenticationStore: { isAuthenticated, setAndDistributeAuthToken },
      userStore: { userName, setProp },
    } = useStores()

    const logout = () => {
      askLogoutConfirmation(() => {
        setProp("userName", "")
        setAndDistributeAuthToken("")
      })
    }

    return (
      <DrawerContentScrollView {...props} contentContainerStyle={$root}>
        <Header isAuthenticated={isAuthenticated} userName={userName} />
        <View style={$body}>
          <DrawerItemList {...props} />
          {isAuthenticated && <DrawerItem label={"Sair"} onPress={logout} />}
        </View>
      </DrawerContentScrollView>
    )
  },
)

const $root: ViewStyle = {
  backgroundColor: colors.tint,
  flex: 1,
}

const $header: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.xxl,
  gap: spacing.xs,
  maxWidth: "100%",
  alignItems: "center",
}

const $body: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $authenticatedHeader: ViewStyle = {
  flexDirection: "row",
}

const $headImage: ImageStyle = {
  width: "50%",
  height: 100,
}
