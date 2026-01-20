// Estado de la aplicación
const state = {
    recipes: [],
    currentFamily: 'all',
    currentOccasion: null,
    searchTerm: '',
    activeRecipe: null,
    currentPortions: 0
};

// Referencias DOM
const recipesContainer = document.getElementById('recipes-container');
const searchInput = document.getElementById('search-input');
const modal = document.getElementById('recipe-modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.querySelector('.close-modal');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    if (typeof recipesData !== 'undefined') {
        state.recipes = recipesData;
        renderRecipes();
    }
    setupEventListeners();
});

function setupEventListeners() {
    // Buscador
    searchInput.addEventListener('input', (e) => {
        state.searchTerm = e.target.value.toLowerCase();
        renderRecipes();
    });

    // Cerrar modal
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target.closest('.modal-content')) return;
        closeModal();
    });
}

// Filtros
function filterByFamily(family) {
    state.currentFamily = family;
    state.currentOccasion = null; // Reseteamos ocasión al cambiar familia

    // UI Feedback
    document.querySelectorAll('.family-card').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.family === family);
    });
    // Limpiar active de ocasiones
    document.querySelectorAll('.occasion-chip').forEach(btn => btn.classList.remove('active'));

    renderRecipes();

    // Scroll suave a resultados
    document.getElementById('recipes-container').scrollIntoView({ behavior: 'smooth' });
}

function filterByOccasion(occasion) {
    state.currentOccasion = state.currentOccasion === occasion ? null : occasion; // Toggle

    // UI Feedback
    document.querySelectorAll('.occasion-chip').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === (state.currentOccasion || '').toLowerCase());
    });

    renderRecipes();
    document.getElementById('recipes-container').scrollIntoView({ behavior: 'smooth' });
}

function renderRecipes() {
    recipesContainer.innerHTML = '';

    // Lógica de filtrado
    const filtered = state.recipes.filter(r => {
        // Filtro Familia
        const matchFamily = state.currentFamily === 'all' || r.family === state.currentFamily;

        // Filtro Ocasión (si está activo)
        const matchOccasion = !state.currentOccasion || (r.occasion && r.occasion.includes(state.currentOccasion));

        // Filtro Búsqueda
        const matchSearch = r.title.toLowerCase().includes(state.searchTerm) ||
            r.searchKeywords.some(k => k.toLowerCase().includes(state.searchTerm));

        return matchFamily && matchOccasion && matchSearch;
    });

    // Renderizado
    if (filtered.length === 0) {
        recipesContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #777;">
            <h3>Lo sentimos</h3>
            <p>No hay recetas con esa combinación. ¡Prueba otra!</p>
        </div>`;
        return;
    }

    filtered.forEach(recipe => {
        const card = document.createElement('article');
        card.className = 'recipe-card';
        card.onclick = () => openRecipe(recipe);

        // Generar etiquetas visuales
        const tagsHtml = (recipe.occasion || []).slice(0, 2).map(o => `<span class="tag">${o}</span>`).join('');

        card.innerHTML = `
            <div class="card-image-container">
                <img src="${recipe.image}" alt="${recipe.title}" class="card-image" onerror="this.src='https://via.placeholder.com/400?text=Plato'">
            </div>
            <div class="card-content">
                <div class="card-tags">${tagsHtml}</div>
                <h3 class="card-title">${recipe.title}</h3>
                <div style="font-size: 0.9rem; color: #666;">
                    <span>⏱️ ${recipe.time} min</span> &bull; <span>🔥 ${recipe.difficulty}</span>
                </div>
            </div>
        `;
        recipesContainer.appendChild(card);
    });
}

// Lógica Modal (Igual que antes pero adaptado)
function openRecipe(recipe) {
    state.activeRecipe = recipe;
    state.currentPortions = recipe.servings;

    modalBody.innerHTML = `
        <div class="recipe-detail-header">
            <img src="${recipe.image}" class="recipe-detail-image" alt="${recipe.title}">
        </div>
        <div class="recipe-detail-body">
            <h2 class="recipe-detail-title">${recipe.title}</h2>
            
            <div class="portion-control">
                <span>Para</span>
                <button class="portion-btn" onclick="updatePortions(-1)">-</button>
                <span id="portion-display" style="font-weight: bold; width: 30px; text-align: center;">${state.currentPortions}</span>
                <button class="portion-btn" onclick="updatePortions(1)">+</button>
                <span>personas</span>
            </div>

            <h3 style="margin-bottom: 1rem; font-family: var(--font-heading);">Ingredientes</h3>
            <ul style="list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; margin-bottom: 2rem;">
                ${recipe.ingredients.map(ing => `
                    <li style="border-bottom: 1px solid #eee; padding: 5px;">
                        <strong class="ing-amount" data-base="${ing.amount}">${ing.amount}</strong> 
                        ${ing.unit} ${ing.name}
                    </li>
                `).join('')}
            </ul>

            <h3 style="margin-bottom: 1rem; font-family: var(--font-heading);">Preparación</h3>
            <div class="steps-list">
                ${recipe.steps.map((step, idx) => `
                    <div class="step-item">
                        <strong style="color: var(--primary-color)">Paso ${idx + 1}</strong>
                        ${step.title ? `<br><strong>${step.title}</strong>` : ''}
                        <p>${step.desc}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    modal.classList.add('visible');
    modal.classList.remove('hidden'); // Legacy support
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('visible');
    setTimeout(() => modal.classList.add('hidden'), 300); // Wait for transition
    document.body.style.overflow = '';
}

function updatePortions(delta) {
    const newPortions = state.currentPortions + delta;
    if (newPortions < 1) return;
    state.currentPortions = newPortions;

    // Actualizar display numérico
    document.getElementById('portion-display').innerText = state.currentPortions;

    // Actualizar cantidades
    document.querySelectorAll('.ing-amount').forEach(el => {
        const base = parseFloat(el.dataset.base);
        if (!isNaN(base)) {
            const newVal = (base * state.currentPortions) / state.activeRecipe.servings;
            // Formatear: si es entero mostrar entero, si no max 1 decimal
            el.innerText = newVal % 1 === 0 ? newVal : newVal.toFixed(1).replace('.', ',');
        }
    });
}

// --- GUÍA DE ALIMENTOS ---
const ingPanel = document.getElementById('ingredients-panel');
const ingGrid = document.getElementById('ingredients-grid');
const ingSearch = document.getElementById('ingredients-search');
let activeIngCategory = 'all';

function toggleIngredientsPanel() {
    const isHidden = ingPanel.classList.contains('hidden');
    if (isHidden) {
        ingPanel.classList.remove('hidden');
        ingPanel.classList.add('visible');
        document.body.style.overflow = 'hidden';
        renderIngredients();
        renderIngCategories();
    } else {
        ingPanel.classList.remove('visible');
        setTimeout(() => ingPanel.classList.add('hidden'), 300);
        document.body.style.overflow = '';
    }
}

function renderIngCategories() {
    const categories = ['all', ...new Set(ingredientsData.map(i => i.category))];
    const container = document.getElementById('ing-cat-filters');

    container.innerHTML = categories.map(cat => `
        <button class="occasion-chip ${activeIngCategory === cat ? 'active' : ''}" 
                onclick="filterIngCategory('${cat}')">
            ${cat === 'all' ? 'Todos' : cat}
        </button>
    `).join('');
}

function filterIngCategory(cat) {
    activeIngCategory = cat;
    renderIngCategories();
    renderIngredients();
}

function renderIngredients() {
    const term = ingSearch.value.toLowerCase();

    const filtered = ingredientsData.filter(ing => {
        const matchesTerm = ing.name.toLowerCase().includes(term) ||
            ing.benefits.toLowerCase().includes(term) ||
            ing.description.toLowerCase().includes(term) ||
            ing.category.toLowerCase().includes(term); // Enable searching by category "Zumos"
        const matchesCat = activeIngCategory === 'all' || ing.category === activeIngCategory;

        return matchesTerm && matchesCat;
    });

    if (filtered.length === 0) {
        ingGrid.innerHTML = `<p style="text-align:center; width:100%; grid-column:1/-1;">No se encontraron ingredientes.</p>`;
        return;
    }

    ingGrid.innerHTML = filtered.map(ing => `
        <div class="ingredient-card">
            <div class="ing-icon">${ing.emoji}</div>
            <div class="ing-content">
                <h3>${ing.name}</h3>
                <span class="ing-category">${ing.category}</span>
                <p><strong>Beneficios:</strong> ${ing.benefits}</p>
                <p>${ing.description}</p>
            </div>
        </div>
    `).join('');
}
