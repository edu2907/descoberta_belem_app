import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ActivityIndicator, ImageStyle, KeyboardAvoidingView, View, ViewStyle } from "react-native"
import { AutoImage, Button, Link, Screen } from "app/components"
import { colors, spacing } from "app/theme"
import { TxKeyPath } from "app/i18n"

const logoImage = require("app/../assets/images/logo.png")

interface AuthLayoutProps {
  onConfirm: () => void
  onLinkPress: () => void
  form: JSX.Element
  buttonTx: TxKeyPath
  linkText: string
  loading: boolean
}

export const AuthScreenLayout: FC<AuthLayoutProps> = observer(function CadastroScreen({
  onConfirm,
  onLinkPress,
  form,
  linkText,
  buttonTx,
  loading = false,
}) {
  return (
    <Screen
      contentContainerStyle={$root}
      preset="scroll"
      safeAreaEdges={["top"]}
      backgroundColor={colors.tint}
    >
      <AutoImage source={logoImage} style={$logoImage} resizeMode="contain" />
      <View style={$formContainer}>
        <View style={$formInputsContainer}>{form}</View>
        <Button
          preset="filled"
          tx={buttonTx}
          onPress={onConfirm}
          disabled={loading}
          LeftAccessory={(props) => (
            (
              loading ? (
                <ActivityIndicator style={props.style} animating={true} size="small" color={colors.palette.neutral200} />
              ) : null
            )
          )}
        />
      </View>
      <View style={$footerContainer}>
        <Link text={linkText} onPress={onLinkPress} style={$footerLink} />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  paddingHorizontal: spacing.lg,
}

const $logoImage: ImageStyle = {
  width: 200,
  height: 200,
  alignSelf: "center",
  marginBottom: spacing.xxxl,
}

const $formContainer: ViewStyle = {
  flex: 1,
  gap: spacing.lg,
}

const $formInputsContainer: ViewStyle = {
  flex: 1,
  gap: spacing.lg,
}

const $footerContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: spacing.lg,
}

const $footerLink: ViewStyle = {
  padding: spacing.sm,
}
