// Scryfall API Base URLs
const API_BASE = 'https://api.scryfall.com/cards';

// Language Prompts
const PROMPTS = {
    en: "Please explain this card to me",
    pl: "Proszę wytłumacz mi tę kartę",
    es: "Por favor, explícame esta carta"
};
let currentLanguage = 'en';

// Tooltip variable
let globalTooltip = null;

function createTooltip() {
    if (globalTooltip) return globalTooltip;
    globalTooltip = document.createElement('div');
    globalTooltip.className = 'keyword-tooltip hidden';
    document.body.appendChild(globalTooltip);

    globalTooltip.addEventListener('mouseleave', (e) => {
        if (!e.relatedTarget || !e.relatedTarget.classList.contains('keyword-badge')) {
            globalTooltip.classList.add('hidden');
        }
    });

    return globalTooltip;
}

/**
 * Extracts keywords from both Scryfall metadata and Oracle Text.
 */
function getCardKeywords(card) {
    const rawKeywords = new Set();

    // 1. Add metadata keywords ONLY if they have a definition in our master list
    if (card.keywords && typeof KEYWORDS_DATA !== 'undefined') {
        card.keywords.forEach(k => {
            const lowerK = k.toLowerCase().trim();
            // Basic match or partial match fallback (consistent with tooltip logic)
            if (KEYWORDS_DATA[lowerK]) {
                rawKeywords.add(lowerK);
            } else {
                const knownKeywords = Object.keys(KEYWORDS_DATA);
                const foundBase = knownKeywords.find(base => lowerK.includes(base));
                if (foundBase) rawKeywords.add(foundBase);
            }
        });
    }

    // 2. Get oracle text from all faces
    let oracleText = '';
    if (card.card_faces) {
        oracleText = card.card_faces.map(f => f.oracle_text || '').join(' ');
    } else {
        oracleText = card.oracle_text || '';
    }

    // 3. Scan oracle text for known keywords from KEYWORDS_DATA
    if (typeof KEYWORDS_DATA !== 'undefined') {
        const knownKeywords = Object.keys(KEYWORDS_DATA);
        knownKeywords.forEach(keyword => {
            const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`\\b${escaped}\\b`, 'gi');

            if (regex.test(oracleText)) {
                rawKeywords.add(keyword);
            }
        });
    }

    // 4. Convert to display format (Capitalized First Letter)
    const finalKeywords = new Set();
    Array.from(rawKeywords).forEach(k => {
        finalKeywords.add(k.charAt(0).toUpperCase() + k.slice(1).toLowerCase());
    });

    return Array.from(finalKeywords).sort();
}

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

// Helper for Scryfall rate limit compliance (50-100ms recommended, using 500ms per user request)
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

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

        // Add 500ms delay before secondary fallback request to respect Scryfall API limits
        await delay(500);

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

    const keywords = getCardKeywords(card);
    const keywordText = keywords.length > 0
        ? `\nKeywords: ${keywords.join(', ')}`
        : '';

    return `Card Name: ${card.name}
Mana Cost: ${manaCost}
Type: ${card.type_line}
Color(s): ${colors}
Color Identity: ${colorIdentity}${powerToughness}${keywordText}

Oracle Text:
${oracleText}`;
}

function renderExactMatch(card) {
    formatReset();

    // Handle split/transform cards for image
    let imageUrl = '';
    let backImageUrl = '';
    let isDoubleFaced = false;

    if (card.card_faces && card.card_faces[0].image_uris && card.card_faces[1] && card.card_faces[1].image_uris) {
        // True double faced card (e.g., MDFC or Transform)
        isDoubleFaced = true;
        imageUrl = card.card_faces[0].image_uris.normal;
        backImageUrl = card.card_faces[1].image_uris.normal;
    } else if (card.image_uris && card.image_uris.normal) {
        // Standard card
        imageUrl = card.image_uris.normal;
    } else {
        // Fallback or missing image
        imageUrl = 'https://via.placeholder.com/300x418?text=No+Image+Available';
    }

    const cardText = generateCardText(card);

    resultsContainer.innerHTML = `
        <div class="card-result">
            <div class="card-visuals">
                <div class="card-image-container ${isDoubleFaced ? 'is-double-faced' : ''}" id="card-image-container">
                    <div class="card-flipper" id="card-flipper">
                        <div class="card-front">
                            <img src="${imageUrl}" alt="${card.name}" class="card-image">
                        </div>
                        ${isDoubleFaced ? `
                        <div class="card-back">
                            <img src="${backImageUrl}" alt="${card.name} (Back)" class="card-image">
                        </div>
                        ` : ''}
                    </div>
                    ${isDoubleFaced ? `
                    <div class="flip-btn" id="flip-btn" title="Click to flip">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.21l-5.36-2.04"></path></svg>
                    </div>
                    ` : ''}
                </div>
                <div class="card-keywords-container" id="keyword-badges">
                    ${getCardKeywords(card).map(keyword => `
                        <div class="keyword-badge" data-keyword="${keyword}">${keyword}</div>
                    `).join('')}
                </div>
            </div>
            <div class="card-info-box">
                <div class="flags-container">
                    <button class="lang-flag ${currentLanguage === 'en' ? 'active' : ''}" data-lang="en" title="English"><span class="fi fi-gb"></span></button>
                    <button class="lang-flag ${currentLanguage === 'pl' ? 'active' : ''}" data-lang="pl" title="Polski"><span class="fi fi-pl"></span></button>
                    <button class="lang-flag ${currentLanguage === 'es' ? 'active' : ''}" data-lang="es" title="Español"><span class="fi fi-es"></span></button>
                </div>
                <textarea id="ai-prompt-input" class="ai-prompt-input">${PROMPTS[currentLanguage]}</textarea>
                <div class="card-info-content" id="card-text-content">${cardText}</div>
                <button id="copy-btn" class="copy-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    Copy for AI
                </button>
            </div>
        </div>
    `;

    resultsContainer.classList.remove('hidden');

    // Add flip listener if double faced
    if (isDoubleFaced) {
        const imageContainer = document.getElementById('card-image-container');
        const cardFlipper = document.getElementById('card-flipper');

        imageContainer.addEventListener('click', () => {
            cardFlipper.classList.toggle('flipped');
        });
    }

    // Add keyword tooltip listeners
    const keywordBadges = document.querySelectorAll('.keyword-badge');
    const tooltip = createTooltip();

    let hideTimeout = null;

    function showTooltip(badge) {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
        const keyword = (badge.dataset.keyword || '').toLowerCase();

        // Determine data source based on language
        let dataSource = KEYWORDS_DATA;
        if (currentLanguage === 'pl' && typeof KEYWORDS_DATA_PL !== 'undefined') dataSource = KEYWORDS_DATA_PL;
        if (currentLanguage === 'es' && typeof KEYWORDS_DATA_ES !== 'undefined') dataSource = KEYWORDS_DATA_ES;

        let def = dataSource[keyword];

        // Partial match fallback within the localized source
        if (!def) {
            const knownKeywords = Object.keys(dataSource);
            const foundBase = knownKeywords.find(k => keyword.includes(k));
            if (foundBase) def = dataSource[foundBase];
        }

        // Global fallback to English if translation is missing
        if (!def && dataSource !== KEYWORDS_DATA) {
            def = KEYWORDS_DATA[keyword];
            if (!def) {
                const enKeywords = Object.keys(KEYWORDS_DATA);
                const foundEnBase = enKeywords.find(k => keyword.includes(k));
                if (foundEnBase) def = KEYWORDS_DATA[foundEnBase];
            }
        }

        if (def) {
            const btnTexts = {
                en: { more: "Read More", less: "Show Less" },
                pl: { more: "Czytaj więcej", less: "Pokaż mniej" },
                es: { more: "Leer más", less: "Mostrar menos" }
            };
            const labels = btnTexts[currentLanguage] || btnTexts.en;

            tooltip.innerHTML = `
                <div class="tooltip-content">
                    <div class="def-short">${def.short}</div>
                    ${def.long ? `<button class="expand-def-btn">${labels.more}</button><div class="def-long hidden">${def.long}</div>` : ''}
                </div>
            `;

            tooltip.classList.remove('hidden');

            const rect = badge.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`; // Reduced gap

            const expandBtn = tooltip.querySelector('.expand-def-btn');
            if (expandBtn) {
                expandBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const longDef = tooltip.querySelector('.def-long');
                    longDef.classList.toggle('hidden');
                    const isHidden = longDef.classList.contains('hidden');
                    expandBtn.textContent = isHidden ? labels.more : labels.less;
                });
            }
        } else {
            tooltip.classList.add('hidden');
        }
    }

    function hideTooltip() {
        hideTimeout = setTimeout(() => {
            tooltip.classList.add('hidden');
        }, 200); // 200ms grace period
    }

    keywordBadges.forEach(badge => {
        badge.addEventListener('mouseenter', () => showTooltip(badge));
        badge.addEventListener('click', (e) => {
            e.stopPropagation();
            showTooltip(badge);
        });

        badge.addEventListener('mouseleave', () => hideTooltip());
    });

    tooltip.addEventListener('mouseenter', () => {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
    });

    tooltip.addEventListener('mouseleave', () => hideTooltip());

    document.addEventListener('click', () => {
        tooltip.classList.add('hidden');
    });

    // Add language flag listeners
    const langFlags = document.querySelectorAll('.lang-flag');
    const aiPromptInput = document.getElementById('ai-prompt-input');

    langFlags.forEach(flag => {
        flag.addEventListener('click', () => {
            currentLanguage = flag.dataset.lang;
            document.querySelectorAll('.lang-flag').forEach(f => f.classList.remove('active'));
            flag.classList.add('active');
            aiPromptInput.value = PROMPTS[currentLanguage];
        });
    });

    // Add copy listener
    const copyBtn = document.getElementById('copy-btn');
    copyBtn.addEventListener('click', () => {
        const fullTextToCopy = `${aiPromptInput.value}\n\n${cardText}`;
        navigator.clipboard.writeText(fullTextToCopy).then(() => {
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
