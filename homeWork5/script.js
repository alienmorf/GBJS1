'use strict';
const cells = 8;
const tab = document.getElementById('chess');

function chessTable() {
    for (let row = 0; row < cells + 1; row++) {
        const tr = document.createElement('tr');
        tab.appendChild(tr);
        for (let col = 0; col < cells + 1; col++) {
            const td = document.createElement('td');
            tr.appendChild(td);
            if (row !== 0 && col !== 0) {
                if (col % 2 == row % 2) {
                    td.className = 'white'
                } else {
                    td.className = 'black'
                }
            }
        }
    }
    //заполнение строк символами
    const allTr = tab.querySelectorAll('tr');
    const trLine = allTr[0].querySelectorAll('td');
    const abc = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const digits = [0, 8, 7, 6, 5, 4, 3, 2, 1];
    for (let i = 1; i < trLine.length; i++) {
        trLine[i].insertAdjacentHTML('afterbegin', abc[i]);
        allTr[i].firstChild.insertAdjacentHTML('afterbegin', digits[i]);
    };
};
chessTable();


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
const basket = {
    basketItems: [
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
    basketTotalPrice() {
        return this.basketItems.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);
    },
    basketOut() {
        const basketList = document.querySelector('.basket');
        if (this.basketTotalPrice() > 0) {
            basketList.insertAdjacentHTML('beforeend', `количество товаров в корзине: ${this.basketItems.length} на общую сумму: ${this.basketTotalPrice()}`);
        } else {
            basketList.textContent = 'в корзине пусто';
        }
    },
}
basket.basketOut();




