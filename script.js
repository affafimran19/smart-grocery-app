function renderItems(items) {
    const container = document.getElementById('itemsContainer');
    container.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="emoji">${item.emoji}</div>
            <div class="name">${item.name}</div>
            <button onclick="addToManifest('${item.name}')" class="add-btn">ADD +</button>
        `;
        container.appendChild(card);
    });
}

function addToManifest(name) {
    const list = document.getElementById('activeList');
    const entry = document.createElement('div');
    entry.className = 'manifest-entry';
    entry.innerHTML = `<span>[ ]</span> ${name}`;
    list.appendChild(entry);
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