const Reader = require("../../lib/utils/Reader") 

describe("Test para clase Reader", () => {
    test("1. Prueba para verificar lectura de archivo", () => {
        const explorers = Reader.readJsonFile("test/explorers_test.json")
        expect(explorers).toBeTruthy()
    })
})