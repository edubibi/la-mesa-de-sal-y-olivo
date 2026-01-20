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
            { title: "Pochar (El Secreto)", desc: "Cortar patatas y meterlas en agua fría en el congelador 30 min. Sacar, escurrir y secar bien. Freír a fuego lento hasta que estén tiernas. Añadir la cebolla al final para que coja color." },
            { title: "Mezclar y Reposar", desc: "Escurrir aceite en un colador grande. Mezclar con los 6 huevos batidos y sal. Tapar con un paño y dejar reposar 10 min (clave para que empape)." },
            { title: "Cuajar", desc: "Cuajar en sartén caliente con poco aceite, vuelta y vuelta al gusto. Servir inmediatamente." },
            { title: "Nota de Raciones", desc: "Para 4 personas si es aperitivo/pincho. Para 2 personas si es plato principal (ideal con pimientos verdes fritos)." }
        ]
    },
    {
        id: 23,
        title: "Tigres (Mejillones)",
        family: "tapas",
        occasion: ["tapas", "entrante"],
        time: 60,
        difficulty: "Media",
        servings: 6,
        origin: "Galicia/Nacional",
        searchKeywords: ["mejillones", "bechamel", "picante", "relleno"],
        image: "assets/fotos_recetas/tigres_mejillones_rellenos.png",
        ingredients: [
            { name: "Mejillones", amount: 1, unit: "kg" },
            { name: "Cebolla", amount: 1, unit: "uni" },
            { name: "Harina", amount: 2, unit: "cdas" },
            { name: "Leche", amount: 400, unit: "ml" },
            { name: "Tomate frito", amount: 2, unit: "cdas" },
            { name: "Guindilla", amount: 1, unit: "uni" }
        ],
        steps: [
            { title: "Cocer", desc: "Abrir mejillones al vapor. Picar carne y guardar conchas." },
            { title: "Relleno", desc: "Sofreír cebolla y guindilla. Añadir carne, harina y leche (bechamel espesa) + tomate." },
            { title: "Empanar", desc: "Rellenar conchas, pasar por huevo/pan rallado y freír." }
        ]
    },
    {
        id: 24,
        title: "Torreznos de Soria",
        family: "tapas",
        occasion: ["tapas", "entrante", "aperitivo"],
        time: 45,
        difficulty: "Media",
        servings: 4,
        origin: "Soria",
        searchKeywords: ["panceta", "frito", "crujiente"],
        image: "assets/fotos_recetas/torreznos_de_soria_crujientes.png",
        ingredients: [
            { name: "Panceta curada (adobada)", amount: 500, unit: "g" },
            { name: "Aceite de girasol", amount: 1, unit: "chorro" }
        ],
        steps: [
            { title: "Orear", desc: "Sacar la panceta del envase 2h antes para que se seque la piel." },
            { title: "Pochar", desc: "Poner en sartén fría con piel abajo y poco aceite. Fuego muy bajo 30min hasta que salgan burbujas." },
            { title: "Subir", desc: "Subir fuego al máximo para que la piel sufle y quede crujiente." }
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
        title: "Paella de Marisco",
        family: "paellas",
        occasion: ["comida", "domingo", "verano"],
        time: 50,
        difficulty: "Media",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["arroz", "gamba", "mejillon", "marisco", "mixta"],
        image: "assets/fotos_recetas/paella_de_marisco.png",
        ingredients: [
            { name: "Arroz bomba", amount: 400, unit: "g" },
            { name: "Gambones/Gambas", amount: 8, unit: "uni" },
            { name: "Mejillones", amount: 300, unit: "g" },
            { name: "Anillas de calamar", amount: 250, unit: "g" },
            { name: "Tomate rallado", amount: 2, unit: "uni" },
            { name: "Pimiento rojo", amount: 1, unit: "uni" },
            { name: "Azafrán y Pimentón", amount: 1, unit: "pizca" },
            { name: "Fumet (Caldo pescado)", amount: 1.2, unit: "l" }
        ],
        steps: [
            { title: "Sofreír", desc: "Dorar las gambas y retirar. Sofreír calamar y verduras (pimiento, tomate) con sal." },
            { title: "Arroz", desc: "Añadir arroz y pimentón/azafrán. Nacarar unos minutos." },
            { title: "Cocer", desc: "Añadir el fumet hirviendo. Cocer 18 min. Colocar gambas y mejillones al final." }
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
        image: "assets/fotos_recetas/arroz_negro.png",
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
    {
        id: 32,
        title: "Arroz Caldoso con Bogavante",
        family: "arroces",
        occasion: ["comida", "celebracion", "domingo"],
        time: 50,
        difficulty: "Media",
        servings: 4,
        origin: "Nacional/Costa",
        searchKeywords: ["bogavante", "marisco", "caldo", "lujo"],
        image: "assets/fotos_recetas/arroz_caldoso_con_bogavante.png",
        ingredients: [
            { name: "Arroz bomba", amount: 300, unit: "g" },
            { name: "Bogavante", amount: 2, unit: "uni" },
            { name: "Fumet de pescado rojo", amount: 1.5, unit: "l" },
            { name: "Tomate rallado", amount: 2, unit: "uni" },
            { name: "Ñora", amount: 1, unit: "uni" },
            { name: "Ajo y Perejil", amount: 1, unit: "majada" },
            { name: "Brandy", amount: 1, unit: "copa" }
        ],
        steps: [
            { title: "Bogavante", desc: "Trocear el bogavante (aprovechar jugos de la cabeza). Sofreírlo fuerte y retirar." },
            { title: "Sofrito", desc: "En el mismo aceite, sofreír ñora, ajo y tomate. Añadir el arroz y el brandy (flambear opcional)." },
            { title: "Cocer", desc: "Añadir caldo hirviendo. Cocer 15 min. Añadir el bogavante los últimos 3-4 min." }
        ]
    },
    {
        id: 30,
        title: "Arroz al Horno",
        family: "arroces",
        occasion: ["comida", "invierno", "domingo"],
        time: 55,
        difficulty: "Fácil",
        servings: 4,
        origin: "Comunidad Valenciana",
        searchKeywords: ["arroz", "costillas", "morcilla", "garbanzos"],
        image: "assets/fotos_recetas/arroz_al_horno.png",
        ingredients: [
            { name: "Arroz bomba", amount: 400, unit: "g" },
            { name: "Costillas de cerdo", amount: 300, unit: "g" },
            { name: "Morcilla de cebolla", amount: 2, unit: "uni" },
            { name: "Garbanzos cocidos", amount: 100, unit: "g" },
            { name: "Patata", amount: 1, unit: "uni" },
            { name: "Cabeza de ajos", amount: 1, unit: "uni" },
            { name: "Tomate", amount: 1, unit: "uni" },
            { name: "Caldo de cocido", amount: 800, unit: "ml" }
        ],
        steps: [
            { title: "Sofreír", desc: "Dorar costillas, morcilla y patata en rodajas. Reservar. Sofreír arroz en ese aceite." },
            { title: "Montar", desc: "En cazuela de barro, poner arroz, carne, garbanzos, tomate y la cabeza de ajos al centro." },
            { title: "Hornear", desc: "Añadir caldo hirviendo. Hornear 20-25 min a 220ºC hasta que esté seco y dorado." }
        ]
    },

    // --- VERDURAS ---
    {
        id: 3,
        title: "Gazpacho Andaluz",
        family: "verduras",
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
        id: 19,
        title: "Patatas Bravas",
        family: "tapas",
        occasion: ["tapas", "entrante", "comida"],
        time: 30,
        difficulty: "Fácil",
        servings: 4,
        origin: "Madrid",
        searchKeywords: ["patata", "salsa", "picante", "tapa"],
        image: "assets/fotos_recetas/patatas_bravas.png",
        ingredients: [
            { name: "Patatas", amount: 3, unit: "grandes" },
            { name: "Aceite de oliva", amount: 1, unit: "chorro" },
            { name: "Pimentón picante", amount: 1, unit: "cdita" },
            { name: "Pimentón dulce", amount: 1, unit: "cdita" },
            { name: "Harina", amount: 1, unit: "cda" },
            { name: "Caldo de pollo", amount: 200, unit: "ml" }
        ],
        steps: [
            { title: "Freír", desc: "Cortar patatas en cubos irregulares y freír. Primero suave, luego fuerte para dorar." },
            { title: "Salsa", desc: "Sofreír harina y pimentones con aceite. Añadir caldo poco a poco hasta espesar." }
        ]
    },
    {
        id: 20,
        title: "Ensaladilla Rusa",
        family: "tapas",
        occasion: ["tapas", "entrante", "comida"],
        time: 45,
        difficulty: "Fácil",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["patata", "mayonesa", "atún", "huevo"],
        image: "assets/fotos_recetas/ensaladilla_rusa.png",
        ingredients: [
            { name: "Patatas", amount: 4, unit: "uni" },
            { name: "Zanahorias", amount: 2, unit: "uni" },
            { name: "Huevos", amount: 2, unit: "uni" },
            { name: "Atún en aceite", amount: 2, unit: "latas" },
            { name: "Mayonesa", amount: 200, unit: "g" },
            { name: "Guisantes", amount: 50, unit: "g" }
        ],
        steps: [
            { title: "Cocer", desc: "Cocer patatas, zanahorias y huevos. Dejar enfriar." },
            { title: "Mezclar", desc: "Picar todo menudo, mezclar con atún y mayonesa." },
            { title: "Decorar", desc: "Servir con picos o regañás." }
        ]
    },
    {
        id: 21,
        title: "Calamares a la Romana",
        family: "tapas",
        occasion: ["tapas", "entrante", "bocadillo"],
        time: 30,
        difficulty: "Media",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["calamar", "rebozado", "frito", "limón"],
        image: "assets/fotos_recetas/calamares_a_la_romana.png",
        ingredients: [
            { name: "Anillas de calamar", amount: 500, unit: "g" },
            { name: "Harina", amount: 100, unit: "g" },
            { name: "Huevo", amount: 2, unit: "uni" },
            { name: "Gaseosa o Cerveza", amount: 50, unit: "ml" },
            { name: "Sal", amount: 1, unit: "pizca" }
        ],
        steps: [
            { title: "Masa", desc: "Hacer una masa con harina, huevo y gaseosa/cerveza. Debe quedar espesita." },
            { title: "Freír", desc: "Pasar aros por la masa y freír en aceite muy caliente." }
        ]

    },

    {
        id: 6,
        title: "Pisto Manchego",
        family: "verduras",
        occasion: ["comida", "cena", "tapas"],
        time: 50,
        difficulty: "Media",
        servings: 4,
        origin: "La Mancha",
        searchKeywords: ["calabacín", "pimiento", "tomate frito"],
        image: "assets/fotos_recetas/pisto_manchego.png",
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
        family: "verduras",
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
        image: "assets/fotos_recetas/fabada_asturiana.png",
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
        id: 25,
        title: "Lentejas con Chorizo",
        family: "carnes",
        occasion: ["comida", "invierno", "cuchara"],
        time: 50,
        difficulty: "Fácil",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["lenteja", "chorizo", "hierro"],
        image: "assets/fotos_recetas/lentejas_con_chorizo.png",
        ingredients: [
            { name: "Lentejas pardinas", amount: 400, unit: "g" },
            { name: "Chorizo", amount: 2, unit: "uni" },
            { name: "Zanahoria", amount: 2, unit: "uni" },
            { name: "Patata", amount: 1, unit: "uni" },
            { name: "Ajo y Laurel", amount: 1, unit: "uni" }
        ],
        steps: [
            { title: "Todo en crudo", desc: "Poner todos los ingredientes en olla con agua fría (cubrir 2 dedos)." },
            { title: "Cocer", desc: "Llevar a ebullición y bajar fuego. Cocinar 40-50 min hasta que estén tiernas." },
            { title: "Sofreír (opcional)", desc: "Se puede hacer un refrito de pimentón al final para dar brillo." }
        ]
    },
    {
        id: 26,
        title: "Cocido Madrileño",
        family: "carnes",
        occasion: ["comida", "domingo", "invierno"],
        time: 240,
        difficulty: "Alta",
        servings: 6,
        origin: "Madrid",
        searchKeywords: ["garbanzos", "sopa", "vuelcos"],
        image: "assets/fotos_recetas/cocido_madrileño.png",
        ingredients: [
            { name: "Garbanzos", amount: 500, unit: "g" },
            { name: "Morcillo", amount: 500, unit: "g" },
            { name: "Gallina", amount: 1, unit: "cuarto" },
            { name: "Hueso jamón", amount: 1, unit: "uni" },
            { name: "Tocino", amount: 100, unit: "g" },
            { name: "Verdura (repollo)", amount: 1, unit: "uni" },
            { name: "Chorizo y Morcilla", amount: 2, unit: "uni" },
            { name: "Fideos", amount: 100, unit: "g" }
        ],
        steps: [
            { title: "Caldos", desc: "Cocer carnes y garbanzos (en malla) durante 3-4 horas." },
            { title: "Verdura", desc: "Cocer repollo y embutidos aparte." },
            { title: "Tres Vuelcos", desc: "Servir: 1º Sopa (con fideos), 2º Garbanzos y verdura, 3º Carnes." }
        ]
    },
    {
        id: 28,
        title: "Migas de Pastor",
        family: "carnes",
        occasion: ["comida", "invierno", "campo"],
        time: 45,
        difficulty: "Media",
        servings: 4,
        origin: "Castilla-La Mancha/Extremadura",
        searchKeywords: ["pan", "panceta", "chorizo", "uvas"],
        image: "assets/fotos_recetas/migas.png",
        ingredients: [
            { name: "Pan de hogaza (duro)", amount: 500, unit: "g" },
            { name: "Panceta", amount: 150, unit: "g" },
            { name: "Chorizo", amount: 150, unit: "g" },
            { name: "Ajo", amount: 6, unit: "dientes" },
            { name: "Uvas (acompañar)", amount: 200, unit: "g" },
            { name: "Pimentón dulce", amount: 1, unit: "cdita" }
        ],
        steps: [
            { title: "Humedecer", desc: "Trocear el pan y salpicar con un poco de agua con sal. Dejar reposar tapado un rato." },
            { title: "Sofreír", desc: "Freír ajos, panceta y chorizo. Retirar. En esa grasa, echar el pan y remover constantemente." },
            { title: "Servir", desc: "Cuando el pan esté suelto y dorado, mezclar con la carne. Servir con uvas." }
        ]
    },
    {
        id: 29,
        title: "Morteruelo Conquense",
        family: "carnes",
        occasion: ["comida", "invierno", "caza", "entrante"],
        time: 120,
        difficulty: "Media",
        servings: 6,
        origin: "Cuenca",
        searchKeywords: ["higado", "caza", "paté", "caliente"],
        image: "assets/fotos_recetas/morteruelo.png",
        ingredients: [
            { name: "Hígado de cerdo", amount: 250, unit: "g" },
            { name: "Lomo de cerdo", amount: 250, unit: "g" },
            { name: "Gallina o Caza", amount: 250, unit: "g" },
            { name: "Pan rallado/Miga", amount: 200, unit: "g" },
            { name: "Especias (clavo, canela, alcaravea)", amount: 1, unit: "pizca" }
        ],
        steps: [
            { title: "Cocer", desc: "Cocer todas las carnes con agua y sal durante 2 horas hasta que se deshagan." },
            { title: "Machacar", desc: "Desmigar muy fino o triturar las carnes. Colar el caldo." },
            { title: "Guisar", desc: "Sofreír pimentón y especias, añadir carnes, caldo y pan. Cocer removiendo hasta obtener una pasta." }
        ]
    },
    {
        id: 27,
        title: "Potaje de Garbanzos",
        family: "verduras",
        occasion: ["comida", "semana santa", "vigilia"],
        time: 60,
        difficulty: "Media",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["espinacas", "bacalao", "huevo duro"],
        image: "assets/fotos_recetas/potaje_de_garbanzos.png",
        ingredients: [
            { name: "Garbanzos cocidos", amount: 600, unit: "g" },
            { name: "Espinacas", amount: 300, unit: "g" },
            { name: "Bacalao desmigado", amount: 200, unit: "g" },
            { name: "Huevo duro", amount: 2, unit: "uni" },
            { name: "Cebolla y Ajo", amount: 1, unit: "uni" },
            { name: "Pimentón", amount: 1, unit: "cdita" }
        ],
        steps: [
            { title: "Sofrito", desc: "Sofreír cebolla y ajo. Añadir pimentón y espinacas." },
            { title: "Guisar", desc: "Añadir garbanzos y cubrir con agua/caldo. Cocer 15 min." },
            { title: "Bacalao", desc: "Añadir bacalao los últimos 5 min. Servir con huevo picado." }
        ]
    },
    {
        id: 31,
        title: "Marmitako de Bonito",
        family: "pescados",
        occasion: ["comida", "verano", "cuchara"],
        time: 45,
        difficulty: "Media",
        servings: 4,
        origin: "País Vasco",
        searchKeywords: ["bonito", "atun", "patata", "guiso"],
        image: "assets/fotos_recetas/marmitako_de_bonito .png",
        ingredients: [
            { name: "Bonito fresco (tacos)", amount: 600, unit: "g" },
            { name: "Patatas", amount: 1, unit: "kg" },
            { name: "Pimiento verde", amount: 2, unit: "uni" },
            { name: "Cebolla", amount: 1, unit: "uni" },
            { name: "Tomate", amount: 2, unit: "uni" },
            { name: "Caldo de pescado", amount: 1, unit: "l" },
            { name: "Carne pimiento choricero", amount: 1, unit: "cda" }
        ],
        steps: [
            { title: "Sofreír", desc: "Pochar cebolla y pimientos. Añadir patatas 'chascadas' (rotas) y sofreír." },
            { title: "Cocer", desc: "Añadir carne de pimiento choricero y caldo. Cocer 20 min hasta patata tierna." },
            { title: "Bonito", desc: "Apagar el fuego. Echar los tacos de bonito y dejar que se hagan con el calor residual (2 min)." }
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
    {
        id: 22,
        title: "Judías Pintas con Arroz",
        family: "carnes",
        occasion: ["comida", "invierno", "cuchara"],
        time: 75,
        difficulty: "Media",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["legumbre", "guiso", "arroz", "chorizo"],
        image: "assets/fotos_recetas/judias_pintas_con_arroz.png",
        ingredients: [
            { name: "Judías pintas (remojo 12h)", amount: 400, unit: "g" },
            { name: "Arroz redondo", amount: 100, unit: "g" },
            { name: "Chorizo", amount: 1, unit: "uni" },
            { name: "Panceta", amount: 150, unit: "g" },
            { name: "Cebolla", amount: 1, unit: "uni" },
            { name: "Ajo", amount: 2, unit: "dientes" },
            { name: "Pimentón dulce", amount: 1, unit: "cdita" },
            { name: "Laurel", amount: 1, unit: "hoja" }
        ],
        steps: [
            { title: "Cocer Judías", desc: "Cocer las judías con el chorizo, panceta, ajo, cebolla y laurel en agua fría. Unas 2 horas o 30 min en olla rápida." },
            { title: "Sofrito", desc: "Retirar la cebolla y ajo cocidos, triturarlos con un poco de caldo y devolver a la olla. Si se quiere, hacer un sofrito de pimentón aparte." },
            { title: "Arroz", desc: "Cuando las judías estén tiernas, añadir el arroz y cocer 15-18 minutos más hasta que esté en su punto. Dejar reposar." }
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
        title: "Fideuá Tradicional",
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
        id: 33,
        title: "Fideuá del Senyoret",
        family: "pastas",
        occasion: ["comida", "domingo", "amigos"],
        time: 45,
        difficulty: "Fácil",
        servings: 4,
        origin: "Valencia",
        searchKeywords: ["fideo gordo", "marisco pelado", "gambones"],
        image: "assets/fotos_recetas/fideuá_del-senyoret.png",
        ingredients: [
            { name: "Fideo gordo", amount: 300, unit: "g" },
            { name: "Gambones", amount: 8, unit: "uni" },
            { name: "Mejillones (sin cáscara)", amount: 150, unit: "g" },
            { name: "Camarones pelados", amount: 100, unit: "g" },
            { name: "Anillas de calamar", amount: 150, unit: "g" },
            { name: "Sepia", amount: 1, unit: "media" },
            { name: "Caldo de pescado", amount: 600, unit: "ml" },
            { name: "Ñora y Ajo", amount: 1, unit: "pizca" }
        ],
        steps: [
            { title: "Caldo Express", desc: "Hacer un caldo con las cabezas y cáscaras de los gambones. Colar y reservar (ratio 2:1 caldo:pasta)." },
            { title: "Sofrito", desc: "Dorar ajo y ñora. Añadir el marisco limpio (gambas, calamar, sepia, mejillones) y rehogar." },
            { title: "Cocer", desc: "Añadir el caldo de gambas caliente. Hervir, ajustar sal/azafrán y echar los fideos. Cocinar hasta que estén en su punto." }
        ]
    },
    {
        id: 34,
        title: "Fideuá Exprés de Sepia",
        family: "pastas",
        occasion: ["comida", "rápida", "diario"],
        time: 20,
        difficulty: "Fácil",
        servings: 4,
        origin: "Mediterráneo",
        searchKeywords: ["sepia", "fideo fino", "cabellin", "all i oli"],
        image: "assets/fotos_recetas/fideuá_exprés_de_sepia.png",
        ingredients: [
            { name: "Sepia limpia", amount: 600, unit: "g" },
            { name: "Fideo cabellín", amount: 300, unit: "g" },
            { name: "Caldo de pescado/fumet", amount: 600, unit: "ml" },
            { name: "Tomate concentrado", amount: 20, unit: "g" },
            { name: "Ajo", amount: 2, unit: "dientes" },
            { name: "Aceite de oliva", amount: 20, unit: "ml" }
        ],
        steps: [
            { title: "Preparar Sepia", desc: "Limpiar sepia: separar tentáculos y aletas, cortar cuerpo en tiras y luego en trozos. Saltear en aceite hasta dorar." },
            { title: "Sofrito y Fideos", desc: "Rehogar ajo, añadir tomate concentrado y mezclar. Añadir los fideos (previamente tostados al horno opcionalmente) y mezclar con la sepia." },
            { title: "Cocer y Reposar", desc: "Añadir caldo caliente. Cocer a fuego vivo (aprox 6 min). Apagar y dejar reposar para que los fideos se 'ricen'." }
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

    // --- DESAYUNOS ---
    {
        id: 40,
        title: "Churros con Chocolate",
        family: "desayunos",
        occasion: ["desayuno", "merienda", "domingo"],
        time: 40,
        difficulty: "Media",
        servings: 4,
        origin: "Nacional",
        searchKeywords: ["churro", "chocolate", "frito", "masa"],
        image: "https://images.unsplash.com/photo-1624300603538-1207400f4116?q=80&w=1000&auto=format&fit=crop",
        ingredients: [
            { name: "Harina de fuerza", amount: 250, unit: "g" },
            { name: "Agua", amount: 250, unit: "ml" },
            { name: "Sal", amount: 1, unit: "cdita" },
            { name: "Aceite suave (freír)", amount: 1, unit: "l" },
            { name: "Chocolate a la taza", amount: 200, unit: "g" },
            { name: "Leche", amount: 500, unit: "ml" }
        ],
        steps: [
            { title: "Masa", desc: "Calentar agua con sal hasta hervir. Echar la harina de golpe y remover fuerte hasta que se despegue." },
            { title: "Formar", desc: "Meter la masa en churrera (importante para que no estallen) y hacer tiras." },
            { title: "Freír", desc: "Freír en aceite muy caliente. Servir con chocolate caliente espeso." }
        ]
    },
    {
        id: 41,
        title: "Magdalenas de Yogur",
        family: "desayunos",
        occasion: ["desayuno", "merienda"],
        time: 35,
        difficulty: "Fácil",
        servings: 12,
        origin: "Casero",
        searchKeywords: ["bollo", "yogur", "limon", "esponjoso"],
        image: "assets/fotos_recetas/magdalenas_de_yogur.png",
        ingredients: [
            { name: "Huevos", amount: 3, unit: "uni" },
            { name: "Azúcar", amount: 200, unit: "g" },
            { name: "Aceite de girasol", amount: 125, unit: "ml" },
            { name: "Yogur natural", amount: 1, unit: "uni" },
            { name: "Harina repostería", amount: 220, unit: "g" },
            { name: "Levadura", amount: 1, unit: "sobre" },
            { name: "Ralladura de limón", amount: 1, unit: "uni" }
        ],
        steps: [
            { title: "Batir", desc: "Batir huevos y azúcar mucho (5 min). Añadir aceite, yogur y ralladura." },
            { title: "Mezclar", desc: "Incorporar harina y levadura tamizadas con suavidad. Dejar reposar masa 30 min en nevera (truco copete)." },
            { title: "Hornear", desc: "Llenar moldes 3/4. Horno precalentado 220ºC, bajar a 200ºC al meterlas. 15 min." }
        ]
    },
    {
        id: 42,
        title: "Bizcocho de Yogur",
        family: "desayunos",
        occasion: ["desayuno", "merienda"],
        time: 45,
        difficulty: "Fácil",
        servings: 8,
        origin: "Casero",
        searchKeywords: ["bizcocho", "yogur", "facil", "123"],
        image: "assets/fotos_recetas/bizcocho_de_yogur.png",
        ingredients: [
            { name: "Yogur natural (medida)", amount: 1, unit: "uni" },
            { name: "Huevos", amount: 3, unit: "uni" },
            { name: "Harina (3 medidas yogur)", amount: 375, unit: "g" },
            { name: "Azúcar (2 medidas yogur)", amount: 250, unit: "g" },
            { name: "Aceite (1 medida yogur)", amount: 125, unit: "ml" },
            { name: "Levadura", amount: 1, unit: "sobre" },
            { name: "Ralladura limón/naranja", amount: 1, unit: "uni" }
        ],
        steps: [
            { title: "Mezclar", desc: "Batir huevos con azúcar. Añadir yogur y aceite. Añadir harina y levadura." },
            { title: "Hornear", desc: "Molde engrasado. Horno 180ºC durante 35-40 min. Pinchar para ver si sale limpio." }
        ]
    },
    {
        id: 43,
        title: "Tosta Aguacate y Anchoas",
        family: "desayunos",
        occasion: ["desayuno", "brunch", "saludable"],
        time: 10,
        difficulty: "Fácil",
        servings: 1,
        origin: "Moderno",
        searchKeywords: ["tostada", "desayuno saludable", "anchoas"],
        image: "assets/fotos_recetas/tosta_aguacate_y_anchoas.png",
        ingredients: [
            { name: "Pan de hogaza tostado", amount: 2, unit: "rebanadas" },
            { name: "Aguacate maduro", amount: 0.5, unit: "uni" },
            { name: "Anchoas en aceite", amount: 3, unit: "filetes" },
            { name: "Tomates cherry", amount: 3, unit: "uni" },
            { name: "Aceite y Pimienta", amount: 1, unit: "pizca" }
        ],
        steps: [
            { title: "Base", desc: "Tostar el pan. Machacar el aguacate con un tenedor y extender encima." },
            { title: "Toppings", desc: "Colocar los cherrys partidos y las anchoas encima. Chorrito de aceite y pimienta." }
        ]
    },
    {
        id: 44,
        title: "Pan con Tomate y Jamón",
        family: "desayunos",
        occasion: ["desayuno", "merienda", "tapas"],
        time: 5,
        difficulty: "Fácil",
        servings: 1,
        origin: "Cataluña/Nacional",
        searchKeywords: ["pan tumaca", "desayuno andaluz", "jamon"],
        image: "assets/fotos_recetas/pan_con_tomate_y_jamón.png",
        ingredients: [
            { name: "Pan de mollete o chapata", amount: 2, unit: "rebanadas" },
            { name: "Tomate maduro (rallar/restregar)", amount: 1, unit: "uni" },
            { name: "Aceite virgen extra", amount: 1, unit: "buen chorro" },
            { name: "Jamón Serrano/Ibérico", amount: 50, unit: "g" },
            { name: "Sal (opcional)", amount: 1, unit: "pizca" }
        ],
        steps: [
            { title: "Tomate", desc: "Tostar el pan. Restregar el tomate partido o rallarlo y ponerlo encima." },
            { title: "Aceite y Jamón", desc: "Echar un buen chorro de aceite de oliva, pizca de sal y cubrir con el jamón." }
        ]
    },
    {
        id: 45,
        title: "Smoothie Bowl de Mango",
        family: "desayunos",
        occasion: ["desayuno", "brunch", "saludable"],
        time: 15,
        difficulty: "Fácil",
        servings: 1,
        origin: "Moderno",
        searchKeywords: ["batido", "fruta", "bowl", "avena"],
        image: "assets/fotos_recetas/smoothie_bowl_de_mango.png",
        ingredients: [
            { name: "Mango maduro congelado", amount: 1, unit: "uni" },
            { name: "Plátano", amount: 1, unit: "uni" },
            { name: "Yogur griego/skyr", amount: 150, unit: "g" },
            { name: "Semillas de Chía", amount: 1, unit: "cdita" },
            { name: "Frutos rojos (decorar)", amount: 1, unit: "puñado" },
            { name: "Cúrcuma (opcional)", amount: 1, unit: "pizca" }
        ],
        steps: [
            { title: "Triturar", desc: "Triturar el mango y el plátano con el yogur hasta tener una crema espesa. (Añadir cúrcuma opcional)." },
            { title: "Bowl", desc: "Servir en un bol. Decorar por encima con la chía y frutas frescas cortadas." }
        ]
    },
    {
        id: 35,
        title: "Tarta de Santiago",
        family: "postres",
        occasion: ["postre", "merienda", "celebracion"],
        time: 50,
        difficulty: "Fácil",
        servings: 8,
        origin: "Galicia",
        searchKeywords: ["almendra", "cruz", "sin gluten"],
        image: "assets/fotos_recetas/tarta_de_santiago.png",
        ingredients: [
            { name: "Almendra molida", amount: 250, unit: "g" },
            { name: "Azúcar", amount: 250, unit: "g" },
            { name: "Huevos grandes", amount: 5, unit: "uni" },
            { name: "Ralladura de limón", amount: 1, unit: "uni" },
            { name: "Canela", amount: 1, unit: "cdita" },
            { name: "Azúcar glass (decorar)", amount: 50, unit: "g" }
        ],
        steps: [
            { title: "Batir", desc: "Mezclar huevos y azúcar con varillas hasta que blanqueen un poco." },
            { title: "Almendra", desc: "Añadir la almendra, canela y ralladura de limón. Mezclar suavemente." },
            { title: "Hornear", desc: "Molde untado con mantequilla. Horno 180ºC durante 30-35 min hasta que dore." },
            { title: "Cruz", desc: "Dejar enfriar. Poner la plantilla de la Cruz de Santiago y espolvorear azúcar glass." }
        ]
    }
];
