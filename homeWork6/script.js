'use strict';
// catalog object
const catalog = {
    catalogBlock: null,
    cart: {}, //для копии объекта корзины
    productCatalog: [
        {
            product_id: 123,
            product_name: 'Жаренные кеды',
            product_price: 1200,
        },
        {
            product_id: 124,
            product_name: 'Кнопки попки',
            product_price: 750,
        },
        {
            product_id: 125,
            product_name: 'Почки деда',
            product_price: 1500,
        },
        {
            product_id: 126,
            product_name: 'Свежие мысли',
            product_price: 15000,
        },
    ],

    init() {
        this.catalogBlock = document.querySelector('.catalog');
        this.cart = cart; //скопировали объект корзтины внутрь объекта каталога
        this.reneder();
        this.eventHandler();
    },

    reneder() {
        this.renderFullCatalog();
    },

    eventHandler() {
        this.catalogBlock.addEventListener('click', event => this.addToCart(event));
    },

    addToCart(event) {
        //проверка поадания в кнопку
        if (event.target.classList.contains('addBtn')) {
            console.log('button pressed');
            // добавление в объект корзины 
            const product_id = + event.target.dataset.product_id;
            console.log('add to cart in catalog ' + product_id);
            this.cart.addToCart(product_id);
        } else {
            return;
        };
    },

    renderFullCatalog() {
        this.catalogBlock.innerHTML = '';
        this.productCatalog.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    renderCatalogItem(item) {
        return `<div class="product">
                <h3>${item.product_name}</h3>
                <p>цена: ${item.product_price} злотых</p>
                <button class="addBtn" data-product_id=${item.product_id}>add to cart</button>
                </div>`;
    },
}

//объект корзины...будет сложно
const cart = {
    cartBlock: null,
    clrButton: null,
    catalogCopy: [],
    cartList: [
        {
            product_id: 125,
            product_name: 'Почки деда',
            product_price: 1500,
            product_quantity: 1
        },
    ],
    init() {
        this.cartBlock = document.querySelector('.cart');
        this.clrButton = document.querySelector('.clrButton');
        this.catalogCopy = catalog.productCatalog;
        this.render();
        this.eventHandler();
    },
    render() {
        this.renderFullCart();
    },
    eventHandler() {
        this.clrButton.addEventListener('click', this.clrCart.bind(this)); //не до конца понял почему, но работает только так
    },
    findItem(product_id) {
        return this.catalogCopy.find(function (item) {
            return item.product_id === product_id;
        });
    },
    addToCart(product_id) {
        const item = this.findItem(product_id);
        if (item) {
            const isInCart = this.cartList.find(({ product_id }) => item.product_id === product_id);
            if (isInCart) {
                isInCart.product_quantity++;
            } else {
                this.cartList.push({ ...item, product_quantity: 1 });
            }
            this.render();
        } else {
            alert('something wrong');
        };
    },

    renderFullCart() {
        this.cartBlock.innerHTML = '';
        this.cartList.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
        this.cartBlock.insertAdjacentHTML('beforeend', `<p>ИТОГО: ${this.getTotalPrice()} злотых</p>`);
    },
    renderCartItem(item) {
        return `<div class="cartItem">
                <h3>${item.product_name}</h3>
                <p>${item.product_price} злотых</p>
                <p>${item.product_quantity} шт.</p>
                </div>`
    },

    getTotalPrice() {
        return this.cartList.reduce(function (price, item) {
            return price + item.product_price * item.product_quantity;
        }, 0);
    },

    clrCart() {
        console.log('clear button pressed');
        this.cartList = [];
        this.render();
    },
}

catalog.init();
cart.init();
