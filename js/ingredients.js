const ingredientsData = [
    // --- CONDIMENTOS ---
    {
        name: "Perejil",
        category: "Condimentos",
        emoji: "🌿",
        benefits: "Excelente fuente de Vitamina C y K. Diurético natural y antioxidante.",
        description: "Hierba mediterránea esencial. Úsalo fresco al final de la cocción para mantener su aroma."
    },
    {
        name: "Ajo",
        category: "Condimentos",
        emoji: "🧄",
        benefits: "Antibiótico natural, mejora la circulación y reduce la presión arterial.",
        description: "La base de casi todos los sofritos españoles. Picado, laminado o entero 'en camisa'."
    },
    {
        name: "Azafrán",
        category: "Condimentos",
        emoji: "🌸",
        benefits: "Antioxidante poderoso, mejora el estado de ánimo y la memoria.",
        description: "El 'oro rojo'. Aporta color amarillo intenso y un sabor inconfundible a paellas y guisos."
    },
    {
        name: "Pimentón de la Vera",
        category: "Condimentos",
        emoji: "🌶️",
        benefits: "Alto contenido en antioxidantes (licopeno). Estimula la circulación.",
        description: "Puede ser dulce, agridulce o picante. Aporta el característico sabor ahumado."
    },
    {
        name: "Laurel",
        category: "Condimentos",
        emoji: "🍃",
        benefits: "Ayuda a la digestión y reduce la inflamación.",
        description: "Indispensable en guisos de legumbres y escabeches. Se usa la hoja seca o fresca."
    },

    // --- VERDURAS ---
    {
        name: "Tomate",
        category: "Verduras",
        emoji: "🍅",
        benefits: "Rico en licopeno (protege la piel y corazón) y potasio.",
        description: "Rey de la huerta. Base del gazpacho, salmorejo y sofritos. Mejor en temporada (verano)."
    },
    {
        name: "Pimiento Rojo",
        category: "Verduras",
        emoji: "🫑",
        benefits: "Más Vitamina C que la naranja. Bueno para la vista y piel.",
        description: "Dulce y carnoso. Ideal para asar, freír o crudo en ensaladas."
    },
    {
        name: "Cebolla",
        category: "Verduras",
        emoji: "🧅",
        benefits: "Cardiosaludable, diurética y prebiótica.",
        description: "Imprescindible. Caramelizada aporta dulzor natural a los platos."
    },
    {
        name: "Patata",
        category: "Verduras",
        emoji: "🥔",
        benefits: "Energía sostenida (carbohidratos complejos), rica en potasio y B6.",
        description: "El tubérculo versátil: frita, cocida, asada o en tortilla."
    },
    {
        name: "Espinacas",
        category: "Verduras",
        emoji: "🥬",
        benefits: "Hierro, magnesio y vitaminas A, C y K. Fortalece músculos.",
        description: "Hojas verdes tiernas. Reducen mucho su tamaño al cocinarse."
    },

    // --- CARNES ---
    {
        name: "Jamón Ibérico",
        category: "Carnes",
        emoji: "🥓",
        benefits: "Grasas saludables (ácido oleico) y proteínas de alto valor biológico.",
        description: "Joya gastronómica. Curado con sal y tiempo. Sabor umami intenso."
    },
    {
        name: "Ternera",
        category: "Carnes",
        emoji: "🥩",
        benefits: "Gran fuente de hierro, zinc y proteínas para la masa muscular.",
        description: "Carne roja. Ideal para estofados lentos o a la plancha vuelta y vuelta."
    },
    {
        name: "Pollo",
        category: "Carnes",
        emoji: "🍗",
        benefits: "Proteína magra, baja en grasa, fácil digestión.",
        description: "Carne blanca muy versátil. Se aprovecha todo, hasta la carcasa para caldo."
    },

    // --- PESCADOS ---
    {
        name: "Merluza",
        category: "Pescados",
        emoji: "🐟",
        benefits: "Pescado blanco bajo en grasa, rico en proteínas y vitaminas B.",
        description: "Sabor suave y textura delicada. Muy popular en salsa verde o rebozada."
    },
    {
        name: "Bacalao",
        category: "Pescados",
        emoji: "🐟",
        benefits: "Bajo en calorías, rico en yodo y omega-3.",
        description: "Pescado de aguas frías. En salazón se conserva meses y requiere desalado."
    },
    {
        name: "Gambas",
        category: "Pescados",
        emoji: "🦐",
        benefits: "Bajas en calorías, ricas en yodo y selenio.",
        description: "Marisco muy apreciado. Las cabezas concentran todo el sabor para fumets."
    },
    {
        name: "Bonito del Norte",
        category: "Pescados",
        emoji: "🐟",
        benefits: "Pescado azul rico en Omega-3 (cardiosaludable).",
        description: "Carne firme y sabrosa. Ideal para guisos (Marmitako) o conservas."
    },

    // --- FRUTAS ---
    {
        name: "Limón",
        category: "Frutas",
        emoji: "🍋",
        benefits: "Vitamina C, digestivo y depurativo.",
        description: "Aderezo fundamental. Su zumo 'cocina' ceviches y evita oxidación."
    },
    {
        name: "Naranja",
        category: "Frutas",
        emoji: "🍊",
        benefits: "Refuerza el sistema inmune, fibra y antioxidantes.",
        description: "Fruta de mesa o para zumo. Valencia es famosa por ellas."
    },
    {
        name: "Mango",
        category: "Frutas",
        emoji: "🥭",
        benefits: "Rico en vitaminas A y C, enzimas digestivas y sabor tropical.",
        description: "Fruta dulce y jugosa. La variedad de Málaga es exquisita."
    },
    {
        name: "Plátano",
        category: "Frutas",
        emoji: "🍌",
        benefits: "Potasio para los músculos y energía rápida natural.",
        description: "El de Canarias tiene motitas. Dulce y cremoso."
    },
    {
        name: "Manzana",
        category: "Frutas",
        emoji: "🍎",
        benefits: "Fibra (pectina) y vitamina C. Ayuda a regular el colesterol.",
        description: "Versátil para postres o cruda. La Reineta es ideal para asar."
    },
    {
        name: "Pera",
        category: "Frutas",
        emoji: "🍐",
        benefits: "Muy hidratante y digerible. Rica en potasio.",
        description: "La Conferencia es dulce y jugosa. Perfecta al vino o en compota."
    },
    {
        name: "Fresas",
        category: "Frutas",
        emoji: "🍓",
        benefits: "Pocas calorías, mucha Vitamina C y antioxidantes.",
        description: "Dulces y ácidas. De temporada en primavera (Fresón de Palos)."
    },
    {
        name: "Uvas",
        category: "Frutas",
        emoji: "🍇",
        benefits: "Resveratrol (antioxidante) y energía natural.",
        description: "Imprescindibles en Nochevieja. Blancas o tintas."
    },
    {
        name: "Melón",
        category: "Frutas",
        emoji: "🍈",
        benefits: "Muy diurético y refrescante. Vitaminas A y E.",
        description: "El Piel de Sapo es el clásico español. Dulce como la miel."
    },
    {
        name: "Sandía",
        category: "Frutas",
        emoji: "🍉",
        benefits: "90% agua, ideal para hidratarse. Contiene citrulina.",
        description: "Reina del verano. Servir muy fría."
    },

    // --- MÁS VERDURAS ---
    {
        name: "Calabacín",
        category: "Verduras",
        emoji: "🥒",
        benefits: "Bajo en calorías, suave para el estómago (mucílagos).",
        description: "Fundamental en el pisto. Piel comestible y nutritiva."
    },
    {
        name: "Berenjena",
        category: "Verduras",
        emoji: "🍆",
        benefits: "Antioxidante (nasunina en la piel) y fibra.",
        description: "Base de la escalivada. Se debe cocinar bien para quitar el amargor."
    },
    {
        name: "Zanahoria",
        category: "Verduras",
        emoji: "🥕",
        benefits: "Betacarotenos para la vista y piel. Fortalece uñas y pelo.",
        description: "Dulce base de sofritos. Cruda, cocida o asada."
    },
    {
        name: "Lechuga",
        category: "Verduras",
        emoji: "🥗",
        benefits: "Relajante natural (lactuarium), agua y frescura.",
        description: "La Romana u Oreja de Burro son clásicas de ensalada mixta."
    },
    {
        name: "Judías Verdes",
        category: "Verduras",
        emoji: "🟢",
        benefits: "Fibra, folatos y vitamina C.",
        description: "Plato de cuchara o salteadas con jamón. Planas o redondas."
    },
    {
        name: "Calabaza",
        category: "Verduras",
        emoji: "🎃",
        benefits: "Antioxidante, buena para la presión arterial y digestión.",
        description: "Dulzor natural para cremas o repostería (Cabello de Ángel)."
    },

    // --- LÁCTEOS ---
    {
        name: "Leche Entera",
        category: "Lácteos",
        emoji: "🥛",
        benefits: "Calcio y vitamina D para los huesos. Proteínas completas.",
        description: "Base de bechameles, postres (Arroz con Leche) y desayunos."
    },
    {
        name: "Yogur Natural",
        category: "Lácteos",
        emoji: "🥣",
        benefits: "Probióticos para la flora intestinal. Calcio de fácil absorción.",
        description: "Postre simple o ingrediente de bizcochos y salsas."
    },
    {
        name: "Queso Manchego",
        category: "Lácteos",
        emoji: "🧀",
        benefits: "Alto contenido en proteínas y calcio concentrado.",
        description: "De oveja, sabor intenso. Tapa nacional por excelencia."
    },
    {
        name: "Queso Fresco",
        category: "Lácteos",
        emoji: "🧀",
        benefits: "Bajo en grasa, proteínas ligeras.",
        description: "Tipo Burgos. Clásico con miel y nueces o carne de membrillo."
    },
    {
        name: "Mantequilla",
        category: "Lácteos",
        emoji: "🧈",
        benefits: "Vitaminas liposolubles (A, D, E). Energía.",
        description: "Sabor lácteo rico para repostería o tostadas."
    },

    // --- ZUMOS ---
    {
        name: "Zumo de Naranja",
        category: "Zumos",
        emoji: "🍊",
        benefits: "Bomba de Vitamina C al instante. Refuerza defensas.",
        description: "El desayuno español no está completo sin él. Recién exprimido."
    },
    {
        name: "Zumo de Piña",
        category: "Zumos",
        emoji: "🍍",
        benefits: "Diurético y digestivo (bromelina).",
        description: "Dulce y tropical. Ayuda a digerir comidas pesadas."
    },
    {
        name: "Zumo de Melocotón",
        category: "Zumos",
        emoji: "🍑",
        benefits: "Suave para el estómago, vitamina A.",
        description: "Dulce y denso. Favorito de los niños."
    }
];
