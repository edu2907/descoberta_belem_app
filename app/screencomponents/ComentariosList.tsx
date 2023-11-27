import { spacing } from "app/theme"
import React from "react"
import { FlatList, ViewStyle } from "react-native"
import { Comentario, ComentarioProps } from "./Comentario"

type PontoInteresseComentariosListProps = {
  comentarios: Array<ComentarioProps['comentario']>
  header?: JSX.Element
  ListEmptyComponent?: React.ComponentType
}

export function ComentariosList({ comentarios, header, ListEmptyComponent }: PontoInteresseComentariosListProps) {
  return (
    <FlatList
      data={comentarios}
      contentContainerStyle={$root}
      ListEmptyComponent={ListEmptyComponent}
      ListHeaderComponent={header}
      renderItem={({ item: comentario }) => (
        <Comentario comentario={comentario} />
      )}
    />
  )
}

const $root: ViewStyle = {
  gap: spacing.md,
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.lg,
}
