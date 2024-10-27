function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    menuMobile.classList.toggle('open');
}

function toggleCartPopup() {
    const cartPopup = document.getElementById('cartPopup');
    cartPopup.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    let cart = [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.getElementById('cartItems');
    const subtotalDisplay = document.getElementById('subtotal');

    // Atualiza o subtotal e os itens do carrinho no popup
    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;

        cart.forEach(item => {
            const total = item.price * item.quantity;
            subtotal += total;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name} (R$ ${item.price.toFixed(2).replace('.', ',')})</p>
                <div class="quantity-controls">
                    <button onclick="decreaseQuantity('${item.name}')">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity('${item.name}')">+</button>
                </div>
                <p>Total: R$ ${total.toFixed(2).replace('.', ',')}</p>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        subtotalDisplay.textContent = subtotal.toFixed(2).replace('.', ',');
    }

    // Funções de controle de quantidade
    window.increaseQuantity = (productName) => {
        const product = cart.find(item => item.name === productName);
        if (product) {
            product.quantity += 1;
            updateCartDisplay();
        }
    };

    window.decreaseQuantity = (productName) => {
        const product = cart.find(item => item.name === productName);
        if (product && product.quantity > 1) {
            product.quantity -= 1;
            updateCartDisplay();
        } else {
            cart = cart.filter(item => item.name !== productName);
            updateCartDisplay();
        }
    };

    // Adiciona um produto ao carrinho
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));
            const existingProduct = cart.find(item => item.name === productName);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }

            updateCartDisplay();
            toggleCartPopup();
        });
    });
});