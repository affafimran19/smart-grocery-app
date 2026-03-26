const catalogGrid = document.getElementById('catalogGrid');
const shoppingListDiv = document.getElementById('shoppingList');
const mainSearch = document.getElementById('mainSearch');
const catSelect = document.getElementById('catSelect');
const aiBtn = document.getElementById('aiBtn');
const aiResponse = document.getElementById('aiResponse');

let userList = JSON.parse(localStorage.getItem('mySmartList')) || [];

// 1. Render Catalog
function displayCatalog(filter = "ALL", search = "") {
    catalogGrid.innerHTML = '';
    const filtered = MASTER_ITEMS.filter(item => {
        const matchesCat = filter === "ALL" || item.cat === filter;
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
        return matchesCat && matchesSearch;
    });

    filtered.forEach(item => {
        const el = document.createElement('div');
        el.className = 'item-card';
        el.innerHTML = `${item.emoji}<br>${item.name}`;
        el.onclick = () => addItem(item.name, item.emoji);
        catalogGrid.appendChild(el);
    });
}

// 2. Add Item to List
function addItem(name, emoji) {
    userList.push({ id: Date.now(), name, emoji, completed: false });
    saveAndRender();
}

// 3. Save to LocalStorage and Render UI
function saveAndRender() {
    localStorage.setItem('mySmartList', JSON.stringify(userList));
    shoppingListDiv.innerHTML = userList.map(item => `
        <div class="list-item ${item.completed ? 'completed' : ''}">
            <span>${item.emoji} ${item.name}</span>
            <div>
                <button onclick="toggleItem(${item.id})">✔️</button>
                <button onclick="removeItem(${item.id})">❌</button>
            </div>
        </div>
    `).join('');
}

// 4. Toggle & Remove
window.toggleItem = (id) => {
    const item = userList.find(i => i.id === id);
    item.completed = !item.completed;
    saveAndRender();
};

window.removeItem = (id) => {
    userList = userList.filter(i => i.id !== id);
    saveAndRender();
};

// 5. Groq AI Integration (Secure Version)
aiBtn.onclick = async () => {
    aiResponse.innerText = "CONSULTING AI SYSTEM...";
    const itemsText = userList.map(i => i.name).join(", ");
    
    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                // Hum key ko Vercel settings se handle karenge
                'Authorization': 'Bearer ', 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [{ role: "user", content: `Based on these groceries: ${itemsText}, give a 1-sentence cooking tip or household hack.` }]
            })
        });
        const data = await response.json();
        aiResponse.innerText = data.choices[0].message.content;
    } catch (err) {
        aiResponse.innerText = "ERROR CONNECTING TO AI.";
    }
};

// Event Listeners
mainSearch.oninput = (e) => displayCatalog(catSelect.value, e.target.value);
catSelect.onchange = (e) => displayCatalog(e.target.value, mainSearch.value);

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(() => console.log("SERVICE WORKER: REGISTERED"))
            .catch(err => console.log("SW ERROR:", err));
    });
}

// Initialize
displayCatalog();
saveAndRender();