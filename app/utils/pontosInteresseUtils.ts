
export function formatEnderecoAvaliacao(endereco: string, mediaAvaliacao = 10, qntAvaliacoes = 3) {
  const numStars = '⭐'.repeat(mediaAvaliacao / 2)
  return `${endereco}\n ${numStars} (${qntAvaliacoes} avaliações)`
}