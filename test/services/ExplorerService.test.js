const Reader = require("../../lib/utils/Reader")
const ExplorerService = require("../../lib/services/ExplorerService")

describe("Test para la clase ExplorerService", () => {   
    const explorers = Reader.readJsonFile("test/explorers_test.json")
    test("Obtener la lista de explorer que estan en la mision node", () => {
        const result = ExplorerService.filterByMission(explorers, "node")
        expect(result.length).toBe(2)
        expect(result).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    mission: 'node'
                })
            ])
        )
    })
    test("Obtener la cantidad de explorers que estan en node", () => {
        const result = ExplorerService.getAmountOfExplorersByMission(explorers, "node")
        expect(result).toBe(2)
    })
    test("Obtener la lista de usuarios de github de los explorers que estan en node", () => {
        const result = ExplorerService.getExplorersUsernamesByMission(explorers, "node")
        expect(result).not.toBeUndefined()
        expect(result[0]).toBe("EddYam")        
    })
})