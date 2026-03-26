document.addEventListener('DOMContentLoaded', initApp);

/* FAMILY CONFIGURATION (Same as main site but cleaner for app) */
const FAMILIES = {
    "carnes": { icon: "🍖", label: "Meat & Fire" },
    "pescados": { icon: "🐟", label: "Vitamin Sea" },
    "arroces": { icon: "🍚", label: "Rice & Love" },
    "pastas": { icon: "🍝", label: "Fideos & Co." },
    "desayunos": { icon: "☕", label: "Morning Glory" },
    "huevos": { icon: "🥚", label: "Egg-cellent" },  // Fixed ID from 'huevos' to match
    "tapas": { icon: "🥘", label: "Tapas Time" },
    "postres": { icon: "🍰", label: "Sweet Dreams" },
    "only_vegetal": { icon: "🥗", label: "Green Power" }
};

// State
let navigationHistory = [];

function initApp() {
    console.log("App de Bolsillo Iniciada - La Mesa de Sal y Olivo");

    // Setup Navigation
    document.getElementById('btn-back').addEventListener('click', goBack);
    document.getElementById('btn-home').addEventListener('click', goHome);

    // Initial Render
    goHome();
}

/* --- NAVIGATION SYSTEM --- */

function navigateTo(viewName, data = null) {
    // Push current logic to history if needed? 
    // Simplified: Just render view.

    const contentDiv = document.getElementById('main-content');
    contentDiv.innerHTML = ''; // Clear current
    document.getElementById('app-container').scrollTo(0, 0); // Scroll top

    // Update Header Buttons
    const btnBack = document.getElementById('btn-back');
    const btnHome = document.getElementById('btn-home');

    if (viewName === 'HOME') {
        renderHome(contentDiv);
        btnBack.classList.add('hidden');
        btnHome.classList.add('hidden');
    } else if (viewName === 'LIST') {
        renderList(contentDiv, data);
        btnBack.classList.remove('hidden');
        btnHome.classList.remove('hidden');
    } else if (viewName === 'RECIPE') {
        renderRecipeDetail(contentDiv, data);
        btnBack.classList.remove('hidden');
        btnHome.classList.remove('hidden');
    }

    // Save history
    if (viewName !== 'HOME') {
        // If we are navigating deeper, push to history
        // If we are going back, pop (handled in goBack)
    }

    // Simple History Stack for "Back" button
    // (We implement a manual stack for SPA feel)
    const currentState = { view: viewName, data: data };
    const lastState = navigationHistory[navigationHistory.length - 1];

    // Avoid duplicate pushes if re-rendering or same view
    if (!lastState || (lastState.view !== viewName || JSON.stringify(lastState.data) !== JSON.stringify(data))) {
        navigationHistory.push(currentState);
    }
}

function goBack() {
    if (navigationHistory.length > 1) {
        navigationHistory.pop(); // Remove current
        const previous = navigationHistory[navigationHistory.length - 1]; // Peek previous

        // Manual render without pushing to history again
        const contentDiv = document.getElementById('main-content');
        contentDiv.innerHTML = '';
        document.getElementById('app-container').scrollTo(0, 0);

        const btnBack = document.getElementById('btn-back');
        const btnHome = document.getElementById('btn-home');

        if (previous.view === 'HOME') {
            renderHome(contentDiv);
            btnBack.classList.add('hidden');
            btnHome.classList.add('hidden');
        } else if (previous.view === 'LIST') {
            renderList(contentDiv, previous.data);
            btnBack.classList.remove('hidden');
            btnHome.classList.remove('hidden');
        } else if (previous.view === 'RECIPE') {
            // Rare case going back to recipe
            renderRecipeDetail(contentDiv, previous.data);
        }
    } else {
        goHome();
    }
}

function goHome() {
    navigationHistory = []; // Reset
    navigateTo('HOME');
}

/* --- RENDERERS --- */

function renderHome(container) {
    const tpl = document.getElementById('tpl-home');
    const clone = tpl.content.cloneNode(true);
    const grid = clone.querySelector('.categories-grid');

    // Create Category Cards
    for (const [key, info] of Object.entries(FAMILIES)) {
        const card = document.createElement('div');
        card.className = 'cat-card';
        card.onclick = () => navigateTo('LIST', key);

        card.innerHTML = `
            <span class="cat-icon">${info.icon}</span>
            <div class="cat-name">${info.label}</div>
        `;
        grid.appendChild(card);
    }

    container.appendChild(clone);
}

function renderList(container, familyKey) {
    const tpl = document.getElementById('tpl-list');
    const clone = tpl.content.cloneNode(true);

    // Set Title
    const familyInfo = FAMILIES[familyKey] || { label: "Platos", icon: "🍽" };
    clone.querySelector('#list-title').innerText = `${familyInfo.icon} ${familyInfo.label}`;

    // Filter Recipes
    // recipesData comes from data.js
    const recipes = recipesData.filter(r => {
        if (Array.isArray(r.family)) {
            return r.family.includes(familyKey);
        }
        return r.family === familyKey;
    });
    const listContainer = clone.querySelector('#recipe-list-container');

    if (recipes.length === 0) {
        listContainer.innerHTML = "<p style='text-align:center; color:#999;'>No hay recetas en esta categoría aún.</p>";
    } else {
        recipes.forEach(recipe => {
            const item = document.createElement('div');
            item.className = 'recipe-list-item';
            item.onclick = () => navigateTo('RECIPE', recipe.id);

            item.innerHTML = `
                <img src="${recipe.image || 'assets/images/default.png'}" class="list-thumb" alt="${recipe.title}">
                <div class="list-info">
                    <h3>${recipe.title}</h3>
                    <div class="list-meta">
                        <span>⏰ ${recipe.time} min</span>
                        <span>👥 ${recipe.servings} pax</span>
                    </div>
                </div>
            `;
            listContainer.appendChild(item);
        });
    }

    container.appendChild(clone);
}

function renderRecipeDetail(container, recipeId) {
    const recipe = recipesData.find(r => r.id === recipeId);
    if (!recipe) return;

    const tpl = document.getElementById('tpl-recipe');
    const clone = tpl.content.cloneNode(true);

    // Populate Data
    const img = clone.querySelector('#r-image');
    img.src = recipe.image || 'assets/images/default.png';

    clone.querySelector('#r-title').innerText = recipe.title;
    clone.querySelector('#r-time').innerText = `⏰ ${recipe.time} min`;
    clone.querySelector('#r-servings').innerText = `👥 ${recipe.servings} pax`;
    clone.querySelector('#r-difficulty').innerText = `🔥 ${recipe.difficulty}`;

    // Ingredients
    const ingList = clone.querySelector('#r-ingredients');
    recipe.ingredients.forEach(ing => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${ing.name}</span>
            <b>${ing.amount} ${ing.unit}</b>
        `;
        ingList.appendChild(li);
    });

    // Steps
    const stepsContainer = clone.querySelector('#r-steps');
    recipe.steps.forEach((step, index) => {
        const div = document.createElement('div');
        div.className = 'step-item';
        div.innerHTML = `
            <div class="step-num">${index + 1}</div>
            <div class="step-text">
                <h4>${step.title}</h4>
                <p>${step.desc}</p>
            </div>
        `;
        stepsContainer.appendChild(div);
    });

    container.appendChild(clone);
}
