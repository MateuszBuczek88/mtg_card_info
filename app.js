// Scryfall API Base URLs
const API_BASE = 'https://api.scryfall.com/cards';

// DOM Elements
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error-message');
const infoEl = document.getElementById('info-message');
const resultsContainer = document.getElementById('results-container');
const multiResultsContainer = document.getElementById('multi-results-container');
const cardList = document.getElementById('card-list');

// Event Listeners
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;

    await searchCard(query);
});

// Hide all states
function formatReset() {
    loadingEl.classList.add('hidden');
    errorEl.classList.add('hidden');
    infoEl.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    multiResultsContainer.classList.add('hidden');
    resultsContainer.innerHTML = '';
    cardList.innerHTML = '';
}

function showLoading() {
    formatReset();
    loadingEl.classList.remove('hidden');
}

function showError(msg) {
    formatReset();
    errorEl.textContent = msg;
    errorEl.classList.remove('hidden');
}

function showInfo(msg) {
    infoEl.textContent = msg;
    infoEl.classList.remove('hidden');
}

async function searchCard(query) {
    showLoading();

    try {
        // Try exact match first
        const exactRes = await fetch(`${API_BASE}/named?exact=${encodeURIComponent(query)}`);
        
        if (exactRes.ok) {
            const card = await exactRes.json();
            renderExactMatch(card);
            return;
        }

        // If exact match fails, try fuzzy or general search
        const searchRes = await fetch(`${API_BASE}/search?q=${encodeURIComponent(query)}`);
        const searchData = await searchRes.json();

        if (searchData.object === 'error') {
            showError(searchData.details || 'Card not found. Try a different query.');
            return;
        }

        const cards = searchData.data;

        if (cards.length === 1) {
            renderExactMatch(cards[0]);
        } else if (cards.length > 1) {
            renderMultiMatch(cards);
        } else {
            showError('No cards found matching your query.');
        }

    } catch (err) {
        showError('Network error. Please try again.');
        console.error(err);
    }
}

async function fetchCardById(id) {
    showLoading();
    try {
        const res = await fetch(`${API_BASE}/${id}`);
        if (!res.ok) throw new Error('Card not found');
        const card = await res.json();
        renderExactMatch(card);
    } catch (err) {
        showError('Failed to fetch card details.');
    }
}

function renderMultiMatch(cards) {
    formatReset();
    multiResultsContainer.classList.remove('hidden');
    
    // Deduplicate by name if user just searched a partial name that has many printings
    // Scryfall /search usually returns distinct cards unless specified, but to be safe:
    const uniqueCards = [];
    const seenNames = new Set();
    
    for (const card of cards) {
        if (!seenNames.has(card.name)) {
            uniqueCards.push(card);
            seenNames.add(card.name);
        }
    }

    uniqueCards.forEach(card => {
        const li = document.createElement('li');
        li.className = 'card-list-item';
        
        const nameSpan = document.createElement('span');
        nameSpan.className = 'card-name';
        nameSpan.textContent = card.name;
        
        const setSpan = document.createElement('span');
        setSpan.className = 'card-set';
        setSpan.textContent = `${card.set_name} • ${card.type_line}`;

        li.appendChild(nameSpan);
        li.appendChild(setSpan);

        li.addEventListener('click', () => {
            fetchCardById(card.id);
        });

        cardList.appendChild(li);
    });
}

function generateCardText(card) {
    let powerToughness = '';
    if (card.power && card.toughness) {
        powerToughness = `\nPower/Toughness: ${card.power}/${card.toughness}`;
    } else if (card.loyalty) {
        powerToughness = `\nLoyalty: ${card.loyalty}`;
    }

    const colorIdentity = card.color_identity && card.color_identity.length > 0
        ? card.color_identity.join(', ')
        : 'Colorless';
        
    // Handle double-faced cards colors
    let cardColors = card.colors;
    if (!cardColors && card.card_faces) {
        // combine colors from both faces if missing at top level
        const faceColors = new Set();
        card.card_faces.forEach(face => {
            if (face.colors) face.colors.forEach(c => faceColors.add(c));
        });
        cardColors = Array.from(faceColors);
    }

    const colors = cardColors && cardColors.length > 0
        ? cardColors.join(', ')
        : 'Colorless';

    // Handle double-faced cards oracle text and mana costs
    let oracleText = '';
    let manaCost = card.mana_cost || 'None';
    
    if (card.card_faces && card.card_faces.length > 1) {
        oracleText = card.card_faces.map(face => `--- ${face.name} ---\n${face.oracle_text || ''}`).join('\n\n');
        manaCost = card.card_faces.map(face => face.mana_cost).filter(Boolean).join(' // ') || 'None';
    } else {
        oracleText = card.oracle_text || '';
    }

    return `Card Name: ${card.name}
Mana Cost: ${manaCost}
Type: ${card.type_line}
Color(s): ${colors}
Color Identity: ${colorIdentity}${powerToughness}

Oracle Text:
${oracleText}`;
}

function renderExactMatch(card) {
    formatReset();
    
    // Handle split/transform cards for image
    let imageUrl = '';
    if (card.image_uris && card.image_uris.normal) {
        imageUrl = card.image_uris.normal;
    } else if (card.card_faces && card.card_faces[0].image_uris && card.card_faces[0].image_uris.normal) {
        imageUrl = card.card_faces[0].image_uris.normal;
    } else {
        // Fallback or missing image
        imageUrl = 'https://via.placeholder.com/300x418?text=No+Image+Available';
    }

    const cardText = generateCardText(card);

    resultsContainer.innerHTML = `
        <div class="card-result">
            <div class="card-image-container">
                <img src="${imageUrl}" alt="${card.name}" class="card-image">
            </div>
            <div class="card-info-box">
                <div class="card-info-content" id="card-text-content">${cardText}</div>
                <button id="copy-btn" class="copy-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    Copy for AI
                </button>
            </div>
        </div>
    `;

    resultsContainer.classList.remove('hidden');

    // Add copy listener
    const copyBtn = document.getElementById('copy-btn');
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(cardText).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!`;
            copyBtn.classList.add('copied');
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy text to clipboard');
        });
    });
}
