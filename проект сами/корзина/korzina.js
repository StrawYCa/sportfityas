document.addEventListener('DOMContentLoaded', () => {
    // Обработка кнопок плюс/минус
    document.querySelectorAll('.product-card').forEach(card => {
        const plusBtn = card.querySelector('.plus');
        const minusBtn = card.querySelector('.minus');
        const qtyValue = card.querySelector('.qty-value');
        const buyBtn = card.querySelector('.buy-button');

        plusBtn.addEventListener('click', () => {
            qtyValue.innerText = parseInt(qtyValue.innerText) + 1;
        });

        minusBtn.addEventListener('click', () => {
            let current = parseInt(qtyValue.innerText);
            if (current > 1) qtyValue.innerText = current - 1;
        });

        // Клик по кнопке "Купить"
        buyBtn.addEventListener('click', () => {
            const count = parseInt(qtyValue.innerText);
            updateCart(count);
            
            // Визуальный отклик
            buyBtn.innerText = "В КОРЗИНЕ";
            setTimeout(() => buyBtn.innerText = "КУПИТЬ", 1000);
        });
    });

    let totalInCart = 0;
    function updateCart(num) {
        totalInCart += num;
        document.getElementById('cart-count').innerText = totalInCart;
    }
});
