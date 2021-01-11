import { additionOfFraction } from ".";


describe("Test first function", () => {
  it("Should return 0", () => {
    // Given
    const a = new Fraction(0, 1);
    const b = new Fraction(0, 1);
    
    // When
    const result = Fraction.add(a, b);
    
    // Then
    const expected = new Fraction(0, 1);
    
    expect(result.equals(expected)).toEqual(true);
  })
});