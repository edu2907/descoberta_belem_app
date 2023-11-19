import { FlatList, ViewStyle, ImageStyle } from 'react-native'
import React from 'react'
import { formatEnderecoAvaliacao } from 'app/utils/pontosInteresseUtils'
import { spacing } from 'app/theme'
import { AutoImage, Card } from 'app/components'

export type PontosInteresseFlatlistProps = {
  pontosInteresseList: any[],
  headerComponent: JSX.Element,
  onCardPress: (pontoInteresseId: number) => void,
}

export function PontosInteresseFlatlist({ pontosInteresseList, headerComponent, onCardPress }: PontosInteresseFlatlistProps) {
  return (
    <FlatList
      contentContainerStyle={$cardListContainer}
      data={pontosInteresseList}
      ListHeaderComponent={headerComponent}
      renderItem={({ item: pontoInteresse }) => {
        return (
          <Card
            onPress={() => onCardPress(pontoInteresse.id)}
            HeadingComponent={
              <AutoImage
                style={$cardImage}
                source={{ uri: pontoInteresse.caminho_imagem }}
              />
            }
            content={pontoInteresse.nome}
            footer={formatEnderecoAvaliacao(pontoInteresse.localizacao)}
          />
        )
      }}
    />
  )
}

const $cardListContainer: ViewStyle = {
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.sm,
  gap: spacing.md,
  paddingBottom: spacing.sm,
}

const $cardImage: ImageStyle = {
  width: "100%",
  height: 200,
  borderRadius: spacing.xs,
}