import React from "react"
import { View, ViewStyle } from "react-native"
import { Card, Text } from "app/components"
import { calcNumStars } from "app/utils/pontosInteresseUtils"
import { showSinceDate } from "app/utils/formatDate"

export type ComentarioProps = {
  comentario: {
    id: number
    titulo: string
    descricao: string
    avaliacao: number
    userName: string
    published_at: string
  }
}

export function Comentario({ comentario }: ComentarioProps) {
  return (
    <Card
      content={comentario.descricao}
      HeadingComponent={
        <View>
          <Text preset="subheading" text={comentario.titulo} />
          <Text text={calcNumStars(comentario.avaliacao)} />
        </View>
      }
      FooterComponent={
        <View style={$footerTextContainer}>
          <Text preset="bold" text={comentario.userName} />
          <Text text={showSinceDate(comentario.published_at)} />
        </View>
      }
    />
  )
}

const $footerTextContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}
