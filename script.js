function renderItems(items) {
    const container = document.getElementById('itemsContainer');
    container.innerHTML = '';
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item-card';
        div.innerHTML = `
            <div class="emoji">${item.emoji}</div>
            <div class="name">${item.name}</div>
            <button onclick="addToManifest('${item.name}')" class="add-btn">ADD +</button>
        `;
        container.appendChild(div);
    });
}

function addToManifest(itemName) {
    const list = document.getElementById('activeList');
    const li = document.createElement('div');
    li.className = 'manifest-item';
    li.innerHTML = `<span>[ ]</span> ${itemName}`;
    list.appendChild(li);
}

document.getElementById('mainSearch').addEventListener('input', (e) => {
    const term = e.target.value.toUpperCase();
    renderItems(MASTER_ITEMS.filter(i => i.name.includes(term)));
});

document.getElementById('catSelect').addEventListener('change', (e) => {
    const cat = e.target.value;
    renderItems(cat === 'ALL' ? MASTER_ITEMS : MASTER_ITEMS.filter(i => i.cat === cat));
});

renderItems(MASTER_ITEMS);