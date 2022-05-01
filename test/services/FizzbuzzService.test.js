const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Test para la clase FizzbuzzService", () => {
    test("Validar si explorer tiene score divisible entre 3, regresa FIZZ", () => {
        const explorer1 = {name: "Explorer1", score: 3};
        const result = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(result.trick).toBe("FIZZ");
    });
    test("Validar si explorer tiene score divisible entre 5, regresa BUZZ", () => {
        const explorer2 = {name: "Explorer2", score: 5};
        const result = FizzbuzzService.applyValidationInExplorer(explorer2);
        expect(result.trick).toBe("BUZZ");
    });
    test("Validar si explorer tiene score divisible entre 3 y 5, regresa FIZZBUZZ", () => {
        const explorer3 = {name: "Explorer3", score: 15};
        const result = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(result.trick).toBe("FIZZBUZZ");
    });
    test("Validar cuando explorer no cumple las condiciones anteriores mantiene score ", () => {
        const explorer4 = {name: "Explorer4", score: 2};
        const result = FizzbuzzService.applyValidationInExplorer(explorer4);
        expect(result.trick).toBe(2);
    });
    test("Validar para funcionalidad applyValidationInNumber", () => {
        expect(FizzbuzzService.applyValidationInNumber(1)).toBe(1);
        expect(FizzbuzzService.applyValidationInNumber(3)).toBe("FIZZ1");
        expect(FizzbuzzService.applyValidationInNumber(5)).toBe("BUZZ");
        expect(FizzbuzzService.applyValidationInNumber(15)).toBe("FIZZBUZZ");
        expect(FizzbuzzService.applyValidationInNumber(7)).toBe(7);
    });
});
