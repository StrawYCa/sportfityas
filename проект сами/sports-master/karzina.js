const products = [
    { id: 1, name: "Название товара", price: 45, img: "https://via.placeholder.com/100/ff4444/ffffff?text=PROTEIN" },
    { id: 2, name: "Название товара", price: 45, img: "https://via.placeholder.com/100/4444ff/ffffff?text=GEAR" },
    { id: 3, name: "Название товара", price: 45, img: "https://via.placeholder.com/100/44ff44/ffffff?text=AMINO" },
    { id: 4, name: "Название товара", price: 45, img: "https://via.placeholder.com/100/ff44ff/ffffff?text=PROTEIN" },
];

function renderProducts() {
    const list = document.getElementById('productList');
    list.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-image">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="product-info">
                <div class="price">$${p.price}</div>
                <div class="title">${p.name}</div>
                
                <div class="actions">
                    <div class="counter">
                        <button onclick="changeQty(${p.id}, -1)">-</button>
                        <span id="qty-${p.id}">1</span>
                        <button onclick="changeQty(${p.id}, 1)">+</button>
                    </div>
                    <button class="buy-btn" onclick="buy(${p.id})">Купить</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Логика изменения количества
function changeQty(id, delta) {
    const qtyElement = document.getElementById(`qty-${id}`);
    let currentQty = parseInt(qtyElement.innerText);
    currentQty += delta;

    if (currentQty < 1) currentQty = 1; // Минимум 1
    qtyElement.innerText = currentQty;
}

function buy(id) {
    const qty = document.getElementById(`qty-${id}`).innerText;
    alert(`Товар (ID: ${id}) добавлен в корзину в количестве: ${qty}`);
}

renderProducts();
