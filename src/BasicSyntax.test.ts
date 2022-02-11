import { romanToInteger } from './BasicSyntax';

describe('Базовый синтаксис', () => {
    it('Преобразование римских чисел в арабские', () => {
        expect(romanToInteger('II')).toBe(2);
        expect(romanToInteger('XVI')).toBe(16);
        expect(romanToInteger('XXXVII')).toBe(37);
        expect(romanToInteger('MMMMCDXLIV')).toBe(4444);
        expect(romanToInteger('MCMXCIX')).toBe(1999);
    });
});
