/* eslint-disable @typescript-eslint/no-unused-vars */
export const Mock = {
  fetchPontosInteresse() {
    return [
      {
        id: 6,
        nome: "Parque Estadual do Utinga",
        caminho_imagem:
          "https://www.parquedoutinga.com.br/wp-content/uploads/2020/09/parque-do-utinga-jonas-santana-1024x573.png",
        localizacao: "Av. João Paulo II, S/N - Curió-Utinga, Belém",
      },
      {
        id: 7,
        nome: "Museu Emílio Goeldi",
        caminho_imagem:
          "https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/museu_emilio_goeldi.jpeg",
        localizacao: "Av. Gov Magalhães Barata, 376 - São Braz",
      },
      {
        id: 10,
        nome: "Estação das Docas",
        caminho_imagem:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/a8/32/90/as-vistas-sao-muito-legais.jpg?w=1200&h=-1&s=1",
        localizacao: "Av. Mal. Hermes, S/N - Campina",
      },
    ]
  },

  fetchPontosInteresseById(id: number) {
    return {
      id: 6,
      nome: "Parque Estadual do Utinga",
      caminho_imagem:
        "https://www.parquedoutinga.com.br/wp-content/uploads/2020/09/parque-do-utinga-jonas-santana-1024x573.png",
      localizacao: "Av. João Paulo II, S/N - Curió-Utinga, Belém",
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et rhoncus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam purus, malesuada ac ante nec'
    }
  },

  fetchComentariosById(id: number) {
    return [
      {
        id: 1,
        titulo: "Lugar incrível!!!",
        descricao: "Lugar muito bonito, com uma vista incrível, recomendo a todos.",
        avaliacao: 10,
        userName: "Usuário da Silva",
        published_at: "2021-10-10T00:00:00.000Z"
      },
      {
        id: 2,
        titulo: "Maravilhoso!!!",
        descricao: "Lugar muito bonito, com uma vista incrível, recomendo a todos.",
        avaliacao: 10,
        userName: "Usuário Pereira",
        published_at: "2021-10-10T00:00:00.000Z"
      }
    ]
  }
}

