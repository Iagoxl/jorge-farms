function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        
    } else {
        menuMobile.classList.add('open');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let subtotal = 0;
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
    const subtotalDisplay = document.getElementById('subtotal');

    // Função para atualizar o subtotal exibido
    function updateSubtotal() {
        subtotalDisplay.textContent = subtotal.toFixed(2).replace('.', ',');
    }

    // Função para adicionar ao carrinho
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productPrice = parseFloat(button.previousElementSibling.textContent.replace('R$ ', '').replace(',', '.'));
            subtotal += productPrice;
            updateSubtotal();
        });
    });

    // Função para remover do carrinho
    removeFromCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productPrice = parseFloat(button.previousElementSibling.previousElementSibling.textContent.replace('R$ ', '').replace(',', '.'));
            subtotal -= productPrice;
            if (subtotal < 0) subtotal = 0; // Evitar subtotal negativo
            updateSubtotal();
        });
    });
});
