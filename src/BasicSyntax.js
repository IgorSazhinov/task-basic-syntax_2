/* export */ function romanToInteger(str) {
    // http://graecolatini.bsu.by/htm-different/num-converter-roman.htm
    let result = 0;
    let rim = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let ar = [1, 5, 10, 50, 100, 500, 1000];
    let sumRes = []; // массив после перевода в арабские цифры
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    if (str.length) {
        // проверка на входное значение. Должна быть строка
        let indLen = 0; // индекс длины строки
        for (let a = 0; str.length > a; a++) {
            let point = 0; // 1 - нашли значение в массиве римских цифр; 0 - продолжаем поиск
            for (let i = 0; point != 1; i++) {
                if (str[indLen] === rim[i]) {
                    point = 1;
                    sumRes[indLen] = ar[i];
                } else {
                    point = 0;
                }
            }
            indLen++;
        }
        console.log(sumRes); // вывожу массив в консоль
        for (let i = 0; i < sumRes.length; i += 2) {
            if (
                sumRes[i] === sumRes[i - 1] &&
                sumRes[i] === sumRes[i + 1] &&
                sumRes[i] === sumRes[i + 2]
            ) {
                return 'Ошибочное записание римского числа. Четыре раза повторяется одно и тоже значение';
            }
            if (sumRes[i] > sumRes[i + 1] > sumRes[i + 2]) {
                return 'Ошибочное записание римского числа. Уменьшение значения два раза повторяется';
            }
            if (sumRes[i + 1] === undefined) {
                // проверка на нечетные значения
                result = result + sumRes[i];
            } else {
                if (sumRes[i] >= sumRes[i + 1]) {
                    // если большая цифра стоит перед меньшей, они складываются
                    result = result + sumRes[i] + sumRes[i + 1];
                } else {
                    //  если меньшая цифра стоит перед большей (в этом случае она не может повторяться),
                    result = result + sumRes[i + 1] - sumRes[i]; //  то меньшая вычитается из большей; вычитаться могут только цифры, обозначающие 1 или степени 10;
                }
            } //  уменьшаемым может быть только цифра, ближайшая в числовом ряду к вычитаемой:
        }
    } else {
        return 'На входе не строка';
    }
    return result;
}
