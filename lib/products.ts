export type IconKey =
  | "pill"
  | "flask"
  | "heart"
  | "sparkles"
  | "baby"
  | "paw"
  | "device"
  | "consult"
  | "women"
  | "men"
  | "skin"
  | "food"
  | "oral"
  | "hair"
  | "diabetes"
  | "cold"
  | "protein"
  | "homeopathy"
  | "firstaid"
  | "sexual"
  | "elderly"
  | "beauty"
  | "surgicals"
  | "mental";

export type Category = {
  id: string;
  name: string;
  iconKey: IconKey;
  badge?: string;
};

export type PopularCategory = {
  name: string;
  iconKey: IconKey;
  href: string;
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

/** Larger "Shop by category" grid shown on the home page below the hero banner */
export const popularCategories: PopularCategory[] = [
  { name: "Medicines", iconKey: "pill", href: "/products?cat=pharmacy" },
  { name: "Lab Tests", iconKey: "flask", href: "/products?cat=lab-tests" },
  { name: "Baby Care", iconKey: "baby", href: "/products?cat=baby-care" },
  { name: "Women Care", iconKey: "women", href: "/products" },
  { name: "Men Care", iconKey: "men", href: "/products" },
  { name: "Skin Care", iconKey: "skin", href: "/products" },
  { name: "Food & Nutrition", iconKey: "food", href: "/products" },
  { name: "Oral Care", iconKey: "oral", href: "/products" },
  { name: "Hair Care", iconKey: "hair", href: "/products" },
  { name: "Diabetes", iconKey: "diabetes", href: "/products" },
  { name: "Cold, Cough & Fever", iconKey: "cold", href: "/products" },
  {
    name: "Protein & Supplements",
    iconKey: "protein",
    href: "/products?cat=wellness",
  },
  { name: "Homeopathy", iconKey: "homeopathy", href: "/products" },
  { name: "First Aid", iconKey: "firstaid", href: "/products" },
  { name: "Sexual Wellness", iconKey: "sexual", href: "/products" },
  { name: "Elderly Care", iconKey: "elderly", href: "/products" },
  { name: "Beauty Care", iconKey: "beauty", href: "/products" },
  { name: "Surgicals", iconKey: "surgicals", href: "/products" },
  { name: "Mental Wellness", iconKey: "mental", href: "/products" },
  { name: "Pet Care", iconKey: "paw", href: "/products?cat=pet-care" },
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

// Real products + prices sourced from the client's stock export (stock_81.xls).
// Only the products already present in the storefront have been mapped to their
// real-world equivalents (name, brand, pack, MRP, selling price). Pet care, lab
// tests and the first-aid kit have no equivalent in a medicine stock list, so
// they are left as illustrative placeholders for now.
const raw: Omit<Product, "tint">[] = [
  {
    id: "dolo-650",
    name: "Dolo 650 Tablet",
    brand: "Micro Labs",
    category: "pharmacy",
    subcategory: "tablets",
    pack: "Strip of 15 tablets",
    price: 32,
    mrp: 32,
    rx: false,
    tag: "Bestseller",
    rating: 4.8,
    description:
      "Paracetamol 650mg tablets used to reduce fever and relieve mild to moderate pain such as headache, body ache and toothache.",
    highlights: ["Fast fever relief", "Trusted by doctors", "For ages 12+"],
  },
  {
    id: "vitamin-c-zinc",
    name: "Limcee Vitamin C Tablets",
    brand: "Sarabhai Piramal",
    category: "wellness",
    pack: "Strip of 15 tablets",
    price: 25,
    mrp: 25,
    rx: false,
    tag: "Bestseller",
    rating: 4.6,
    description:
      "Chewable Vitamin C 500mg tablets that support daily immunity, fight fatigue and help keep skin healthy.",
    highlights: ["Boosts immunity", "Vitamin C 500mg", "Orange flavour"],
  },
  {
    id: "cetirizine",
    name: "Cetirizine 10mg",
    brand: "Ranbaxy",
    category: "pharmacy",
    subcategory: "tablets",
    pack: "Strip of 10 tablets",
    price: 26,
    mrp: 26,
    rx: false,
    rating: 4.5,
    description:
      "Antihistamine for relief from sneezing, runny nose, watery eyes and other allergy symptoms.",
    highlights: ["24 hr allergy relief", "Non-drowsy", "Once daily"],
  },
  {
    id: "pantoprazole",
    name: "Pantoprazole 40mg",
    brand: "Aristo Pharma",
    category: "pharmacy",
    subcategory: "tablets",
    pack: "Strip of 15 tablets",
    price: 165,
    mrp: 165,
    rx: true,
    rating: 4.4,
    description:
      "Reduces stomach acid. Used to treat acidity, heartburn and acid reflux. Prescription required.",
    highlights: ["Acidity relief", "Take before food", "Doctor advised"],
  },
  {
    id: "cough-syrup",
    name: "Ascoril Cough Syrup",
    brand: "Glenmark",
    category: "pharmacy",
    subcategory: "syrups",
    pack: "Bottle of 50 ml",
    price: 43,
    mrp: 43,
    rx: false,
    rating: 4.3,
    description:
      "Expectorant cough syrup that loosens mucus and relieves chesty cough and throat irritation.",
    highlights: ["Relieves chesty cough", "Clears congestion", "Soothes throat"],
  },
  {
    id: "pain-spray",
    name: "Relispray Pain Relief Spray",
    brand: "Midas Care",
    category: "pharmacy",
    subcategory: "general",
    pack: "55 g spray",
    price: 115,
    mrp: 115,
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
    price: 18,
    mrp: 18,
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
    price: 42,
    mrp: 42,
    rx: false,
    rating: 4.5,
    description:
      "Ibuprofen and paracetamol combination for relief from pain, inflammation and fever.",
    highlights: ["Pain & fever relief", "Anti-inflammatory", "Trusted brand"],
  },
  {
    id: "digestive-syrup",
    name: "Digeplex Digestive Syrup",
    brand: "Shreya Life Sciences",
    category: "pharmacy",
    subcategory: "syrups",
    pack: "Bottle of 100 ml",
    price: 57,
    mrp: 57,
    rx: false,
    rating: 4.3,
    description:
      "Digestive syrup that eases indigestion, gas, bloating and loss of appetite.",
    highlights: ["Aids digestion", "Relieves gas", "Pleasant taste"],
  },
  {
    id: "iron-tonic",
    name: "Globiron Iron Tonic",
    brand: "Aglowmed",
    category: "pharmacy",
    subcategory: "syrups",
    pack: "Bottle of 200 ml",
    price: 60,
    mrp: 60,
    rx: false,
    rating: 4.4,
    description:
      "Iron and vitamin B-complex syrup that helps build haemoglobin and fight tiredness.",
    highlights: ["Builds haemoglobin", "Fights fatigue", "With B-complex"],
  },
  {
    id: "antiseptic-liquid",
    name: "Dettol Antiseptic Liquid",
    brand: "Reckitt",
    category: "pharmacy",
    subcategory: "general",
    pack: "Bottle of 200 ml",
    price: 89,
    mrp: 159,
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
    brand: "Macleods",
    category: "pharmacy",
    subcategory: "vitamins",
    pack: "Strip of 4 capsules",
    price: 49,
    mrp: 49,
    rx: false,
    rating: 4.6,
    description:
      "High-strength Vitamin D3 (cholecalciferol 60,000 IU) weekly capsules to correct deficiency and support bone health.",
    highlights: ["Weekly dose", "Bone & immunity", "Doctor recommended"],
  },
  {
    id: "b-complex",
    name: "Becosules Z Capsules",
    brand: "Pfizer",
    category: "pharmacy",
    subcategory: "vitamins",
    pack: "Strip of 15 capsules",
    price: 31,
    mrp: 63,
    rx: false,
    rating: 4.4,
    description:
      "Vitamin B-complex capsules with zinc that support energy metabolism and nerve health and help reduce tiredness.",
    highlights: ["Energy support", "All B vitamins", "Daily use"],
  },
  {
    id: "metformin",
    name: "Glycomet 500mg",
    brand: "USV",
    category: "pharmacy",
    subcategory: "diabetes",
    pack: "Strip of 10 tablets",
    price: 17,
    mrp: 17,
    rx: true,
    rating: 4.5,
    description:
      "First-line tablet for type 2 diabetes that helps control blood sugar levels. Prescription required.",
    highlights: ["Controls blood sugar", "Take with meals", "Doctor advised"],
  },
  {
    id: "sugar-free-tablets",
    name: "Sugar Free Gold Tablets",
    brand: "Zydus Cadila",
    category: "pharmacy",
    subcategory: "diabetes",
    pack: "Pack of 300 tablets",
    price: 170,
    mrp: 170,
    rx: false,
    rating: 4.4,
    description:
      "Zero-calorie sweetener tablets — a safe sugar substitute for tea, coffee and diabetic-friendly diets.",
    highlights: ["Zero calories", "Diabetic friendly", "300 tablets"],
  },
  {
    id: "volini-gel",
    name: "Volini Pain Relief Gel",
    brand: "Ranbaxy",
    category: "pharmacy",
    subcategory: "pain-relief",
    pack: "Tube of 50 g",
    price: 165,
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
    brand: "Paras",
    category: "pharmacy",
    subcategory: "pain-relief",
    pack: "Tube of 25 g",
    price: 130,
    mrp: 130,
    rx: false,
    rating: 4.5,
    description:
      "Targeted relief cream for back, neck and shoulder pain with a gentle warming effect.",
    highlights: ["Backache relief", "Warming action", "Trusted brand"],
  },
  {
    id: "cold-relief",
    name: "Coldarin Tablets",
    brand: "Knoll Pharma",
    category: "pharmacy",
    subcategory: "cold-cough",
    pack: "Strip of 10 tablets",
    price: 14,
    mrp: 14,
    rx: false,
    rating: 4.3,
    description:
      "Multi-symptom tablets that relieve blocked nose, headache, body ache and fever from cold and flu.",
    highlights: ["Multi-symptom relief", "Fast acting", "Day-time formula"],
  },
  {
    id: "throat-lozenges",
    name: "Solvin Lozenges",
    brand: "Ipca",
    category: "pharmacy",
    subcategory: "cold-cough",
    pack: "Strip of 10 lozenges",
    price: 45,
    mrp: 66,
    rx: false,
    rating: 4.4,
    description:
      "Medicated lozenges that soothe a sore throat and calm cough for on-the-go relief.",
    highlights: ["Soothes sore throat", "Calms cough", "On-the-go relief"],
  },
  {
    id: "calamine-lotion",
    name: "Caladryl Lotion",
    brand: "Parke-Davis",
    category: "pharmacy",
    subcategory: "skin-care",
    pack: "Bottle of 100 ml",
    price: 81,
    mrp: 81,
    rx: false,
    rating: 4.5,
    description:
      "Gentle calamine lotion that soothes skin irritation, rashes, itching and sunburn.",
    highlights: ["Soothes itching", "Cooling relief", "For sensitive skin"],
  },
  {
    id: "antifungal-cream",
    name: "Candid Antifungal Cream",
    brand: "Glenmark",
    category: "pharmacy",
    subcategory: "skin-care",
    pack: "Tube of 50 g",
    price: 153,
    mrp: 153,
    rx: false,
    rating: 4.4,
    description:
      "Medicated cream that treats fungal skin infections like ringworm, athlete's foot and itching.",
    highlights: ["Treats fungal infection", "Relieves itching", "Dermatologist tested"],
  },
  {
    id: "multivitamin",
    name: "Revital H Capsules",
    brand: "Ranbaxy",
    category: "wellness",
    pack: "Bottle of 30 capsules",
    price: 300,
    mrp: 300,
    rx: false,
    rating: 4.7,
    description:
      "Complete daily multivitamin with essential vitamins, minerals and ginseng for everyday energy and wellbeing.",
    highlights: ["Daily energy", "Vitamins & minerals", "With ginseng"],
  },
  {
    id: "ors-orange",
    name: "Electral ORS (Orange)",
    brand: "FDC",
    category: "wellness",
    pack: "Sachet of 21.8 g",
    price: 23,
    mrp: 23,
    rx: false,
    rating: 4.6,
    description:
      "Oral rehydration salts to quickly restore lost fluids and electrolytes during dehydration.",
    highlights: ["WHO formula", "Orange flavour", "Rapid rehydration"],
  },
  {
    id: "protein-powder",
    name: "Whey Protein Powder 1kg",
    brand: "British Biologicals",
    category: "wellness",
    pack: "1 kg tub",
    price: 1675,
    mrp: 1675,
    rx: false,
    tag: "Bestseller",
    rating: 4.7,
    description:
      "24g protein per scoop to support muscle recovery and daily protein goals. Chocolate flavour.",
    highlights: ["24g protein", "Added BCAAs", "Easy to mix"],
  },
  {
    id: "calcium-d3",
    name: "Shelcal Calcium Tablets",
    brand: "Elder Pharma",
    category: "wellness",
    pack: "Strip of 30 tablets",
    price: 99,
    mrp: 99,
    rx: false,
    rating: 4.5,
    description:
      "Supports strong bones and joints. Vitamin D3 improves calcium absorption.",
    highlights: ["Bone strength", "With D3", "For adults"],
  },
  {
    id: "sanitizer",
    name: "Hand Sanitizer",
    brand: "ASV Labs",
    category: "personal-care",
    pack: "Bottle of 60 ml",
    price: 70,
    mrp: 70,
    rx: false,
    rating: 4.4,
    description:
      "70% alcohol-based hand sanitizer that kills 99.9% of germs. Handy pocket-sized bottle.",
    highlights: ["Kills 99.9% germs", "70% alcohol", "Pocket size"],
  },
  {
    id: "n95-mask",
    name: "N95 Protective Mask",
    brand: "ASV Labs",
    category: "personal-care",
    pack: "1 mask",
    price: 50,
    mrp: 50,
    rx: false,
    rating: 4.3,
    description:
      "5-layer N95 mask offering reliable protection against dust, pollution and germs.",
    highlights: ["5-layer filter", "Snug fit", "Lightweight"],
  },
  {
    id: "face-wash",
    name: "Himalaya Neem Face Wash",
    brand: "Himalaya",
    category: "personal-care",
    pack: "Tube of 50 g",
    price: 27,
    mrp: 27,
    rx: false,
    rating: 4.4,
    description:
      "Purifying neem face wash that fights acne and removes excess oil for clear skin.",
    highlights: ["Fights acne", "Oil control", "Daily use"],
  },
  {
    id: "baby-diapers",
    name: "Huggies Diaper Pants (M)",
    brand: "Huggies",
    category: "baby-care",
    pack: "Pack of 20 pants",
    price: 105,
    mrp: 105,
    rx: false,
    rating: 4.6,
    description:
      "Ultra-soft diaper pants with up to 12 hours of dryness and a breathable layer.",
    highlights: ["12 hr dryness", "Soft & breathable", "Wetness indicator"],
  },
  {
    id: "baby-lotion",
    name: "Johnson's Baby Lotion",
    brand: "Johnson & Johnson",
    category: "baby-care",
    pack: "Bottle of 200 ml",
    price: 150,
    mrp: 150,
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
    name: "Omron Digital Thermometer",
    brand: "Omron",
    category: "devices",
    pack: "1 unit",
    price: 200,
    mrp: 200,
    rx: false,
    rating: 4.6,
    description:
      "Fast and accurate digital thermometer with fever alarm and flexible tip.",
    highlights: ["Quick reading", "Fever alarm", "Flexible tip"],
  },
  {
    id: "bp-monitor",
    name: "Omron BP Monitor (HEM-8712)",
    brand: "Omron",
    category: "devices",
    pack: "1 unit",
    price: 2180,
    mrp: 2180,
    rx: false,
    tag: "Bestseller",
    rating: 4.7,
    description:
      "Fully automatic upper-arm BP monitor with large display and irregular heartbeat detection.",
    highlights: ["Clinically accurate", "Large display", "Easy one-touch"],
  },
  {
    id: "glucometer",
    name: "Accu-Chek Active Glucometer Kit",
    brand: "Roche",
    category: "devices",
    pack: "Kit + 10 strips",
    price: 1199,
    mrp: 1199,
    rx: false,
    rating: 4.5,
    description:
      "Easy-to-use blood glucose monitoring kit with test strips and lancets included.",
    highlights: ["5 sec result", "Strips included", "Tiny blood sample"],
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
