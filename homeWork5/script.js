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
    const abc = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    for (let i = 1; i < trLine.length; i++) {
        trLine[i].insertAdjacentHTML('afterbegin', abc[i]);
        allTr[i].firstChild.insertAdjacentHTML('afterbegin', i);
    };
};
chessTable();

// allTr[1].firstChild.insertAdjacentHTML('afterbegin', 'W');



// allTr[0].lastChild.insertAdjacentHTML('afterbegin', 'X');


// const ma = document.querySelector('#chess');
// ma.firstChild.firstChild.insertAdjacentHTML('afterbegin', 'test');

