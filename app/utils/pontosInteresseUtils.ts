
export function formatEnderecoAvaliacao(endereco: string, mediaAvaliacao = 10, qntAvaliacoes = 3) {
  const numStars = calcNumStars(mediaAvaliacao)
  return `${endereco}\n ${numStars} (${qntAvaliacoes} avaliações)`
}

export function calcNumStars(mediaAvaliacao: number) {
  return '⭐'.repeat(mediaAvaliacao / 2)
}