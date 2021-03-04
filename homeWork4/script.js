// 1. Написать функцию, преобразующую число в объект.
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение 
// с помощью console.log и вернуть пустой объект.

// я специально не досматриваю уроки до выполнения задания, чтобы не слышать рекомендации по выполнению
// поэтому могут быть расхождения в понимании задания...

// let number = prompt('введите число от 0 до 999');
// function numToObj(num) {
//     if (num < 0 || num > 999) {
//         console.log('заданное число вне диапазона 0-999');
//         const obj = {}
//         console.log(obj);
//     } else {
//         strNum = String(num);
//         let arrNum = strNum.split('');
//         const obj = {
//             'единицы': arrNum[arrNum.length - 1],
//             'десятки': arrNum[arrNum.length - 2],
//             'сотни': arrNum[arrNum.length - 3],
//         }
//         console.log(obj);
//     }
// }
// numToObj(number);
// в случае однозначных и двузначных некоторые свойства станут undefined, для дальнейшего использования такой функции
// препятствия нет (как я считаю), но если нужен только чистый вывод, то можно сделать либо через else if для каждого случая
// либо при выводе сообщать что десятки или сотни равны нулю/отсутствуют 





// 2.Продолжить работу с интернет-магазином:

// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. 
// Какими объектами можно заменить их элементы?

// элементы корзины можно заменить объектами со свойствами - типа: 
// категория товара(одежда, обувь, аксессуары), раздел товара(женская, мужская, десткая), 
// тип товара(верхняя одежда, нижняя, рубашки и т.д.), 
// наименование товара, цвет, размер, цена, скидка
// отдельно нужен объект для подсчета корзины, так как туда не все свойства каждого товара входят

// 2.2. Реализуйте такие объекты.
const item1 = {
    'id': 1234,
    'category': 'cloth',
    'gender': 'men',
    'type': 'underwear',
    'name': 'socks',
    'color': 'red',
    'size': 'xl',
    'price': 100,
}
const item2 = {
    'id': 1243,
    'category': 'cloth',
    'gender': 'women',
    'type': 'underwear',
    'name': 'socks',
    'color': 'blue',
    'size': 'l',
    'price': 150,
}
const basketItem1 = {
    'id': item1.id,
    'price': item1.price,
    'quantity': 3
}
const basketItem2 = {
    'id': item2.id,
    'price': item2.price,
    'quantity': 5
}
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
const basketTotal = (basketItem1.price * basketItem1.quantity + basketItem2.price * basketItem2.quantity)
console.log(basketTotal);
// не уверен что вы хотели именно такое решение, но в нем используются объекты
// не сделал функцию для подсчета, ибо не придумал как бегать по все итемам если они будут добавляться
// мыслей было много, посмотрю на следующем уроке как надо было сделать


// 3.* Подумать над глобальными сущностями. 
// К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, 
// но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру 
// для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.

// ну собственно я это выше и реализовал))) объект item можно использовать гдде угодно, но тут надо связывать
// уже с базой данных, потом обращаться к нудным ключам и использовать как нужно.