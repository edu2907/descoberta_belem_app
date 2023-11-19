import { Card, Text } from "app/components"
import { spacing } from "app/theme"
import { formatDate, showSinceDate } from "app/utils/formatDate"
import { calcNumStars } from "app/utils/pontosInteresseUtils"
import React from "react"
import { FlatList, View, ViewStyle } from "react-native"

type PontoInteresseComentariosListProps = {
  comentarios: Array<{
    id: number
    titulo: string
    descricao: string
    avaliacao: number
    userName: string
    published_at: string
  }>
  header: JSX.Element
}

export function PontoInteresseComentariosList({ comentarios, header }: PontoInteresseComentariosListProps) {
  return (
    <FlatList
      data={comentarios}
      contentContainerStyle={$root}
      ListHeaderComponent={header}
      renderItem={({ item: comentario }) => (
        <Card
          content={comentario.descricao}
          HeadingComponent={
            <View>
              <Text preset="subheading" text={comentario.titulo} />
              <Text text={calcNumStars(comentario.avaliacao)} />
            </View>
          }
          FooterComponent={
            <View style={$footerTextContainer} >
              <Text preset="bold" text={comentario.userName} />
              <Text text={showSinceDate(comentario.published_at)} />
            </View>
          }
        />
      )}
    />
  )
}

const $root: ViewStyle = {
  gap: spacing.md,
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.lg,
}

const $footerTextContainer: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
}