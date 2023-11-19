
export function formatEnderecoAvaliacao(endereco: string, avaliacao = 10, qntAvaliacoes = 0) {
  const numStars = '⭐'.repeat(avaliacao / 2)
  return `${endereco}\n ${numStars} (${qntAvaliacoes} avaliações)`
}