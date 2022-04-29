const Reader = require("../../lib/utils/Reader") 

describe("Test para clase Reader", () => {
    test("1. Prueba para verificar lectura de archivo", () => {
        const explorers = Reader.readJsonFile("explorers.json")
        expect(explorers).toBeTruthy()
    })
})