function sum(a,b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error('Parameters must be numbers');
    }
  return a + b;
}

test('sum', () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 3)).toBe(2);
    expect(sum(-1, -1)).toBe(-2);
    expect(() => sum('string', 'string')).toThrow('Parameters must be numbers');
});

