import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree";
import { withSetPropAction } from "./helpers/withSetPropAction";

export const ComentarioModel = types.model("Comentario").props({
  id: types.string,
  ponto_interesse_id: types.number,
  titulo: types.string,
  descricao: types.string,
  published_at: types.string,
  avaliacao: types.number,
});

export const ComentariosArrayModel = types
  .model("ComentariosArray")
  .props({
    comentarios: types.array(ComentarioModel),
  })
  .actions(withSetPropAction)
  .views((self) => ({
    get numberOfComments() {
      return self.comentarios.length;
    },
  }))
  .actions((self) => ({
    addComment(comment) {
      self.comentarios.push(comment);
    },
    removeComment(commentId) {
      const index = self.comentarios.findIndex((comment) => comment.id === commentId);
      if (index !== -1) {
        self.comentarios.splice(index, 1);
      }
    },
  }));

export interface Comentario {
  id: string;
  text: string;
}

export interface ComentariosArray extends Instance<typeof ComentariosArrayModel> {}
export interface ComentariosArraySnapshotOut extends SnapshotOut<typeof ComentariosArrayModel> {}
export interface ComentariosArraySnapshotIn extends SnapshotIn<typeof ComentariosArrayModel> {}

export const createComentariosArrayDefaultModel = () =>
  types.optional(ComentariosArrayModel, { comentarios: [] });
