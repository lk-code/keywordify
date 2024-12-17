import { generateKeywords } from '../index';

describe('generateKeywords', () => {
    it('should generate the correct keyword combinations in any order', () => {
        const result = generateKeywords(
            ["A1", "A2", "A3"],
            ["B1", "B2"],
            ["C1", "C2"],
            ["D1"]
        );

        const expected: string[] = [
            "A1 B1 C1 D1",
            "A1 B1 C2 D1",
            "A1 B2 C1 D1",
            "A1 B2 C2 D1",
            "A2 B1 C1 D1",
            "A2 B1 C2 D1",
            "A2 B2 C1 D1",
            "A2 B2 C2 D1",
            "A3 B1 C1 D1",
            "A3 B1 C2 D1",
            "A3 B2 C1 D1",
            "A3 B2 C2 D1"
        ];

        expected.forEach(expectedKeyword => {
            expect(result).toContain(expectedKeyword);
        });

        expect(result.length).toBe(expected.length);
    });
});
