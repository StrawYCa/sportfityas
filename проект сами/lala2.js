const products = [
    { id: 1, name: 'BCAA Electrolyte', img: 'diva.png' },
    { id: 2, name: 'BCAA Electrolyte', img: 'diva.png' },
    { id: 3, name: 'BCAA Electrolyte', img: 'card.png' },
    { id: 4, name: 'BCAA Electrolyte', img: 'card.png' },
    { id: 5, name: 'BCAA Electrolyte', img: 'card.png' },
];

const grid = document.getElementById('productGrid');

function renderProducts() {
    let html = '';
    for (let i = 0; i < 42; i++) {
        const p = products[0]; 
        html += `
            <div class="product-card">
                <div class="card-image-box">
                    <img style='border-radius:15px;' src="${p.img}" alt="${p.name}">
                </div>
                <div class="actions">
        <!-- Кнопка с данными -->
                <button class="add-btn" 
                    data-id="1" 
                    data-name="Сывороточный ПРОТЕИН" 
                    data-price="760" 
                    data-image="image.png">Добавить в <img src='bin.png' class='bin'><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
            </div>
            
        `;
    }
    grid.innerHTML = html;
}

renderProducts();

// Находим поле поиска и все карточки
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.product-card');

// Слушаем каждое нажатие клавиши в поле поиска
searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase(); // Берем текст поиска и переводим в нижний регистр

    cards.forEach(card => {
        // Находим заголовок внутри конкретной карточки
        const title = card.querySelector('.product-name').textContent.toLowerCase();

        // Проверяем, входит ли поисковый запрос в название товара
        if (title.includes(filter)) {
            card.style.display = ""; // Показываем карточку (стандартное значение)
        } else {
            card.style.display = "none"; // Скрываем карточку
        }
    });
});

// Находим все кнопки "КУПИТЬ"
const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. Собираем данные о товаре из атрибутов кнопки
        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: button.dataset.price,
            image: button.dataset.image,
            quantity: 1 // По умолчанию 1 штука
        };

        // 2. Получаем текущую корзину из localStorage или создаем пустой массив
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // 3. Проверяем, есть ли уже такой товар в корзине
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += 1; // Если есть, увеличиваем кол-во
        } else {
            cart.push(product); // Если нет, добавляем новый
        }

        // 4. Сохраняем обновленную корзину обратно в localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Товар добавлен в корзину!');
    });
});
