import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Должна возвращать строку, начинающуюся с заглавной буквы', () => {
    const outputString = toCapitalizeFirstLetter('abc');

    expect(outputString).toEqual('Abc');
  });

  test('Должна делать все остальные буквы маленького регистра', () => {
    const outputString = toCapitalizeFirstLetter('ABC');

    expect(outputString).toEqual('Abc');
  });
});
