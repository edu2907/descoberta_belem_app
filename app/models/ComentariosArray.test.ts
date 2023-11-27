import { ComentariosArrayModel } from "./ComentariosArray"

test("can be created", () => {
  const instance = ComentariosArrayModel.create({})

  expect(instance).toBeTruthy()
})
