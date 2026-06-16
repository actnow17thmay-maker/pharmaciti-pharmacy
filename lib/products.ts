export type IconKey =
  | "pill"
  | "flask"
  | "heart"
  | "sparkles"
  | "baby"
  | "paw"
  | "device"
  | "consult";

export type Category = {
  id: string;
  name: string;
  iconKey: IconKey;
  badge?: string;
};

/** Pharmacy-only sub-categories shown as round sub-tabs on the products page */
export type SubcategoryKey =
  | "tablets"
  | "syrups"
  | "general"
  | "vitamins"
  | "diabetes"
  | "pain-relief"
  | "cold-cough"
  | "skin-care";

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory?: SubcategoryKey;
  pack: string;
  price: number;
  mrp: number;
  rx: boolean;
  tag?: string;
  rating: number;
  description: string;
  highlights: string[];
  tint: string; // pastel background for the product tile
};

export const categories: Category[] = [
  { id: "pharmacy", name: "Medicines", iconKey: "pill" },
  { id: "lab-tests", name: "Lab Tests", iconKey: "flask" },
  { id: "wellness", name: "Wellness", iconKey: "heart" },
  { id: "personal-care", name: "Personal Care", iconKey: "sparkles" },
  { id: "baby-care", name: "Baby Care", iconKey: "baby" },
  { id: "pet-care", name: "Pet Care", iconKey: "paw", badge: "NEW" },
  { id: "devices", name: "Devices", iconKey: "device" },
  { id: "consults", name: "Consults", iconKey: "consult" },
];

const TINTS = [
  "#E6F4F1",
  "#E3F0FB",
  "#EAF6EF",
  "#E9F1FA",
  "#E7F5F4",
  "#EEF2FB",
  "#E4F3EC",
];

const raw: Omit<Product, "tint">[] = [
  {
    id: "dolo-650",
    name: "Dolo 650 Tablet",
    brand: "Micro Labs",
    category: "pharmacy",
    subcategory: "tablets",
    pack: "Strip of 15 tablets",
    price: 26,
    mrp: 31,
    rx: false,
    tag: "Bestseller",
    rating: 4.8,
    description:
      "Paracetamol 650mg tablets used to reduce fever and relieve mild to moderate pain such as headache, body ache and toothache.",
    highlights: ["Fast fever relief", "Trusted by doctors", "For ages 12+"],
  },
  {
    id: "vitamin-c-zinc",
    name: "Vitamin C + Zinc Tablets",
    brand: "Pharmaciti Wellness",
    category: "wellness",
    pack: "Bottle of 60 tablets",
    price: 289,
    mrp: 399,
    rx: false,
    tag: "Bestseller",
    rating: 4.6,
    description:
      "Daily immunity support with 1000mg Vitamin C and Zinc. Helps fight fatigue and supports healthy skin.",
    highlights: ["Boosts immunity", "Antioxidant rich", "Sugar free"],
  },
  {
    id: "cetirizine",
    name: "Cetirizine 10mg",
    brand: "Pharmaciti Generics",
    category: "pharmacy",
    subcategory: "tablets",
    pack: "Strip of 10 tablets",
    price: 18,
    mrp: 24,
    rx: false,
    rating: 4.5,
    description:
      "Antihistamine for relief from sneezing, runny nose, watery eyes and other allergy symptoms.",
    highlights: ["24 hr allergy relief", "Non-drowsy", "Once daily"],
  },
  {
    id: "pantoprazole",
    name: "Pantoprazole 40mg",
    brand: "Sun Pharma",
    category: "pharmacy",
    subcategory: "tablets",
    pack: "Strip of 15 tablets",
    price: 85,
    mrp: 110,
    rx: true,
    rating: 4.4,
    description:
      "Reduces stomach acid. Used to treat acidity, heartburn and acid reflux. Prescription required.",
    highlights: ["Acidity relief", "Take before food", "Doctor advised"],
  },
  {
    id: "cough-syrup",
    name: "Herbal Cough Syrup",
    brand: "Pharmaciti Care",
    category: "pharmacy",
    subcategory: "syrups",
    pack: "Bottle of 100 ml",
    price: 92,
    mrp: 120,
    rx: false,
    rating: 4.3,
    description:
      "Soothing herbal syrup that relieves dry and wet cough and calms an irritated throat.",
    highlights: ["Herbal formula", "Soothes throat", "For dry & wet cough"],
  },
  {
    id: "pain-spray",
    name: "Pain Relief Spray",
    brand: "Pharmaciti Care",
    category: "pharmacy",
    subcategory: "general",
    pack: "55 g spray",
    price: 165,
    mrp: 210,
    rx: false,
    rating: 4.5,
    description:
      "Fast-acting spray for quick relief from muscle pain, sprains and joint pain.",
    highlights: ["Quick absorption", "Non-sticky", "Cooling effect"],
  },
  {
    id: "digene",
    name: "Digene Antacid Tablets",
    brand: "Abbott",
    category: "pharmacy",
    subcategory: "tablets",
    pack: "Strip of 15 tablets",
    price: 32,
    mrp: 42,
    rx: false,
    rating: 4.4,
    description:
      "Chewable antacid tablets that give fast relief from acidity, gas, bloating and heartburn.",
    highlights: ["Fast acidity relief", "Mint flavour", "Anti-gas action"],
  },
  {
    id: "combiflam",
    name: "Combiflam Tablet",
    brand: "Sanofi",
    category: "pharmacy",
    subcategory: "tablets",
    pack: "Strip of 20 tablets",
    price: 44,
    mrp: 53,
    rx: false,
    rating: 4.5,
    description:
      "Ibuprofen and paracetamol combination for relief from pain, inflammation and fever.",
    highlights: ["Pain & fever relief", "Anti-inflammatory", "Trusted brand"],
  },
  {
    id: "digestive-syrup",
    name: "Digestive Tonic Syrup",
    brand: "Pharmaciti Care",
    category: "pharmacy",
    subcategory: "syrups",
    pack: "Bottle of 200 ml",
    price: 110,
    mrp: 140,
    rx: false,
    rating: 4.3,
    description:
      "Ayurvedic digestive tonic that eases indigestion, gas and loss of appetite.",
    highlights: ["Aids digestion", "Ayurvedic", "Pleasant taste"],
  },
  {
    id: "iron-tonic",
    name: "Iron Tonic Syrup",
    brand: "Pharmaciti Care",
    category: "pharmacy",
    subcategory: "syrups",
    pack: "Bottle of 200 ml",
    price: 135,
    mrp: 175,
    rx: false,
    rating: 4.4,
    description:
      "Iron and vitamin B-complex syrup that helps build haemoglobin and fight tiredness.",
    highlights: ["Builds haemoglobin", "Fights fatigue", "With B-complex"],
  },
  {
    id: "antiseptic-liquid",
    name: "Antiseptic Disinfectant 100ml",
    brand: "Pharmaciti Care",
    category: "pharmacy",
    subcategory: "general",
    pack: "100 ml bottle",
    price: 75,
    mrp: 95,
    rx: false,
    rating: 4.6,
    description:
      "Multipurpose antiseptic liquid for first aid on cuts and wounds, and everyday hygiene.",
    highlights: ["Kills germs", "First aid use", "Multipurpose"],
  },
  {
    id: "first-aid-kit",
    name: "Cotton & Bandage First-Aid Kit",
    brand: "Pharmaciti Care",
    category: "pharmacy",
    subcategory: "general",
    pack: "1 kit",
    price: 199,
    mrp: 260,
    rx: false,
    rating: 4.5,
    description:
      "Handy first-aid kit with cotton, gauze, adhesive bandages and antiseptic wipes.",
    highlights: ["Home & travel", "Complete kit", "Essential first aid"],
  },
  {
    id: "vitamin-d3",
    name: "Vitamin D3 60K Capsules",
    brand: "Sun Pharma",
    category: "pharmacy",
    subcategory: "vitamins",
    pack: "Strip of 4 capsules",
    price: 78,
    mrp: 99,
    rx: false,
    rating: 4.6,
    description:
      "High-strength Vitamin D3 (cholecalciferol 60,000 IU) weekly capsules to correct deficiency and support bone health.",
    highlights: ["Weekly dose", "Bone & immunity", "Doctor recommended"],
  },
  {
    id: "b-complex",
    name: "B-Complex Tablets",
    brand: "Pharmaciti Generics",
    category: "pharmacy",
    subcategory: "vitamins",
    pack: "Strip of 15 tablets",
    price: 42,
    mrp: 55,
    rx: false,
    rating: 4.4,
    description:
      "Vitamin B-complex tablets that support energy metabolism and nerve health and help reduce tiredness.",
    highlights: ["Energy support", "All B vitamins", "Daily use"],
  },
  {
    id: "metformin",
    name: "Metformin 500mg",
    brand: "USV",
    category: "pharmacy",
    subcategory: "diabetes",
    pack: "Strip of 15 tablets",
    price: 28,
    mrp: 38,
    rx: true,
    rating: 4.5,
    description:
      "First-line tablet for type 2 diabetes that helps control blood sugar levels. Prescription required.",
    highlights: ["Controls blood sugar", "Take with meals", "Doctor advised"],
  },
  {
    id: "sugar-free-tablets",
    name: "Sugar-Free Sweetener Tablets",
    brand: "Pharmaciti Care",
    category: "pharmacy",
    subcategory: "diabetes",
    pack: "Bottle of 300 tablets",
    price: 145,
    mrp: 185,
    rx: false,
    rating: 4.4,
    description:
      "Zero-calorie sweetener tablets — a safe sugar substitute for tea, coffee and diabetic-friendly diets.",
    highlights: ["Zero calories", "Diabetic friendly", "300 tablets"],
  },
  {
    id: "volini-gel",
    name: "Volini Pain Relief Gel",
    brand: "Sun Pharma",
    category: "pharmacy",
    subcategory: "pain-relief",
    pack: "30 g tube",
    price: 132,
    mrp: 165,
    rx: false,
    rating: 4.6,
    description:
      "Fast-acting topical gel for relief from back pain, sprains, muscle pain and joint aches.",
    highlights: ["Deep relief", "Non-greasy", "Quick action"],
  },
  {
    id: "moov-cream",
    name: "Moov Pain Relief Cream",
    brand: "Reckitt",
    category: "pharmacy",
    subcategory: "pain-relief",
    pack: "50 g tube",
    price: 148,
    mrp: 180,
    rx: false,
    rating: 4.5,
    description:
      "Targeted relief cream for back, neck and shoulder pain with a gentle warming effect.",
    highlights: ["Backache relief", "Warming action", "Trusted brand"],
  },
  {
    id: "cold-relief",
    name: "Cold Relief Tablets",
    brand: "Pharmaciti Generics",
    category: "pharmacy",
    subcategory: "cold-cough",
    pack: "Strip of 10 tablets",
    price: 34,
    mrp: 45,
    rx: false,
    rating: 4.3,
    description:
      "Multi-symptom tablets that relieve blocked nose, headache, body ache and fever from cold and flu.",
    highlights: ["Multi-symptom relief", "Fast acting", "Day-time formula"],
  },
  {
    id: "throat-lozenges",
    name: "Honey-Lemon Throat Lozenges",
    brand: "Pharmaciti Care",
    category: "pharmacy",
    subcategory: "cold-cough",
    pack: "Pack of 16 lozenges",
    price: 52,
    mrp: 70,
    rx: false,
    rating: 4.4,
    description:
      "Soothing medicated lozenges that relieve sore throat and cough with a honey-lemon flavour.",
    highlights: ["Soothes sore throat", "Honey & lemon", "On-the-go relief"],
  },
  {
    id: "calamine-lotion",
    name: "Calamine Skin Lotion",
    brand: "Pharmaciti Care",
    category: "pharmacy",
    subcategory: "skin-care",
    pack: "100 ml bottle",
    price: 95,
    mrp: 120,
    rx: false,
    rating: 4.5,
    description:
      "Gentle calamine lotion that soothes skin irritation, rashes, itching and sunburn.",
    highlights: ["Soothes itching", "Cooling relief", "For sensitive skin"],
  },
  {
    id: "antifungal-cream",
    name: "Antifungal Cream",
    brand: "Pharmaciti Generics",
    category: "pharmacy",
    subcategory: "skin-care",
    pack: "20 g tube",
    price: 88,
    mrp: 112,
    rx: false,
    rating: 4.4,
    description:
      "Medicated cream that treats fungal skin infections like ringworm, athlete's foot and itching.",
    highlights: ["Treats fungal infection", "Relieves itching", "Dermatologist tested"],
  },
  {
    id: "multivitamin",
    name: "Daily Multivitamin",
    brand: "Pharmaciti Wellness",
    category: "wellness",
    pack: "Bottle of 30 tablets",
    price: 349,
    mrp: 449,
    rx: false,
    rating: 4.7,
    description:
      "Complete multivitamin with essential vitamins and minerals for everyday energy and wellbeing.",
    highlights: ["23 nutrients", "Energy support", "Once daily"],
  },
  {
    id: "ors-orange",
    name: "ORS Orange (Pack of 6)",
    brand: "Pharmaciti Care",
    category: "wellness",
    pack: "6 sachets",
    price: 45,
    mrp: 60,
    rx: false,
    rating: 4.6,
    description:
      "Oral rehydration salts to quickly restore lost fluids and electrolytes during dehydration.",
    highlights: ["WHO formula", "Orange flavour", "Rapid rehydration"],
  },
  {
    id: "protein-powder",
    name: "Whey Protein Powder 1kg",
    brand: "Pharmaciti Sport",
    category: "wellness",
    pack: "1 kg tub",
    price: 1299,
    mrp: 1799,
    rx: false,
    tag: "Bestseller",
    rating: 4.7,
    description:
      "24g protein per scoop to support muscle recovery and daily protein goals. Chocolate flavour.",
    highlights: ["24g protein", "Added BCAAs", "Easy to mix"],
  },
  {
    id: "calcium-d3",
    name: "Calcium + Vitamin D3",
    brand: "Pharmaciti Wellness",
    category: "wellness",
    pack: "Bottle of 60 tablets",
    price: 279,
    mrp: 360,
    rx: false,
    rating: 4.5,
    description:
      "Supports strong bones and joints. Vitamin D3 improves calcium absorption.",
    highlights: ["Bone strength", "With D3", "For adults"],
  },
  {
    id: "sanitizer",
    name: "Hand Sanitizer 500ml",
    brand: "Pharmaciti Care",
    category: "personal-care",
    pack: "500 ml pump bottle",
    price: 129,
    mrp: 199,
    rx: false,
    rating: 4.4,
    description:
      "70% alcohol-based sanitizer that kills 99.9% of germs. Enriched with aloe vera.",
    highlights: ["Kills 99.9% germs", "With aloe vera", "Non-drying"],
  },
  {
    id: "n95-mask",
    name: "N95 Mask (Pack of 5)",
    brand: "Pharmaciti Care",
    category: "personal-care",
    pack: "5 masks",
    price: 149,
    mrp: 250,
    rx: false,
    rating: 4.3,
    description:
      "5-layer N95 masks offering reliable protection against dust, pollution and germs.",
    highlights: ["5-layer filter", "Comfortable fit", "Reusable"],
  },
  {
    id: "face-wash",
    name: "Neem Face Wash 150ml",
    brand: "Pharmaciti Care",
    category: "personal-care",
    pack: "150 ml tube",
    price: 149,
    mrp: 199,
    rx: false,
    rating: 4.4,
    description:
      "Purifying neem face wash that fights acne and removes excess oil for clear skin.",
    highlights: ["Fights acne", "Oil control", "Daily use"],
  },
  {
    id: "baby-diapers",
    name: "Baby Diaper Pants (M, 40s)",
    brand: "Pharmaciti Baby",
    category: "baby-care",
    pack: "40 pants",
    price: 599,
    mrp: 799,
    rx: false,
    rating: 4.6,
    description:
      "Ultra-soft diaper pants with up to 12 hours of dryness and a breathable layer.",
    highlights: ["12 hr dryness", "Soft & breathable", "Wetness indicator"],
  },
  {
    id: "baby-lotion",
    name: "Baby Moisturising Lotion",
    brand: "Pharmaciti Baby",
    category: "baby-care",
    pack: "200 ml bottle",
    price: 185,
    mrp: 220,
    rx: false,
    rating: 4.7,
    description:
      "Gentle daily lotion that keeps baby's delicate skin soft and nourished.",
    highlights: ["Hypoallergenic", "24 hr moisture", "No parabens"],
  },
  {
    id: "pet-multivitamin",
    name: "Pet Multivitamin Syrup",
    brand: "Pharmaciti Pet",
    category: "pet-care",
    pack: "200 ml bottle",
    price: 320,
    mrp: 399,
    rx: false,
    tag: "New",
    rating: 4.5,
    description:
      "Tasty daily syrup for dogs and cats that supports coat, bones and overall vitality.",
    highlights: ["For dogs & cats", "Shiny coat", "Vet approved"],
  },
  {
    id: "pet-shampoo",
    name: "Tick & Flea Pet Shampoo",
    brand: "Pharmaciti Pet",
    category: "pet-care",
    pack: "250 ml bottle",
    price: 275,
    mrp: 350,
    rx: false,
    tag: "New",
    rating: 4.4,
    description:
      "Gentle medicated shampoo that controls ticks and fleas while keeping the coat soft.",
    highlights: ["Tick & flea control", "Soothes skin", "Pleasant scent"],
  },
  {
    id: "thermometer",
    name: "Digital Thermometer",
    brand: "Pharmaciti Health",
    category: "devices",
    pack: "1 unit",
    price: 199,
    mrp: 299,
    rx: false,
    rating: 4.6,
    description:
      "Fast and accurate digital thermometer with fever alarm and flexible tip.",
    highlights: ["10 sec reading", "Fever alarm", "Waterproof tip"],
  },
  {
    id: "bp-monitor",
    name: "Blood Pressure Monitor",
    brand: "Pharmaciti Health",
    category: "devices",
    pack: "1 unit",
    price: 1499,
    mrp: 2199,
    rx: false,
    tag: "Bestseller",
    rating: 4.7,
    description:
      "Fully automatic upper-arm BP monitor with large display and irregular heartbeat detection.",
    highlights: ["Clinically accurate", "Large display", "2-user memory"],
  },
  {
    id: "glucometer",
    name: "Glucometer Kit",
    brand: "Pharmaciti Health",
    category: "devices",
    pack: "Kit + 25 strips",
    price: 699,
    mrp: 999,
    rx: false,
    rating: 4.5,
    description:
      "Easy-to-use blood glucose monitoring kit with 25 strips and lancets included.",
    highlights: ["5 sec result", "25 free strips", "Tiny blood sample"],
  },
  {
    id: "cbc-test",
    name: "Complete Blood Count (CBC)",
    brand: "Pharmaciti Labs",
    category: "lab-tests",
    pack: "Includes 24 parameters",
    price: 299,
    mrp: 450,
    rx: false,
    rating: 4.6,
    description:
      "Free home sample collection. Reports in 12 hours. Covers haemoglobin, WBC, RBC, platelets and more.",
    highlights: ["Home collection", "Report in 12 hrs", "NABL labs"],
  },
  {
    id: "full-body",
    name: "Full Body Checkup (Basic)",
    brand: "Pharmaciti Labs",
    category: "lab-tests",
    pack: "Includes 49 tests",
    price: 999,
    mrp: 2000,
    rx: false,
    tag: "Popular",
    rating: 4.7,
    description:
      "Comprehensive health screening covering blood sugar, lipid profile, liver, kidney and thyroid.",
    highlights: ["49 tests", "Free home collection", "Doctor summary"],
  },
  {
    id: "thyroid-profile",
    name: "Thyroid Profile (T3 T4 TSH)",
    brand: "Pharmaciti Labs",
    category: "lab-tests",
    pack: "Includes 3 tests",
    price: 399,
    mrp: 650,
    rx: false,
    rating: 4.5,
    description:
      "Measures T3, T4 and TSH to assess thyroid function. Free home sample collection.",
    highlights: ["Home collection", "Report in 24 hrs", "Fasting not needed"],
  },
  {
    id: "vitamin-d-test",
    name: "Vitamin D Test",
    brand: "Pharmaciti Labs",
    category: "lab-tests",
    pack: "Includes 1 test",
    price: 599,
    mrp: 1200,
    rx: false,
    rating: 4.6,
    description:
      "Checks Vitamin D (25-OH) levels to detect deficiency. Free home sample collection.",
    highlights: ["Home collection", "Report in 24 hrs", "NABL labs"],
  },
];

export const products: Product[] = raw.map((p, i) => ({
  ...p,
  tint: TINTS[i % TINTS.length],
}));

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function productsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((p) =>
    [p.name, p.brand, p.category, p.description]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
}

export const bestsellers = products.filter((p) => p.tag === "Bestseller");

export const dealsOfTheDay = [...products]
  .sort((a, b) => discountRank(b) - discountRank(a))
  .slice(0, 8);

function discountRank(p: Product): number {
  return (p.mrp - p.price) / p.mrp;
}
