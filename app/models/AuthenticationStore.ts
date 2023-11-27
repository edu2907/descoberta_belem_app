import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { api } from "app/services/api"

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    authToken: types.maybe(types.string),
    authEmail: types.maybe(types.string),
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken;
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((store) => ({
    setAuthEmail(value?: string) {
      store.authEmail = value;
    },
    setAuthToken(value?: string) {
      store.authToken = value;
    },
    distributeAuthToken(value?: string) {
      const token = value;
      api.apisauce.setHeader("key", token);
    },
    setAndDistributeAuthToken(value?: string) {
      this.setAuthToken(value);
      // this.distributeAuthToken(value);
    } 
  }));

export interface AuthenticationStore
  extends Instance<typeof AuthenticationStoreModel> {}
export interface AuthenticationStoreSnapshot
  extends SnapshotOut<typeof AuthenticationStoreModel> {}