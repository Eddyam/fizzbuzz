const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Pruebas de unidad para la clase ExplorerController", () => {
    test("Obtener la lista de explorers filtrados por mission", () => {
        const result = ExplorerController.getExplorerByMission("node");
        expect(result.length).toBe(10);
        expect(result).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    mission: "node"
                })
            ])
        );
    });

    test("Regresa lista de usernames de los explorers filtrados por mission enviada", () => {
        const result = ExplorerController.getExplorersUsernamesByMission("java");
        expect(result).not.toBeUndefined();
        expect(result[0]).toBe("ajolonauta6"); 
    });

    test("Regresa la cantidad de explorers en la mission enviada", () => {
        const result = ExplorerController.getExplorersAmountByMission("node");
        expect(result).toBe(10);
    });

    test("Validar para funcionalidad getValidationInNumber", () => {
        expect(ExplorerController.getValidationInNumber(1)).toBe(1);
        expect(ExplorerController.getValidationInNumber(3)).toBe("FIZZ");
        expect(ExplorerController.getValidationInNumber(5)).toBe("BUZZ");
        expect(ExplorerController.getValidationInNumber(15)).toBe("FIZZBUZZ");
        expect(ExplorerController.getValidationInNumber(7)).toBe(7);
    });
});