const MASTER_ITEMS = [
    // --- FRUITS (PHAL) - COMPLETE ---
    { id: 1, name: "APPLE (SEB)", cat: "FRUITS", emoji: "🍎" },
    { id: 2, name: "BANANA (KELA)", cat: "FRUITS", emoji: "🍌" },
    { id: 3, name: "ORANGE (MALTA)", cat: "FRUITS", emoji: "🍊" },
    { id: 4, name: "MANGO (AAM)", cat: "FRUITS", emoji: "🥭" },
    { id: 5, name: "GRAPES (ANGOOR)", cat: "FRUITS", emoji: "🍇" },
    { id: 6, name: "STRAWBERRY", cat: "FRUITS", emoji: "🍓" },
    { id: 7, name: "WATERMELON (TARBOOZ)", cat: "FRUITS", emoji: "🍉" },
    { id: 8, name: "GUAVA (AMROOD)", cat: "FRUITS", emoji: "🍐" },
    { id: 9, name: "PEACH (AAROO)", cat: "FRUITS", emoji: "🍑" },
    { id: 10, name: "PINEAPPLE", cat: "FRUITS", emoji: "🍍" },
    { id: 11, name: "POMEGRANATE (ANAR)", cat: "FRUITS", emoji: "🍎" },

    // --- VEGETABLES (SABZIYAN) - COMPLETE ---
    { id: 20, name: "POTATO (ALOO)", cat: "VEGETABLES", emoji: "🥔" },
    { id: 21, name: "TOMATO (TAMATAR)", cat: "VEGETABLES", emoji: "🍅" },
    { id: 22, name: "ONION (PIYAZ)", cat: "VEGETABLES", emoji: "🧅" },
    { id: 23, name: "GINGER (ADRAK)", cat: "VEGETABLES", emoji: "🫚" },
    { id: 24, name: "GARLIC (LEHSAN)", cat: "VEGETABLES", emoji: "🧄" },
    { id: 25, name: "GREEN CHILLI (HARI MIRCH)", cat: "VEGETABLES", emoji: "🌶️" },
    { id: 26, name: "LEMON (LIMU)", cat: "VEGETABLES", emoji: "🍋" },
    { id: 27, name: "SPINACH (PALAK)", cat: "VEGETABLES", emoji: "🥬" },
    { id: 28, name: "CUCUMBER (KHEERA)", cat: "VEGETABLES", emoji: "🥒" },
    { id: 29, name: "CARROT (GAJAR)", cat: "VEGETABLES", emoji: "🥕" },
    { id: 30, name: "CAULIFLOWER (GOBI)", cat: "VEGETABLES", emoji: "🥦" },
    { id: 31, name: "PEAS (MATAR)", cat: "VEGETABLES", emoji: "🫛" },
    { id: 32, name: "MINT (PODINA)", cat: "VEGETABLES", emoji: "🌱" },

    // --- CHILLI POWDERS & SPICES (ALL TYPES) ---
    { id: 40, name: "RED CHILLI POWDER (LAL MIRCH)", cat: "KITCHEN", emoji: "🌶️" },
    { id: 41, name: "KASHMIRI MIRCH", cat: "KITCHEN", emoji: "🌶️" },
    { id: 42, name: "CHILLI FLAKES (KUTTI MIRCH)", cat: "KITCHEN", emoji: "🔥" },
    { id: 43, name: "TURMERIC POWDER (HALDI)", cat: "KITCHEN", emoji: "🟡" },
    { id: 44, name: "BLACK PEPPER (KALI MIRCH)", cat: "KITCHEN", emoji: "🌑" },
    { id: 45, name: "WHITE PEPPER (SAFAID MIRCH)", cat: "KITCHEN", emoji: "⚪" },
    { id: 46, name: "SALT (NAMAK)", cat: "KITCHEN", emoji: "🧂" },
    { id: 47, name: "GARAM MASALA", cat: "KITCHEN", emoji: "🤎" },
    { id: 48, name: "CHAAT MASALA", cat: "KITCHEN", emoji: "✨" },

    // --- FREEZER & MEAT (FULL VARIETY) ---
    { id: 60, name: "CHICKEN NUGGETS", cat: "FREEZER", emoji: "🍗" },
    { id: 61, name: "CHICKEN PATTIES / BURGERS", cat: "FREEZER", emoji: "🍔" },
    { id: 62, name: "KOFTAY", cat: "FREEZER", emoji: "🧆" },
    { id: 63, name: "SEEKH KEBABS", cat: "FREEZER", emoji: "🍢" },
    { id: 64, name: "BEEF QEEMA", cat: "FREEZER", emoji: "🥩" },
    { id: 65, name: "BEEF WITH BONES (HADDI)", cat: "FREEZER", emoji: "🦴" },
    { id: 66, name: "MUTTON", cat: "FREEZER", emoji: "🍖" },
    { id: 67, name: "FROZEN FRIES", cat: "FREEZER", emoji: "🍟" },
    { id: 68, name: "FROZEN PARATHAS", cat: "FREEZER", emoji: "🫓" },

    // --- SKINCARE & GIRLS HYGIENE (FULL) ---
    { id: 80, name: "FACE WASH", cat: "SKINCARE", emoji: "🧼" },
    { id: 81, name: "SUNSCREEN / SUNBLOCK", cat: "SKINCARE", emoji: "☀️" },
    { id: 82, name: "MOISTURIZER / LOTION", cat: "SKINCARE", emoji: "🧴" },
    { id: 83, name: "MICELLAR WATER", cat: "SKINCARE", emoji: "💦" },
    { id: 84, name: "VITAMIN C SERUM", cat: "SKINCARE", emoji: "🧪" },
    { id: 85, name: "SHEET MASKS", cat: "SKINCARE", emoji: "🎭" },
    { id: 86, name: "LIP BALM / GLOSS", cat: "SKINCARE", emoji: "💄" },
    { id: 87, name: "SANITARY PADS", cat: "SKINCARE", emoji: "🌸" },
    { id: 88, name: "SHAMPOO & CONDITIONER", cat: "SKINCARE", emoji: "🧴" },

    // --- CLEANING & HOUSEHOLD ---
    { id: 100, name: "HARPIC (TOILET CLEANER)", cat: "CLEANING", emoji: "🚽" },
    { id: 101, name: "MAX/VIM DISHWASH LIQUID", cat: "CLEANING", emoji: "🧼" },
    { id: 102, name: "SURF EXCEL / ARIEL", cat: "CLEANING", emoji: "🧺" },
    { id: 103, name: "DISHWASH BAR (SOAP)", cat: "CLEANING", emoji: "🧽" },
    { id: 104, name: "PHENYLE (FLOOR CLEANER)", cat: "CLEANING", emoji: "🧹" },
    { id: 105, name: "SCRUBBER (JAALI)", cat: "CLEANING", emoji: "🧽" },

    // --- KITCHEN & DAIRY ---
    { id: 120, name: "EGGS (ANDAY)", cat: "DAIRY", emoji: "🥚" },
    { id: 121, name: "MILK (DOODH)", cat: "DAIRY", emoji: "🥛" },
    { id: 122, name: "FLOUR (AATA)", cat: "KITCHEN", emoji: "🌾" },
    { id: 123, name: "RICE (CHAWAL)", cat: "KITCHEN", emoji: "🍚" },
    { id: 124, name: "COOKING OIL / GHEE", cat: "KITCHEN", emoji: "🧴" },
    { id: 125, name: "TEA / COFFEE", cat: "KITCHEN", emoji: "☕" }
];