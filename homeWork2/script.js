// 1. Дан код:

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 потому что префиксная форма инкремента возвращает сразу новое значение
// d = b++; alert(d);           // 1 потому что постфиксная форма возвращает сначала старое значение потом увеличивает
// c = (2+ ++a); alert(c);      // 5 2+3=5 значение а уже было 2 и увеличилось еще на единицу
// d = (2+ b++); alert(d);      // 4 2+2=4 значение b стало равным 2 после выполнения пердыдущего инкремента, текущий инкремент будет действовать во время следующего обращения к переменной
// alert(a);                    // 3 значение инкрементировалось дважды? соответственно 1+1+1=3
// alert(b);                    // 3 значение инкрементировалось дважды? соответственно 1+1+1=3
// Почему код даёт именно такие результаты?



// 2. Чему будет равен x в примере ниже?

// var a = 2;
// var x = 1 + (a *= 2);
// x = 5;  // (a *= 2) = 4 + 1 = 5

// 3. Объявить две целочисленные переменные a и b и задать им произвольные 
// начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
let a = -2;
let b = 3;
(a > 0) && (b > 0) ? console.log(a - b) : console.log('одно или оба числа отрицательные');
(a < 0) && (b < 0) ? console.log(a * b) : console.log('одно или оба числа положительные');
((a < 0) && (b >= 0)) || ((a >= 0) && (b < 0)) ? console.log(a + b) : console.log('числа имеют одинаковый знак');


// 4. Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15.

// тут конечно можно через цикл решить в пару строк, но вы просили четко следовать инструкциям и 
// использовать только текущие знания, а циклы будут на следующем занятии
// поэтому вот такой код ;)

const i = 4;
switch (i) {
    case 0:
        console.log(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 1:
        console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 2:
        console.log(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 3:
        console.log(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 4:
        console.log(4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 5:
        console.log(5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 6:
        console.log(6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 7:
        console.log(7, 8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 8:
        console.log(8, 9, 10, 11, 12, 13, 14, 15)
        break;
    case 9:
        console.log(9, 10, 11, 12, 13, 14, 15)
        break;
    case 10:
        console.log(10, 11, 12, 13, 14, 15)
        break;
    case 11:
        console.log(11, 12, 13, 14, 15)
        break;
    case 12:
        console.log(12, 13, 14, 15)
        break;
    case 13:
        console.log(13, 14, 15)
        break;
    case 14:
        console.log(14, 15)
        break;
    case 15:
        console.log(15)
        break;
    default: console.log("число меньше 0 или больше 15")
        break;
}


// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.
function summ(a, b) {
    return a + b;
};
function diff(a, b) {
    return a - b;
};
function mult(a, b) {
    return a * b;
};
function div(a, b) {
    return a / b;
};

console.log(summ(3, 4));
console.log(diff(3, 4));
console.log(mult(3, 4));
console.log(div(3, 4));

// 6. Реализовать функцию с тремя параметрами: 
// function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
// operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить 
// одну из арифметических операций (использовать функции из пункта 5) 
// и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case summ:
            return summ(arg1, arg2)
            break;
        case diff:
            return diff(arg1, arg2);
            break;
        case mult:
            return mult(arg1, arg2);
            break;
        case div:
            return div(arg1, arg2);
            break;
        default: console.log("данные не верны");
            break;
    }
};
console.log(mathOperation(3, 4, summ));
console.log(mathOperation(3, 4, diff));
console.log(mathOperation(3, 4, mult));
console.log(mathOperation(3, 4, div));



// 7. *Сравнить null и 0. Попробуйте объяснить результат.

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
// мне кажется что null это отсутствие значения типа пустой объект, а 0 - это конкретное число
console.log(typeof (null)); // object
console.log(typeof (0)); // number

// 8. *С помощью рекурсии организовать функцию возведения числа в степень. 
// Формат: function power(val, pow), где val – заданное число, pow – степень.

function pow(x, n) {
    return (n != 1) ? x * pow(x, n - 1) : x; // 2*pow(2, 2)
}

console.log(pow(2, 3)); // 8
