import add from './add';

test('Adds two numbers correctly', () => {
    const result = add(3, 5);
    expect(result).toBe(8);
});

test('Adds negative numbers correctly', () => {
    const result = add(-10, -5);
    expect(result).toBe(-15);
});
  
test('Adds zero correctly', () => {
    const result = add(10, 0);
    expect(result).toBe(10);
});