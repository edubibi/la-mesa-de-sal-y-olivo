const recipesData = [
    // --- HUEVOS ---
    {
        id: 1,
        title: "Tortilla de Patatas",
        family: "huevos",
        occasion: ["desayuno", "cena", "tapas", "comida"],
        time: 40,
        difficulty: "Media",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["huevo", "patata", "cebolla", "cena", "tapas", "pincho"],
        image: "assets/fotos_recetas/tortilla_de_patatas.png",
        ingredients: [
            { name: "Huevos grandes", amount: 6, unit: "uni" },
            { name: "Patatas", amount: 800, unit: "g" },
            { name: "Cebolla", amount: 1, unit: "uni" },
            { name: "Aceite de oliva", amount: 250, unit: "ml" },
            { name: "Sal", amount: 1, unit: "pizca" }
        ],
        steps: [
            { title: "Pochar", desc: "Cortar patatas y cebolla. Freír a fuego lento en abundante aceite hasta que estén tiernas." },
            { title: "Mezclar", desc: "Escurrir el aceite. Mezclar con los huevos batidos y sal. Reposar 5 min." },
            { title: "Cuajar", desc: "Cuajar en sartén con poco aceite, vuelta y vuelta al gusto." }
        ]
    },
    {
        id: 4,
        title: "Huevos Rotos con Jamón",
        family: "huevos",
        occasion: ["comida", "cena", "tapas", "brunch"],
        time: 25,
        difficulty: "Fácil",
        servings: 2,
        origin: "Madrid",
        searchKeywords: ["huevos estrellados", "jamón serrano", "patatas fritas"],
        image: "assets/fotos_recetas/huevos_rotos.png",
        ingredients: [
            { name: "Huevos", amount: 4, unit: "uni" },
            { name: "Patatas", amount: 4, unit: "uni" },
            { name: "Jamón Serrano", amount: 100, unit: "g" },
            { name: "Aceite de oliva", amount: 300, unit: "ml" },
            { name: "Sal", amount: 1, unit: "pizca" }
        ],
        steps: [
            { title: "Freír patatas", desc: "Pelar y cortar las patatas en bastones o panadera. Freír en aceite caliente hasta que doren." },
            { title: "Freír huevos", desc: "En el mismo aceite (retirando el exceso), freír los huevos dejando la yema líquida." },
            { title: "Montar", desc: "Poner patatas, huevos encima y romperlos con cuchillo y tenedor. Coronar con el jamón." }
        ]
    },

    // --- ARROCES ---
    {
        id: 2,
        title: "Paella Valenciana",
        family: "arroces",
        occasion: ["comida", "domingo"],
        time: 90,
        difficulty: "Alta",
        servings: 4,
        origin: "Valencia",
        searchKeywords: ["arroz", "pollo", "conejo", "socarrat"],
        image: "assets/fotos_recetas/paella_de_marisco.png",
        ingredients: [
            { name: "Arroz bomba", amount: 400, unit: "g" },
            { name: "Pollo", amount: 500, unit: "g" },
            { name: "Conejo", amount: 400, unit: "g" },
            { name: "Judía verde plana", amount: 200, unit: "g" },
            { name: "Garrofó", amount: 150, unit: "g" },
            { name: "Tomate triturado", amount: 150, unit: "g" },
            { name: "Azafrán", amount: 1, unit: "pizca" },
            { name: "Caldo/Agua", amount: 1.2, unit: "l" }
        ],
        steps: [
            { title: "Sofreír", desc: "Dorar muy bien la carne. Añadir verdura y luego tomate." },
            { title: "Caldo", desc: "Añadir agua, azafrán y dejar cocer 20 min." },
            { title: "Arroz", desc: "Añadir arroz, cocer 18 min (10 fuerte, 8 suave)." }
        ]
    },
    {
        id: 5,
        title: "Arroz Negro",
        family: "arroces",
        occasion: ["comida", "domingo"],
        time: 45,
        difficulty: "Media",
        servings: 4,
        origin: "Alicante/Cataluña",
        searchKeywords: ["sepia", "calamar", "tinta", "alioli"],
        image: "assets/fotos_recetas/arroz_negro.png", // Placeholder genérico arroz
        ingredients: [
            { name: "Arroz bomba", amount: 400, unit: "g" },
            { name: "Sepia limpia", amount: 2, unit: "uni" },
            { name: "Tinta de calamar", amount: 4, unit: "bolsas" },
            { name: "Caldo de pescado", amount: 1.2, unit: "l" },
            { name: "Tomate rallado", amount: 2, unit: "uni" },
            { name: "Ajo", amount: 2, unit: "dientes" }
        ],
        steps: [
            { title: "Sofreír", desc: "Sofreír la sepia troceada con el ajo. Añadir tomate." },
            { title: "Tinta y Arroz", desc: "Añadir tinta y arroz, sofreír un poco (nacarar)." },
            { title: "Cocer", desc: "Añadir caldo caliente. Cocer 18 min. Servir con alioli." }
        ]
    },

    // --- VERDURAS ---
    {
        id: 3,
        title: "Gazpacho Andaluz",
        family: "only_vegetal",
        occasion: ["comida", "cena", "entrante", "verano"],
        time: 15,
        difficulty: "Baja",
        servings: 4,
        origin: "Andalucía",
        searchKeywords: ["tomate", "verano", "sopa fria"],
        image: "assets/fotos_recetas/gazpacho_andaluz.png",
        ingredients: [
            { name: "Tomates pera", amount: 1, unit: "kg" },
            { name: "Pimiento verde", amount: 1, unit: "uni" },
            { name: "Pepino", amount: 1, unit: "uni" },
            { name: "Ajo", amount: 1, unit: "diente" },
            { name: "Aceite", amount: 50, unit: "ml" },
            { name: "Vinagre", amount: 30, unit: "ml" }
        ],
        steps: [
            { title: "Triturar", desc: "Batir todos los ingredientes limpios hasta obtener una crema fina." },
            { title: "Enfriar", desc: "Refrigerar al menos 2 horas antes de servir." }
        ]
    },
    {
        id: 6,
        title: "Pisto Manchego",
        family: "only_vegetal",
        occasion: ["comida", "cena", "tapas"],
        time: 50,
        difficulty: "Media",
        servings: 4,
        origin: "La Mancha",
        searchKeywords: ["calabacín", "pimiento", "tomate frito"],
        image: "assets/fotos_recetas/pisto_manchego.png", // Ratatouille lookalike
        ingredients: [
            { name: "Calabacín", amount: 1, unit: "uni" },
            { name: "Pimiento rojo", amount: 1, unit: "uni" },
            { name: "Pimiento verde", amount: 1, unit: "uni" },
            { name: "Cebolla", amount: 1, unit: "uni" },
            { name: "Tomate frito casero", amount: 400, unit: "g" },
            { name: "Aceite de oliva", amount: 50, unit: "ml" }
        ],
        steps: [
            { title: "Pochar cebolla y pimiento", desc: "Sofreír cebolla y pimientos troceados a fuego lento (15 min)." },
            { title: "Añadir calabacín", desc: "Incorporar calabacín en dados. Cocinar otros 15 min." },
            { title: "Tomate", desc: "Añadir el tomate frito y cocinar todo junto 10 min más." }
        ]
    },
    {
        id: 7,
        title: "Salmorejo Cordobés",
        family: "only_vegetal",
        occasion: ["comida", "entrante", "verano", "tapas"],
        time: 15,
        difficulty: "Fácil",
        servings: 4,
        origin: "Córdoba",
        searchKeywords: ["tomate", "crema", "pan"],
        image: "assets/fotos_recetas/salmorejo_cordobes.png",
        ingredients: [
            { name: "Tomates rojos", amount: 1, unit: "kg" },
            { name: "Pan de telera (miga)", amount: 200, unit: "g" },
            { name: "Aceite virgen extra", amount: 100, unit: "ml" },
            { name: "Ajo", amount: 1, unit: "diente" },
            { name: "Sal", amount: 1, unit: "pizca" },
            { name: "Huevo duro (decorar)", amount: 2, unit: "uni" },
            { name: "Jamón (decorar)", amount: 50, unit: "g" }
        ],
        steps: [
            { title: "Triturar", desc: "Batir tomate, ajo y sal. Añadir el pan y dejar empapar." },
            { title: "Emulsionar", desc: "Añadir el aceite poco a poco mientras se bate para que emulsione y espese." },
            { title: "Servir", desc: "Servir frío con huevo picado y jamón por encima." }
        ]
    },

    // --- CARNES ---
    {
        id: 8,
        title: "Fabada Asturiana",
        family: "carnes",
        occasion: ["comida", "invierno", "domingo"],
        time: 180,
        difficulty: "Media",
        servings: 4,
        origin: "Asturias",
        searchKeywords: ["fabes", "chorizo", "morcilla", "guiso"],
        image: "assets/fotos_recetas/fabada_asturiana.png", // Bean stew generic
        ingredients: [
            { name: "Fabes de la Granja", amount: 500, unit: "g" },
            { name: "Chorizo asturiano", amount: 2, unit: "uni" },
            { name: "Morcilla asturiana", amount: 2, unit: "uni" },
            { name: "Panceta curada", amount: 200, unit: "g" },
            { name: "Azafrán", amount: 1, unit: "pizca" },
            { name: "Agua", amount: 2, unit: "l" }
        ],
        steps: [
            { title: "Remojo", desc: "Poner las fabes en remojo la noche anterior." },
            { title: "Cocer", desc: "Poner fabes y compango (carnes) en olla cubiertas de agua. Cocer a fuego muy lento 2-3 horas." },
            { title: "Asustar", desc: "Echar un chorro de agua fría 2 o 3 veces durante la cocción para cortar el hervor (asustar las fabes)." }
        ]
    },
    {
        id: 9,
        title: "Croquetas de Jamón",
        family: "carnes",
        occasion: ["tapas", "entrante", "cena", "brunch"],
        time: 60,
        difficulty: "Media",
        servings: 6,
        origin: "Nacional",
        searchKeywords: ["bechamel", "frito", "tapa reina"],
        image: "assets/fotos_recetas/croquetas_de_jamon.png",
        ingredients: [
            { name: "Jamón serrano picado", amount: 200, unit: "g" },
            { name: "Harina", amount: 100, unit: "g" },
            { name: "Mantequilla", amount: 100, unit: "g" },
            { name: "Leche entera", amount: 1, unit: "l" },
            { name: "Nuez moscada", amount: 1, unit: "pizca" },
            { name: "Huevo y Pan rallado", amount: 200, unit: "g" }
        ],
        steps: [
            { title: "Roux", desc: "Derretir mantequilla, añadir harina y tostar unos minutos." },
            { title: "Bechamel", desc: "Añadir leche caliente poco a poco sin dejar de remover. Añadir jamón y especias. Cocinar hasta que espese mucho." },
            { title: "Enfriar y Formar", desc: "Dejar enfriar la masa 4 horas. Formar croquetas, pasar por huevo y pan rallado. Freír." }
        ]
    },
    {
        id: 10,
        title: "Carrillada al Vino Tinto",
        family: "carnes",
        occasion: ["comida", "cena", "principal"],
        time: 120,
        difficulty: "Media",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["cerdo", "guiso", "estofado"],
        image: "assets/fotos_recetas/carrillada_al_vino.png",
        ingredients: [
            { name: "Carrilleras de cerdo", amount: 8, unit: "uni" },
            { name: "Vino tinto", amount: 500, unit: "ml" },
            { name: "Cebolla", amount: 2, unit: "uni" },
            { name: "Zanahoria", amount: 2, unit: "uni" },
            { name: "Harina (para enharinar)", amount: 50, unit: "g" },
            { name: "Caldo de carne", amount: 500, unit: "ml" }
        ],
        steps: [
            { title: "Sellar", desc: "Salpimentar y enharinar la carne. Sellar en olla con aceite fuerte. Reservar." },
            { title: "Verduras", desc: "En el mismo aceite, pochar verduras troceadas." },
            { title: "Guisar", desc: "Volver a meter carne, añadir vino (reducir alcohol) y caldo. Cocer a fuego lento 2h hasta que se deshaga." }
        ]
    },

    // --- PESCADOS ---
    {
        id: 11,
        title: "Gambas al Ajillo",
        family: "pescados",
        occasion: ["tapas", "entrante", "cena"],
        time: 10,
        difficulty: "Fácil",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["marisco", "ajo", "picante", "cazuela"],
        image: "assets/fotos_recetas/gambas_al_ajillo.png",
        ingredients: [
            { name: "Gambas peladas", amount: 400, unit: "g" },
            { name: "Dientes de ajo", amount: 5, unit: "uni" },
            { name: "Guindilla cayena", amount: 1, unit: "uni" },
            { name: "Aceite de oliva", amount: 150, unit: "ml" }
        ],
        steps: [
            { title: "Aromatizar", desc: "Calentar aceite con ajos laminados y guindilla." },
            { title: "Gambas", desc: "Cuando el ajo baile, echar las gambas. Cocinar 2 min hasta que cambien de color." },
            { title: "Servir", desc: "Servir inmediatamente en cazuela de barro chisporroteando." }
        ]
    },
    {
        id: 12,
        title: "Merluza a la Vasca",
        family: "pescados",
        occasion: ["comida", "cena", "principal"],
        time: 35,
        difficulty: "Media",
        servings: 4,
        origin: "País Vasco",
        searchKeywords: ["salsa verde", "pescado blanco", "almejas"],
        image: "assets/fotos_recetas/merluza_a_la_vasca.png",
        ingredients: [
            { name: "Lomos de merluza", amount: 4, unit: "uni" },
            { name: "Almejas", amount: 200, unit: "g" },
            { name: "Espárragos blancos", amount: 4, unit: "uni" },
            { name: "Huevo duro", amount: 2, unit: "uni" },
            { name: "Ajo y Perejil", amount: 1, unit: "atado" },
            { name: "Harina", amount: 1, unit: "cda" },
            { name: "Vino blanco", amount: 100, unit: "ml" }
        ],
        steps: [
            { title: "Salsa", desc: "Sofreír ajo, añadir harina (tostar) y vino blanco + caldo pescado." },
            { title: "Guisar", desc: "Añadir perejil picado abudante y meter los lomos de merluza y almejas. Cocinar 10 min tapado." },
            { title: "Decorar", desc: "Servir con espárragos y huevo duro." }
        ]
    },
    {
        id: 13,
        title: "Pulpo a la Gallega",
        family: "pescados",
        occasion: ["tapas", "entrante", "domingo"],
        time: 40,
        difficulty: "Media",
        servings: 4,
        origin: "Galicia",
        searchKeywords: ["polbo feira", "pimentón", "patata"],
        image: "assets/fotos_recetas/pulpo_a_la_gallega.png",
        ingredients: [
            { name: "Patas de pulpo cocido", amount: 4, unit: "uni" },
            { name: "Patatas cocidas (cachelos)", amount: 4, unit: "uni" },
            { name: "Pimentón dulce/picante", amount: 1, unit: "cda" },
            { name: "Aceite de oliva virgen", amount: 100, unit: "ml" },
            { name: "Sal gorda", amount: 1, unit: "pizca" }
        ],
        steps: [
            { title: "Calentar", desc: "Calentar el pulpo (vapor o agua caliente). Cortar con tijeras en rodajas." },
            { title: "Emplatar", desc: "Base de patatas cocidas en rodajas. Pulpo encima." },
            { title: "Aliñar", desc: "Abundante aceite, pimentón espolvoreado y sal gorda." }
        ]
    },

    // --- PASTAS (Fideuá y Canelones) ---
    {
        id: 14,
        title: "Fideuá de Gandía",
        family: "pastas",
        occasion: ["comida", "domingo", "verano"],
        time: 50,
        difficulty: "Media",
        servings: 4,
        origin: "Gandía (Valencia)",
        searchKeywords: ["fideo", "marisco", "gamba"],
        image: "assets/fotos_recetas/fideguá_tradicional.png",
        ingredients: [
            { name: "Fideo grueso (nº 3 o 4)", amount: 400, unit: "g" },
            { name: "Gambas o Cigalas", amount: 8, unit: "uni" },
            { name: "Rape troceado", amount: 300, unit: "g" },
            { name: "Caldo de pescado potente", amount: 1, unit: "l" },
            { name: "Tomate rallado", amount: 1, unit: "uni" },
            { name: "Pimentón", amount: 1, unit: "cdita" }
        ],
        steps: [
            { title: "Marisco", desc: "Sofreír gambas en la paella y retirar." },
            { title: "Base", desc: "Sofreír rape y tomate. Añadir pimentón." },
            { title: "Fideos", desc: "Añadir fideos y sofreír bien de caldo." },
            { title: "Cocción", desc: "Cocer hasta que el fideo absorba el caldo y se levante. (Horno opcional al final)." }
        ]
    },
    {
        id: 15,
        title: "Canelones de San Esteban",
        family: "pastas",
        occasion: ["comida", "navidad", "invierno"],
        time: 90,
        difficulty: "Alta",
        servings: 6,
        origin: "Cataluña",
        searchKeywords: ["carne", "bechamel", "pasta rellena"],
        image: "assets/fotos_recetas/canelones_de_san_esteban.png",
        ingredients: [
            { name: "Placas de canelón", amount: 18, unit: "uni" },
            { name: "Carne picada mixta (cerdo/ternera)", amount: 500, unit: "g" },
            { name: "Paté", amount: 100, unit: "g" },
            { name: "Bechamel", amount: 500, unit: "ml" },
            { name: "Queso rallado", amount: 100, unit: "g" }
        ],
        steps: [
            { title: "Relleno", desc: "Sofreír la carne muy bien hecha. Mezclar con el paté para suavizar." },
            { title: "Pasta", desc: "Hervir placas, enfriar y rellenar con la carne enrollando." },
            { title: "Hornear", desc: "Cubrir con bechamel y queso. Gratinar al horno." }
        ]
    },

    // --- POSTRES ---
    {
        id: 16,
        title: "Crema Catalana",
        family: "postres",
        occasion: ["postre", "merienda"],
        time: 30,
        difficulty: "Media",
        servings: 4,
        origin: "Cataluña",
        searchKeywords: ["natillas", "azúcar quemado", "huevo"],
        image: "assets/fotos_recetas/crema_catalana.png",
        ingredients: [
            { name: "Leche", amount: 500, unit: "ml" },
            { name: "Yemas de huevo", amount: 4, unit: "uni" },
            { name: "Azúcar", amount: 100, unit: "g" },
            { name: "Maicena", amount: 20, unit: "g" },
            { name: "Piel de limón y Canela", amount: 1, unit: "trozo" }
        ],
        steps: [
            { title: "Infusionar", desc: "Calentar leche con canela y limón. Colar." },
            { title: "Espesar", desc: "Mezclar yemas, azúcar y maicena. Añadir leche caliente y volver al fuego removiendo hasta espesar." },
            { title: "Quemar", desc: "Enfriar. Poner azúcar por encima y quemar con soplete o pala justo antes de servir." }
        ]
    },
    {
        id: 17,
        title: "Torrijas",
        family: "postres",
        occasion: ["desayuno", "merienda", "semana santa"],
        time: 40,
        difficulty: "Fácil",
        servings: 8,
        origin: "Nacional",
        searchKeywords: ["pan", "leche", "frito", "dulce"],
        image: "assets/fotos_recetas/torrijas.png",
        ingredients: [
            { name: "Pan del día anterior", amount: 1, unit: "barra" },
            { name: "Leche", amount: 1, unit: "l" },
            { name: "Huevo batido", amount: 3, unit: "uni" },
            { name: "Azúcar y Canela", amount: 100, unit: "g" },
            { name: "Aceite para freír", amount: 500, unit: "ml" }
        ],
        steps: [
            { title: "Empapar", desc: "Calentar leche con azúcar/canela. Mojar rebanadas de pan hasta que absorban bien (sin romperse)." },
            { title: "Rebozar y Freír", desc: "Pasar por huevo batido y freír en aceite caliente." },
            { title: "Acabado", desc: "Rebozar en mezcla de azúcar y canela." }
        ]
    },
    {
        id: 18,
        title: "Arroz con Leche",
        family: "postres",
        occasion: ["postre", "merienda"],
        time: 60,
        difficulty: "Media",
        servings: 4,
        origin: "Asturias/Nacional",
        searchKeywords: ["arroz", "canela", "limón"],
        image: "assets/fotos_recetas/arroz_con_leche.png",
        ingredients: [
            { name: "Leche entera", amount: 1, unit: "l" },
            { name: "Arroz redondo", amount: 100, unit: "g" },
            { name: "Azúcar", amount: 100, unit: "g" },
            { name: "Cáscara Limón y Canela", amount: 1, unit: "uni" },
            { name: "Mantequilla", amount: 20, unit: "g" }
        ],
        steps: [
            { title: "Cocer", desc: "Cocer leche, arroz, canela y limón a fuego muy suave 45-50 min, removiendo a menudo." },
            { title: "Manteca", desc: "Añadir azúcar y mantequilla los últimos 5 min. Retirar canela/limón." },
            { title: "Enfriar", desc: "Dejar enfriar y espolvorear canela en polvo." }
        ]
    },
    {
        id: 19,
        title: "Fideuá Exprés de Sepia",
        family: "pastas",
        occasion: ["comida", "domingo", "verano", "express"],
        time: 30,
        difficulty: "Fácil",
        servings: 4,
        origin: "Mediterráneo",
        searchKeywords: ["fideo", "sepia", "caldo", "rápido"],
        image: "assets/fotos_recetas/fideuá_exprés_de_sepia.png",
        ingredients: [
            { name: "Sepia limpia", amount: 600, unit: "g" },
            { name: "Fideo cabellín", amount: 300, unit: "g" },
            { name: "Caldo de pescado/fumet", amount: 600, unit: "ml" },
            { name: "Dientes de ajo", amount: 2, unit: "uni" },
            { name: "Tomate concentrado", amount: 20, unit: "g" },
            { name: "Aceite de oliva virgen extra", amount: 20, unit: "ml" }
        ],
        steps: [
            { title: "Sofrito", desc: "Rehogar ajos troceados en paella con aceite. Añadir tomate concentrado, mezclar con el caldo y calentar al mínimo." },
            { title: "Sepia", desc: "Limpiar sepia, trocear cuerpo y tentáculos. Saltear en aceite hasta dorar." },
            { title: "Fideos", desc: "Añadir fideos previamente tostados (horno). Mezclar con sepia y añadir caldo caliente." },
            { title: "Cocción", desc: "Cocer a fuego vivo el tiempo del fabricante (aprox 6 min). Reposar hasta que los fideos se ricen hacia arriba." }
        ]
    },
    {
        id: 20,
        title: "Fideuá del Senyoret",
        family: "pastas",
        occasion: ["comida", "domingo", "lujo"],
        time: 50,
        difficulty: "Media",
        servings: 4,
        origin: "Alicante/Valencia",
        searchKeywords: ["marisco", "gambones", "mejillones", "señoret"],
        image: "assets/fotos_recetas/fideuá_del-senyoret.png",
        ingredients: [
            { name: "Fideo gordo", amount: 300, unit: "g" },
            { name: "Gambones", amount: 8, unit: "uni" },
            { name: "Mejillones (sin cáscara)", amount: 150, unit: "g" },
            { name: "Camarones pelados", amount: 100, unit: "g" },
            { name: "Anillas calamar / Sepia", amount: 150, unit: "g" },
            { name: "Agua/Caldo", amount: 600, unit: "ml" },
            { name: "Aja y Ñora", amount: 1, unit: "uni" },
            { name: "Azafrán", amount: 1, unit: "pizca" }
        ],
        steps: [
            { title: "Fumet", desc: "Pelar gambones. Hacer caldo con cabezas y colas (mitad agua, mitad caldo caldero si hay)." },
            { title: "Sofrito", desc: "Dorar ajo y ñora. Rehogar cuerpos de gambones, camarones, calamares y mejillones." },
            { title: "Cocer", desc: "Añadir el caldo colado hirviendo. Ajustar sal y azafrán." },
            { title: "Fideos", desc: "Echar fideos gordos y cocer hasta secar." }
        ]
    },


    // --- NUEVAS TAPAS ---
    {
        id: 21,
        title: "Tigres (Mejillones)",
        family: "tapas",
        occasion: ["tapas", "aperitivo"],
        time: 45,
        difficulty: "Media",
        servings: 6,
        origin: "Nacional/Galicia",
        searchKeywords: ["mejillón", "bechamel", "picante", "frito"],
        image: "assets/fotos_recetas/tigres_mejillones_rellenos.png",
        ingredients: [
            { name: "Mejillones frescos", amount: 1, unit: "kg" },
            { name: "Cebolla", amount: 1, unit: "uni" },
            { name: "Ajo", amount: 1, unit: "diente" },
            { name: "Tomate frito", amount: 2, unit: "cda" },
            { name: "Harina", amount: 50, unit: "g" },
            { name: "Leche", amount: 400, unit: "ml" },
            { name: "Guindilla (opcional)", amount: 1, unit: "uni" },
            { name: "Huevo y Pan rallado", amount: 100, unit: "g" }
        ],
        steps: [
            { title: "Mejillones", desc: "Cocer los mejillones al vapor. Picar la carne muy fina y guardar una concha de cada uno bien limpia." },
            { title: "Relleno", desc: "Sofreír cebolla, ajo y guindilla. Añadir la carne del mejillón y el tomate. Hacer una bechamel espesa con la harina y leche." },
            { title: "Rellenar", desc: "Rellenar las conchas con la masa. Dejar enfriar." },
            { title: "Freír", desc: "Pasar por huevo y pan rallado. Freír en aceite caliente." }
        ]
    },
    {
        id: 22,
        title: "Boquerones en Vinagre",
        family: "tapas",
        occasion: ["tapas", "aperitivo", "verano"],
        time: 24, // "horas"
        difficulty: "Media",
        servings: 4,
        origin: "Madrid/Andalucía",
        searchKeywords: ["pescado", "vinagre", "aperitivo"],
        image: "assets/fotos_recetas/boquerones_en_vinagre.png",
        ingredients: [
            { name: "Boquerones frescos", amount: 500, unit: "g" },
            { name: "Vinagre de vino blanco", amount: 300, unit: "ml" },
            { name: "Agua", amount: 100, unit: "ml" },
            { name: "Sal", amount: 1, unit: "cda" },
            { name: "Ajo y Perejil", amount: 1, unit: "puñado" },
            { name: "Aceite de oliva virgen extra", amount: 100, unit: "ml" }
        ],
        steps: [
            { title: "Limpiar", desc: "Limpiar boquerones quitando cabeza y espina. Lavar muy bien en agua y hielo para desangrar." },
            { title: "Congelar", desc: "Por seguridad (anisakis), congelar 24h min." },
            { title: "Marinar", desc: "Sumergir en vinagre, agua y sal durante unas 6-8 horas hasta que estén blancos." },
            { title: "Aliñar", desc: "Escurrir y cubrir con abundante aceite, ajo picado y perejil." }
        ]
    },
    {
        id: 23,
        title: "Patatas Bravas",
        family: "only_vegetal",
        occasion: ["tapas", "cerveza"],
        time: 30,
        difficulty: "Fácil",
        servings: 4,
        origin: "Madrid",
        searchKeywords: ["patata", "salsa brava", "picante"],
        image: "assets/fotos_recetas/patatas_bravas.png",
        ingredients: [
            { name: "Patatas", amount: 4, unit: "uni" },
            { name: "Aceite para freír", amount: 500, unit: "ml" },
            { name: "Pimentón dulce y picante", amount: 2, unit: "cda" },
            { name: "Harina", amount: 1, unit: "cda" },
            { name: "Caldo de carne/pollo", amount: 200, unit: "ml" },
            { name: "Vinagre", amount: 1, unit: "chorrito" }
        ],
        steps: [
            { title: "Salsa Brava", desc: "Sofreír pimentones con harina en aceite (cuidado no quemar). Añadir caldo poco a poco hasta espesar. Toque de vinagre." },
            { title: "Patatas", desc: "Cortar patatas en cubos irregulares. Freír en dos tiempos: primero suave para pochar, luego fuerte para dorar." },
            { title: "Servir", desc: "Bañar las patatas con la salsa caliente." }
        ]
    },
    {
        id: 24,
        title: "Calamares a la Romana",
        family: "tapas",
        occasion: ["tapas", "comida", "bocadillo"],
        time: 20,
        difficulty: "Media",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["calamar", "rebozado", "frito"],
        image: "assets/fotos_recetas/calamares_a_la_romana.png",
        ingredients: [
            { name: "Anillas de calamar", amount: 500, unit: "g" },
            { name: "Harina de trigo", amount: 100, unit: "g" },
            { name: "Huevo", amount: 2, unit: "uni" },
            { name: "Agua con gas o Cerveza", amount: 50, unit: "ml" },
            { name: "Sal y Limón", amount: 1, unit: "uni" },
            { name: "Aceite para freír", amount: 500, unit: "ml" }
        ],
        steps: [
            { title: "Masa Orly", desc: "Mezclar harina, huevo, sal y un chorro de agua con gas/cerveza fría para hacer una pasta." },
            { title: "Rebozar", desc: "Pasar las anillas limpias y secas por la masa." },
            { title: "Freír", desc: "Freír en aceite muy caliente por tandas. Servir con limón." }
        ]
    },
    {
        id: 25,
        title: "Ensaladilla Rusa",
        family: "tapas",
        occasion: ["tapas", "entrante", "verano", "comida"],
        time: 40,
        difficulty: "Fácil",
        servings: 6,
        origin: "Nacional",
        searchKeywords: ["patata", "mayonesa", "atún", "huevo"],
        image: "assets/fotos_recetas/ensaladilla_rusa.png",
        ingredients: [
            { name: "Patatas", amount: 4, unit: "uni" },
            { name: "Zanahorias", amount: 2, unit: "uni" },
            { name: "Huevos", amount: 3, unit: "uni" },
            { name: "Atún en aceite", amount: 3, unit: "latas" },
            { name: "Guisantes (opcional)", amount: 100, unit: "g" },
            { name: "Aceitunas", amount: 50, unit: "g" },
            { name: "Mayonesa", amount: 300, unit: "g" }
        ],
        steps: [
            { title: "Cocer", desc: "Cocer patatas y zanahorias con piel. Cocer huevos 10 min. Pelar y picar todo en dados pequeños." },
            { title: "Mezclar", desc: "Mezclar la verdura con el huevo, atún desmigado y aceitunas picadas." },
            { title: "Mayonesa", desc: "Incorporar mayonesa abundante y mezclar con cuidado. refrigerar." }
        ]
    },
    {
        id: 26,
        title: "Empanada Gallega",
        family: "tapas",
        occasion: ["comida", "merienda", "excursión"],
        time: 60,
        difficulty: "Media",
        servings: 8,
        origin: "Galicia",
        searchKeywords: ["atún", "masa", "horno", "pimiento"],
        image: "assets/fotos_recetas/empanada_gallega.png",
        ingredients: [
            { name: "Masa de empanada", amount: 2, unit: "láminas" },
            { name: "Atún/Bonito en aceite", amount: 400, unit: "g" },
            { name: "Cebolla", amount: 2, unit: "uni" },
            { name: "Pimiento rojo y verde", amount: 1, unit: "uni" },
            { name: "Tomate frito", amount: 100, unit: "g" },
            { name: "Huevo (pintar)", amount: 1, unit: "uni" }
        ],
        steps: [
            { title: "Zarangollo", desc: "Pochar cebolla y pimientos despacio. Añadir tomate y al final el atún escurrido." },
            { title: "Montar", desc: "Colocar una base de masa, extender el relleno (frío) y tapar con la otra masa. Cerrar bordes." },
            { title: "Hornear", desc: "Pintar con huevo, hacer agujero central (chimenea) y hornear a 200ºC unos 30-40 min." }
        ]
    },
    {
        id: 27,
        title: "Pimientos de Padrón",
        family: "only_vegetal",
        occasion: ["tapas", "guarnición"],
        time: 10,
        difficulty: "Fácil",
        servings: 4,
        origin: "Galicia",
        searchKeywords: ["pimiento", "verde", "frito"],
        image: "assets/fotos_recetas/pimientos_de_padrón.png",
        ingredients: [
            { name: "Pimientos de Padrón", amount: 400, unit: "g" },
            { name: "Aceite de oliva", amount: 100, unit: "ml" },
            { name: "Sal gorda/Escamas", amount: 1, unit: "pizca" }
        ],
        steps: [
            { title: "Lavar", desc: "Lavar y secar muy bien los pimientos (para que no salten)." },
            { title: "Freír", desc: "Freír en aceite caliente pero no humeante, dando vueltas hasta que la piel se arrugue y tueste." },
            { title: "Sal", desc: "Sacar y echar sal gorda inmediatamente. Unos pican y otros no." }
        ]
    },


    // --- PLATOS DE CUCHARA ---
    {
        id: 28,
        title: "Lentejas con Chorizo",
        family: "carnes",
        occasion: ["comida", "invierno", "tupper"],
        time: 50,
        difficulty: "Fácil",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["legumbre", "chorizo", "guiso"],
        image: "assets/fotos_recetas/lentejas_con_chorizo.png",
        ingredients: [
            { name: "Lentejas pardinas", amount: 350, unit: "g" },
            { name: "Chorizo fresco", amount: 1, unit: "uni" },
            { name: "Zanahoria", amount: 1, unit: "uni" },
            { name: "Cebolla", amount: 1, unit: "uni" },
            { name: "Patata", amount: 1, unit: "uni" },
            { name: "Ajo y Laurel", amount: 1, unit: "ud" },
            { name: "Pimentón dulce", amount: 1, unit: "cdita" }
        ],
        steps: [
            { title: "Todo en crudo", desc: "Poner todos los ingredientes en la olla cubiertos de agua fría (salvo la sal)." },
            { title: "Cocer", desc: "Llevar a ebullición, bajar el fuego y cocer suavemente unos 40-50 min hasta que estén tiernas." },
            { title: "Sofrito (opcional)", desc: "Se puede hacer un refrito de ajo y pimentón al final para dar brillo." }
        ]
    },
    {
        id: 29,
        title: "Judías Pintas con Arroz",
        family: "carnes",
        occasion: ["comida", "invierno"],
        time: 90,
        difficulty: "Media",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["alubias", "arroz", "morcilla", "guiso"],
        image: "assets/fotos_recetas/judias_pintas_con_arroz.png",
        ingredients: [
            { name: "Judías pintas", amount: 300, unit: "g" },
            { name: "Arroz", amount: 50, unit: "g" },
            { name: "Compango (chorizo/morcilla)", amount: 1, unit: "pack" },
            { name: "Cebolla y Ajo", amount: 1, unit: "ud" },
            { name: "Laurel", amount: 1, unit: "hoja" }
        ],
        steps: [
            { title: "Remojo", desc: "Remojar judías la noche anterior." },
            { title: "Estofar", desc: "Cocer judías con las carnes a fuego lento (aprox 1h 30m) asustándolas con agua fría." },
            { title: "Arroz", desc: "Cuando estén tiernas, añadir el arroz y cocer 15 min más para trabar el caldo." }
        ]
    },
    {
        id: 30,
        title: "Cocido Madrileño",
        family: "carnes",
        occasion: ["comida", "domingo", "invierno"],
        time: 180,
        difficulty: "Media",
        servings: 6,
        origin: "Madrid",
        searchKeywords: ["garbanzos", "sopa", "carne", "vuelcos"],
        image: "assets/fotos_recetas/cocido_madrileño.png",
        ingredients: [
            { name: "Garbanzos", amount: 500, unit: "g" },
            { name: "Morcillo de ternera", amount: 500, unit: "g" },
            { name: "Tocino fresco", amount: 200, unit: "g" },
            { name: "Hueso de jamón y rodilla", amount: 2, unit: "ud" },
            { name: "Gallina/Pollo", amount: 1, unit: "cuarto" },
            { name: "Chorizo y Morcilla", amount: 1, unit: "ud" },
            { name: "Repollo y Patata", amount: 1, unit: "ud" },
            { name: "Fideos (sopa)", amount: 150, unit: "g" }
        ],
        steps: [
            { title: "Carnes y Garbanzos", desc: "Cocer carnes y huesos. Cuando hierva, añadir garbanzos (en malla si se quiere). Cocer 2h." },
            { title: "Verduras", desc: "Añadir patata y repollo (el repollo mejor cocerlo aparte con chorizo y morcilla)." },
            { title: "Sopa", desc: "Colar el caldo y cocer los fideos." },
            { title: "Tres Vuelcos", desc: "Servir 1º Sopa, 2º Garbanzos y Verdura, 3º Carnes." }
        ]
    },
    {
        id: 31,
        title: "Potaje de Garbanzos",
        family: "only_vegetal",
        occasion: ["comida", "cuaresma", "semana santa"],
        time: 90,
        difficulty: "Media",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["espinacas", "bacalao", "huevo"],
        image: "assets/fotos_recetas/potaje_de_garbanzos.png",
        ingredients: [
            { name: "Garbanzos", amount: 400, unit: "g" },
            { name: "Espinacas frescas", amount: 300, unit: "g" },
            { name: "Bacalao desalado", amount: 200, unit: "g" },
            { name: "Huevo duro", amount: 2, unit: "uni" },
            { name: "Cebolla y Ajo", amount: 1, unit: "ud" },
            { name: "Pimentón", amount: 1, unit: "cda" }
        ],
        steps: [
            { title: "Cocer", desc: "Cocer garbanzos (remojados) con laurel y cebolla." },
            { title: "Sofrito", desc: "Hacer sofrito de ajo y pimentón. Añadir a la olla." },
            { title: "Espinacas y Bacalao", desc: "A falta de 10 min, añadir espinacas y bacalao desmigado. Reposar con huevo duro picado." }
        ]
    },
    {
        id: 32,
        title: "Marmitako de Bonito",
        family: "pescados",
        occasion: ["comida", "verano", "norte"],
        time: 45,
        difficulty: "Media",
        servings: 4,
        origin: "País Vasco",
        searchKeywords: ["atún", "bonito", "patata", "guiso"],
        image: "assets/fotos_recetas/marmitako_de_bonito .png",
        ingredients: [
            { name: "Bonito del Norte", amount: 600, unit: "g" },
            { name: "Patatas", amount: 1, unit: "kg" },
            { name: "Pimiento verde y choricero", amount: 1, unit: "ud" },
            { name: "Cebolla", amount: 1, unit: "uni" },
            { name: "Caldo de pescado", amount: 1, unit: "l" },
            { name: "Guindilla (opcional)", amount: 1, unit: "uni" }
        ],
        steps: [
            { title: "Patatas", desc: "Pochar cebolla y pimiento. Añadir carne de pimiento choricero. Chascar patatas y rehogar." },
            { title: "Cocer", desc: "Cubrir con caldo y cocer hasta que la patata esté tierna." },
            { title: "Bonito", desc: "Apagar el fuego. Echar el bonito en dados y dejar que se haga con el calor residual (para que no se seque)." }
        ]
    },


    // --- ARROCES Y GUISOS VARIADOS ---
    {
        id: 33,
        title: "Arroz al Horno",
        family: "arroces",
        occasion: ["comida", "domingo", "aprovechamiento"],
        time: 60,
        difficulty: "Media",
        servings: 6,
        origin: "Valencia",
        searchKeywords: ["costillas", "garbanzos", "morcilla", "cazuela"],
        image: "assets/fotos_recetas/arroz_al_horno.png",
        ingredients: [
            { name: "Arroz bomba", amount: 400, unit: "g" },
            { name: "Costillas de cerdo", amount: 300, unit: "g" },
            { name: "Morcilla de cebolla", amount: 2, unit: "uni" },
            { name: "Garbanzos cocidos", amount: 200, unit: "g" },
            { name: "Patata y Tomate", amount: 1, unit: "ud" },
            { name: "Cabeza de ajos", amount: 1, unit: "uni" },
            { name: "Caldo de cocido", amount: 800, unit: "ml" }
        ],
        steps: [
            { title: "Sofreír", desc: "Dorar costillas, panceta y morcillas. Reservar. Sofreír arroz y garbanzos." },
            { title: "Montar", desc: "Poner todo en cazuela de barro. Colocar la cabeza de ajos en medio, rodajas de patata y tomate." },
            { title: "Hornear", desc: "Añadir caldo hirviendo y hornear a 220ºC durante 20-25 min." }
        ]
    },
    {
        id: 34,
        title: "Arroz Caldoso con Bogavante",
        family: "arroces",
        occasion: ["comida", "lujo", "celebración"],
        time: 45,
        difficulty: "Alta",
        servings: 4,
        origin: "Mediterráneo",
        searchKeywords: ["bogavante", "marisco", "caldo"],
        image: "assets/fotos_recetas/arroz_caldoso_con_bogavante.png",
        ingredients: [
            { name: "Arroz bomba", amount: 300, unit: "g" },
            { name: "Bogavante", amount: 2, unit: "uni" },
            { name: "Gambas", amount: 8, unit: "uni" },
            { name: "Fumet de pescado", amount: 1.5, unit: "l" },
            { name: "Ñora y Tomate", amount: 1, unit: "ud" },
            { name: "Brandy", amount: 1, unit: "copita" }
        ],
        steps: [
            { title: "Bogavante", desc: "Trocear bogavante (aprovechar jugos de la cabeza). Sofreír y reservar." },
            { title: "Sofrito", desc: "Hacer un sofrito intenso con ñora, tomate y las cabezas de las gambas. Flambear con brandy." },
            { title: "Cocer", desc: "Añadir arroz, caldo (es caldoso, necesita más proporción) y cocinar 15 min. Añadir bogavante al final." }
        ]
    },
    {
        id: 35,
        title: "Migas de Pastor",
        family: "carnes",
        occasion: ["comida", "invierno", "campo"],
        time: 40,
        difficulty: "Media",
        servings: 4,
        origin: "Castilla/Extremadura",
        searchKeywords: ["pan", "chorizo", "panceta", "uvas"],
        image: "assets/fotos_recetas/migas_de_pastor.png",
        ingredients: [
            { name: "Pan de hogaza (duro)", amount: 500, unit: "g" },
            { name: "Panceta y Chorizo", amount: 300, unit: "g" },
            { name: "Ajos", amount: 1, unit: "cabeza" },
            { name: "Agua con sal (humedecer)", amount: 100, unit: "ml" },
            { name: "Uvas (acompañar)", amount: 1, unit: "racimo" }
        ],
        steps: [
            { title: "Humedecer", desc: "Cortar pan y humedecer ligeramente con agua y sal la noche antes (tapar con paño)." },
            { title: "Freír", desc: "Freír ajos, panceta y chorizo. Retirar. En esa grasa, echar el pan." },
            { title: "Dar vueltas", desc: "Remover constantemente a fuego lento hasta que se suelten y doren (30 min). Servir con uvas." }
        ]
    },
    {
        id: 36,
        title: "Morteruelo Conquense",
        family: "carnes",
        occasion: ["entrante", "invierno", "tapas"],
        time: 120,
        difficulty: "Media",
        servings: 6,
        origin: "Cuenca",
        searchKeywords: ["hígado", "caza", "paté", "pan"],
        image: "assets/fotos_recetas/morteruelo.png",
        ingredients: [
            { name: "Hígado de cerdo", amount: 500, unit: "g" },
            { name: "Carne de caza/gallina", amount: 500, unit: "g" },
            { name: "Pan rallado/miga", amount: 200, unit: "g" },
            { name: "Especias (clavo, canela, alcaravea)", amount: 1, unit: "pizca" },
            { name: "Piñones (opcional)", amount: 50, unit: "g" }
        ],
        steps: [
            { title: "Cocer", desc: "Cocer todas las carnes hasta que se deshagan. Deshuesar y picar muy fino (textura paté)." },
            { title: "Guisar", desc: "En sartén con el caldo de cocción y especias, cocer la pasta de carne. Añadir pan para espesar." },
            { title: "Enfriar", desc: "Se come tibio o frío, untado en pan." }
        ]
    },
    {
        id: 37,
        title: "Albóndigas en Salsa",
        family: "carnes",
        occasion: ["comida", "tupper", "niños"],
        time: 60,
        difficulty: "Media",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["carne picada", "salsa", "guiso"],
        image: "assets/fotos_recetas/albóndigas_en_salsa.png",
        ingredients: [
            { name: "Carne picada mixta", amount: 500, unit: "g" },
            { name: "Miga de pan con leche", amount: 1, unit: "rebanada" },
            { name: "Huevo", amount: 1, unit: "uni" },
            { name: "Cebolla y Vino blanco", amount: 1, unit: "ud" },
            { name: "Caldo de carne", amount: 500, unit: "ml" },
            { name: "Harina (rebozar)", amount: 50, unit: "g" }
        ],
        steps: [
            { title: "Masa", desc: "Mezclar carne, huevo, pan mojado en leche, ajo y perejil. Formar bolas y enharinar." },
            { title: "Freír", desc: "Dorar albóndigas y reservar. En ese aceite pochar cebolla." },
            { title: "Guisar", desc: "Añadir vino, caldo y las albóndigas. Cocer 20 min hasta que la salsa trabe." }
        ]
    },
    {
        id: 38,
        title: "Torreznos de Soria",
        family: "tapas",
        occasion: ["tapas", "aperitivo"],
        time: 45,
        difficulty: "Alta",
        servings: 4,
        origin: "Soria",
        searchKeywords: ["panceta", "frito", "crujiente"],
        image: "assets/fotos_recetas/torreznos_de_soria_crujientes.png",
        ingredients: [
            { name: "Panceta de Soria (curada)", amount: 500, unit: "g" },
            { name: "Aceite de girasol/oliva", amount: 1, unit: "l" }
        ],
        steps: [
            { title: "Secar", desc: "La piel debe estar muy seca. Cortar en tiras de 2 cm." },
            { title: "Confitar", desc: "Poner en sartén con aceite frío (piel abajo) a fuego muy lento 30 min hasta que aparezcan burbujas." },
            { title: "Subir fuego", desc: "Subir el fuego al máximo para que la piel explote y se llene de burbujas (la corteza)." }
        ]
    },

    // --- POSTRES Y DESAYUNOS ---
    {
        id: 39,
        title: "Tarta de Santiago",
        family: "postres",
        occasion: ["postre", "merienda"],
        time: 50,
        difficulty: "Fácil",
        servings: 8,
        origin: "Galicia",
        searchKeywords: ["almendra", "sin gluten", "azúcar glas"],
        image: "assets/fotos_recetas/tarta_de_santiago.png",
        ingredients: [
            { name: "Almendra molida", amount: 250, unit: "g" },
            { name: "Azúcar", amount: 250, unit: "g" },
            { name: "Huevos L", amount: 5, unit: "uni" },
            { name: "Ralladura de limón", amount: 1, unit: "uni" },
            { name: "Canela", amount: 1, unit: "cdita" }
        ],
        steps: [
            { title: "Mezclar", desc: "Mezclar azúcar y huevos (no batir en exceso). Añadir almendra, canela y limón." },
            { title: "Hornear", desc: "Molde engrasado. Horno 180ºC durante 30-35 min." },
            { title: "Decorar", desc: "Poner cruz de Santiago y espolvorear azúcar glas." }
        ]
    },
    {
        id: 40,
        title: "Bizcocho de Yogur",
        family: "postres",
        occasion: ["desayuno", "merienda"],
        time: 45,
        difficulty: "Fácil",
        servings: 8,
        origin: "Nacional",
        searchKeywords: ["yogur", "limón", "esponjoso"],
        image: "assets/fotos_recetas/bizcocho_de_yogur.png",
        ingredients: [
            { name: "Yogur natural (medida)", amount: 1, unit: "uni" },
            { name: "Huevos", amount: 3, unit: "uni" },
            { name: "Azúcar", amount: 2, unit: "medidas" },
            { name: "Harina", amount: 3, unit: "medidas" },
            { name: "Aceite", amount: 1, unit: "medida" },
            { name: "Levadura Royal", amount: 1, unit: "sobre" }
        ],
        steps: [
            { title: "Batir", desc: "Batir huevos con azúcar. Añadir yogur y aceite." },
            { title: "Secos", desc: "Tamizar harina y levadura. Incorporar a la mezcla." },
            { title: "Hornear", desc: "Horno 180ºC calor arriba y abajo, unos 35-40 min." }
        ]
    },
    {
        id: 41,
        title: "Magdalenas de Yogur",
        family: "postres",
        occasion: ["desayuno", "merienda"],
        time: 25,
        difficulty: "Fácil",
        servings: 12,
        origin: "Nacional",
        searchKeywords: ["bollería", "casero", "copete"],
        image: "assets/fotos_recetas/magdalenas_de_yogur.png",
        ingredients: [
            { name: "Huevo", amount: 3, unit: "uni" },
            { name: "Azúcar", amount: 200, unit: "g" },
            { name: "Aceite girasol", amount: 200, unit: "ml" },
            { name: "Leche/Nata", amount: 50, unit: "ml" },
            { name: "Harina floja", amount: 350, unit: "g" },
            { name: "Impulsor", amount: 1, unit: "sobre" }
        ],
        steps: [
            { title: "Emulsionar", desc: "Batir huevos y azúcar mucho (blanquear). Añadir líquidos." },
            { title: "Reposo", desc: "Añadir harina tamizada. Dejar reposar la masa en nevera 1h (truco del copete)." },
            { title: "Hornear", desc: "Horno muy fuerte (220ºC). Bajar a 200ºC al meterlas. 12-15 min." }
        ]
    },
    {
        id: 42,
        title: "Pan con Tomate y Jamón",
        family: "desayunos",
        occasion: ["desayuno", "cena", "tapa"],
        time: 5,
        difficulty: "Fácil",
        servings: 2,
        origin: "Cataluña/Nacional",
        searchKeywords: ["pa amb tomaca", "tostada"],
        image: "assets/fotos_recetas/pan_con_tomate_y_jamón.png",
        ingredients: [
            { name: "Pan de Payés/Hogaza", amount: 2, unit: "rebanadas" },
            { name: "Tomate de ramallet/maduro", amount: 1, unit: "uni" },
            { name: "Aceite virgen extra", amount: 1, unit: "chorro" },
            { name: "Sal y Ajo (opc)", amount: 1, unit: "pizca" },
            { name: "Jamón Serrano", amount: 100, unit: "g" }
        ],
        steps: [
            { title: "Tostar", desc: "Tostar el pan. Restregar medio ajo (opcional)." },
            { title: "Tomate", desc: "Restregar el tomate maduro partido por la mitad hasta manchar el pan." },
            { title: "Aliñar", desc: "Chorro generoso de aceite, sal y cubrir con jamón." }
        ]
    },
    {
        id: 43,
        title: "Tosta Aguacate y Anchoas",
        family: "desayunos",
        occasion: ["desayuno", "brunch", "cena"],
        time: 10,
        difficulty: "Fácil",
        servings: 2,
        origin: "Moderno",
        searchKeywords: ["saludable", "aguacate", "pescado"],
        image: "assets/fotos_recetas/tosta_aguacate_y_anchoas.png",
        ingredients: [
            { name: "Pan de semillas", amount: 2, unit: "rebanadas" },
            { name: "Aguacate maduro", amount: 1, unit: "uni" },
            { name: "Anchoas del Cantábrico", amount: 6, unit: "filetes" },
            { name: "Tomate cherry", amount: 4, unit: "uni" },
            { name: "Aceite y Pimienta", amount: 1, unit: "pizca" }
        ],
        steps: [
            { title: "Base", desc: "Tostar pan. Aplastar aguacate con tenedor con un poco de limón y pimienta." },
            { title: "Montar", desc: "Untar aguacate. Colocar anchoas encima y decorar con cherrys." }
        ]
    },
    {
        id: 44,
        title: "Smoothie Bowl de Mango",
        family: "desayunos",
        occasion: ["desayuno", "verano", "saludable"],
        time: 5,
        difficulty: "Fácil",
        servings: 1,
        origin: "Tropical",
        searchKeywords: ["fruta", "batido", "yogur"],
        image: "assets/fotos_recetas/smoothie_bowl_de_mango.png",
        ingredients: [
            { name: "Mango congelado", amount: 150, unit: "g" },
            { name: "Plátano congelado", amount: 1, unit: "uni" },
            { name: "Yogur griego/coco", amount: 1, unit: "uni" },
            { name: "Granola y Fruta fresca", amount: 1, unit: "puñado" }
        ],
        steps: [
            { title: "Triturar", desc: "Batir fruta congelada con el yogur hasta tener textura helado cremoso." },
            { title: "Decorar", desc: "Servir en bol y decorar con granola, coco rallado o fruta fresca (topping)." }
        ]
    },

    {
        id: 45,
        title: "Chuletón a la Brasa",
        family: "carnes",
        occasion: ["comida", "celebración", "lujo"],
        time: 45,
        difficulty: "Media",
        servings: 2,
        origin: "Norte de España",
        searchKeywords: ["carne roja", "buey", "parrilla"],
        image: "assets/fotos_recetas/chuleton_a_la_brasa.png",
        ingredients: [
            { name: "Chuletón de vaca/buey (1kg)", amount: 1, unit: "uni" },
            { name: "Sal en escamas", amount: 1, unit: "puñado" },
            { name: "Aceite de oliva", amount: 1, unit: "chorrito" },
            { name: "Pimientos de piquillo (guarnición)", amount: 1, unit: "lata" }
        ],
        steps: [
            { title: "Temperar", desc: "Sacar la carne de la nevera al menos 2 horas antes para que esté a temperatura ambiente." },
            { title: "Brasa/Plancha", desc: "Calentar la plancha al máximo. Sellar la carne 3-4 minutos por cada lado (al gusto)." },
            { title: "Reposar", desc: "Dejar reposar la carne 5 minutos antes de cortar. Añadir sal en escamas al servir." }
        ]
    },
    {
        id: 46,
        title: "Huevos Poché",
        family: "huevos",
        occasion: ["desayuno", "brunch", "saludable"],
        time: 10,
        difficulty: "Media",
        servings: 2,
        origin: "Francia/Internacional",
        searchKeywords: ["huevo", "escalfado", "tostada"],
        image: "assets/fotos_recetas/huevos_poché.png",
        ingredients: [
            { name: "Huevos frescos", amount: 2, unit: "uni" },
            { name: "Agua", amount: 1, unit: "l" },
            { name: "Vinagre", amount: 1, unit: "chorrito" },
            { name: "Pan integral", amount: 2, unit: "rebanadas" },
            { name: "Aguacate (opcional)", amount: 1, unit: "uni" }
        ],
        steps: [
            { title: "Agua", desc: "Calentar agua con vinagre sin que llegue a hervir fuerte (punto de ebullición suave)." },
            { title: "Remolino", desc: "Crear un remolino en el agua y echar el huevo con cuidado en el centro." },
            { title: "Cocer", desc: "Cocinar 3-4 minutos hasta que la clara cuaje pero la yema siga líquida." }
        ]
    },
    {
        id: 47,
        title: "Tabla de Quesos y Embutidos",
        family: "tapas",
        occasion: ["aperitivo", "cena", "picoteo"],
        time: 15,
        difficulty: "Fácil",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["jamón", "queso", "chorizo", "lomo"],
        image: "assets/fotos_recetas/tabla_de_quesos_y_embutido.png",
        ingredients: [
            { name: "Jamón Ibérico", amount: 100, unit: "g" },
            { name: "Queso Manchego curado", amount: 150, unit: "g" },
            { name: "Chorizo Ibérico", amount: 100, unit: "g" },
            { name: "Lomo embuchado", amount: 100, unit: "g" },
            { name: "Picos/Regañás", amount: 1, unit: "bolsa" },
            { name: "Uvas/Nueces", amount: 1, unit: "puñado" }
        ],
        steps: [
            { title: "Temperar", desc: "Sacar los embutidos y quesos de la nevera 30 min antes para que suden y tengan sabor." },
            { title: "Cortar", desc: "Cortar el queso en cuñas o dados. Disponer los embutidos de forma atractiva." },
            { title: "Acompañar", desc: "Servir con pan crujiente, uvas o frutos secos." }
        ]
    },
    {
        id: 32,
        title: "Bacalao con Verduras y Tomate",
        family: ["pescados", "only_vegetal"],
        occasion: ["comida", "cena", "tapas"],
        time: 40,
        difficulty: "Fácil",
        servings: 3,
        origin: "Nacional",
        searchKeywords: ["bacalao", "verduras", "tomate", "berenjena", "pimiento"],
        image: "assets/fotos_recetas/bacalao_con_verduras_y_tomate.png",
        ingredients: [
            { name: "Lomos de bacalao (punto de sal)", amount: 5, unit: "uni" },
            { name: "Berenjena", amount: 1, unit: "uni" },
            { name: "Pimiento rojo", amount: 0.5, unit: "uni" },
            { name: "Cebolla", amount: 1, unit: "uni" },
            { name: "Tomate frito", amount: 1, unit: "bote" },
            { name: "Aceite de oliva", amount: 50, unit: "ml" },
            { name: "Harina", amount: 50, unit: "g" },
            { name: "Sal", amount: 1, unit: "pizca" }
        ],
        steps: [
            { title: "Verduras", desc: "Lavamos y cortamos verduras en cuadrados. Pochar cebolla en sartén con aceite (5 min)." },
            { title: "Sofreír", desc: "Añadir berenjena y pimiento, cocinar 10 min. Incorporar tomate frito y sal, cocinar 8-10 min más." },
            { title: "Bacalao", desc: "En otra sartén, pasar bacalao por harina y sellar vuelta y vuelta en aceite caliente." },
            { title: "Terminar", desc: "Poner el bacalao en la sartén con el tomate y verduras (piel hacia arriba). Tapar y cocinar 3 min." }
        ]
    },
    {
        id: 50,
        title: "Contramuslos de Pollo con Patatas Panadera",
        family: "carnes",
        occasion: ["comida", "cena", "domingo", "facil"],
        time: 60,
        difficulty: "Fácil",
        servings: 2,
        origin: "Nacional",
        searchKeywords: ["pollo", "horno", "patatas", "contramuslos", "asado", "facil"],
        image: "assets/fotos_recetas/contramuslos_de_pollo_al_horno_con_patatas_panadera.png",
        ingredients: [
            { name: "Contramuslos de pollo", amount: 2, unit: "piezas" },
            { name: "Patatas medianas", amount: 3, unit: "uni" },
            { name: "Aceite de oliva", amount: 30, unit: "ml" },
            { name: "Sal", amount: 1, unit: "cucharadita" },
            { name: "Pimienta negra", amount: 0.5, unit: "cucharadita" },
            { name: "Cebolla en polvo", amount: 1, unit: "cucharadita" },
            { name: "Ajo en polvo", amount: 1, unit: "cucharadita" },
            { name: "Sazonador de pollo / Avecrem", amount: 1, unit: "pastilla" },
            { name: "Perejil seco", amount: 1, unit: "cucharadita" },
            { name: "Agua", amount: 1, unit: "vaso (hasta cubrir)" }
        ],
        steps: [
            { title: "Preparar base", desc: "Vierte el aceite en la bandeja. Coloca una capa de patatas en rodajas y salpimenta." },
            { title: "Colocar pollo", desc: "Pon los contramuslos encima de las patatas." },
            { title: "Sazonar", desc: "Espolvorea cebolla, ajo, sazonador y perejil sobre el pollo." },
            { title: "Hidratar", desc: "Añade agua hasta cubrir los contramuslos (sin taparlos del todo para que doren)." },
            { title: "Hornear", desc: "Hornea a 200°C hasta que el pollo esté dorado y las patatas tiernas. Añadir más agua si es necesario." },
            { title: "Servir", desc: "Servir caliente. Las patatas estarán deliciosas en su salsa." }
        ]
    }
];
