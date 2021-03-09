'use strict';
// const cells = 8;
// const tab = document.getElementById('chess');

// function chessTable() {
//     for (let row = 0; row < cells + 1; row++) {
//         const tr = document.createElement('tr');
//         tab.appendChild(tr);
//         for (let col = 0; col < cells + 1; col++) {
//             const td = document.createElement('td');
//             tr.appendChild(td);
//             if (row !== 0 && col !== 0) {
//                 if (col % 2 == row % 2) {
//                     td.className = 'white'
//                 } else {
//                     td.className = 'black'
//                 }
//             }
//         }
//     }
//     //заполнение строк символами
//     const allTr = tab.querySelectorAll('tr');
//     const trLine = allTr[0].querySelectorAll('td');
//     const abc = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
//     for (let i = 1; i < trLine.length; i++) {
//         trLine[i].insertAdjacentHTML('afterbegin', abc[i]);
//         allTr[i].firstChild.insertAdjacentHTML('afterbegin', i);
//     };
// };
// chessTable();


// КОРЗИНА исправление прошлого ДЗ и доработка до нового

const catalog = {
    items: [
        {
            'id': 1234,
            'category': 'cloth',
            'gender': 'men',
            'type': 'underwear',
            'name': 'socks',
            'color': 'red',
            'size': 'xl',
            'price': 100,
        },
        {
            'id': 1243,
            'category': 'cloth',
            'gender': 'women',
            'type': 'underwear',
            'name': 'socks',
            'color': 'blue',
            'size': 'l',
            'price': 150,
        }
    ]
}
const busket = {
    busketItems: [
        {
            'id': catalog.items[0].id,
            'price': catalog.items[0].price,
            'quantity': 3
        },
        {
            'id': catalog.items[1].id,
            'price': catalog.items[1].price,
            'quantity': 5
        }
    ],
    busketTotalPrice() {
        return this.busketItems.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);
    }

}
console.log(busket.busketTotalPrice());


