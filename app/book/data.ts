export type ProductCategory =
  | "Leather Bag"
  | "Leather Wallet"
  | "Leather Belt"
  | "Leather Accessories";

export type ProductPage = {
  page: number;
  category: ProductCategory;
  name: string;
  artNo: string;
  leatherType: string;
  color: string;
  finish: string;
  description: string;
  details: string[];
  palette: string[];
  image: string;
  imageLabel: string;
  imagePosition?: string;
};

export type CollectionOpener = {
  page: number;
  category: ProductCategory;
  lines: string[];
  image: string;
  imagePosition?: string;
};

export const images = {
  cover: "/imags/EURO BULDING.webp",
  aboutus: "/imags/aboutus.avif",
  building:
    "https://images.unsplash.com/photo-1771599940657-f9f151abed45?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  artisan: "/imags/width_641.webp",
  workshop: "/imags/width_800.webp",
  production: "/imags/contact.avif",
  bagStudio: "/imags/width_670.webp",
  bag1: "/imags/bag/bag1.webp",
  bag1_1: "/imags/bag/bag1_1.webp",
  bag1_2: "/imags/bag/bag1_2.webp",
  bag2: "/imags/bag/bag2.webp",
  bag3: "/imags/bag/3.webp",
  bag4: "/imags/bag/4.webp",
  bag5: "/imags/bag/5.webp",
  bag6: "/imags/bag/6.webp",
  bag7: "/imags/bag/7.webp",
  bag8: "/imags/bag/8.webp",
  bag9: "/imags/bag/9.webp",
  bag10: "/imags/bag/10.webp",
  bag11: "/imags/bag/11.webp",
  bag12: "/imags/bag/12.webp",
  bag13: "/imags/bag/13.webp",
  bag14: "/imags/bag/14.webp",
  bag15: "/imags/bag/15.webp",
  wl1: "/imags/wl1.webp",
  wl2: "/imags/wlt/2.webp",
  wl3: "/imags/wlt/3.webp",
  wl4: "/imags/wlt/4.webp",
  wl5: "/imags/wlt/5.webp",
  wl6: "/imags/wlt/6.webp",
  wl7: "/imags/wlt/7.webp",
  wl8: "/imags/wlt/8.webp",
  wl9: "/imags/wlt/9.webp",
  wl10: "/imags/wlt/10.webp",
  wl11: "/imags/wlt/11.webp",
  wl12: "/imags/wlt/12.webp",
  wl13: "/imags/wlt/13.webp",
  wl14: "/imags/wlt/16.webp",
  wl15: "/imags/wlt/15.webp",
  blt1: "/imags/belt/1_2.webp",
  blt2: "/imags/belt/15.webp",
  blt3: "/imags/belt/2.webp",
  blt4: "/imags/belt/3.webp",
  blt5: "/imags/belt/4.webp",
  blt6: "/imags/belt/5.webp",
  blt7: "/imags/belt/6.webp",
  blt8: "/imags/belt/7.webp",
  blt9: "/imags/belt/8.webp",
  blt10: "/imags/belt/9.webp",
  blt11: "/imags/belt/10.webp",
  blt12: "/imags/belt/11.webp",
  blt13: "/imags/belt/12.webp",
  blt14: "/imags/belt/13.webp",
  blt15: "/imags/belt/14.webp",
  blt16: "/imags/belt/1.webp",
  acc1: "/imags/accs/1.webp",
  acc2: "/imags/accs/2.webp",
  acc3: "/imags/accs/3.webp",
  acc4: "/imags/accs/4.webp",
  acc5: "/imags/accs/5.webp",
  acc6: "/imags/accs/6.webp",
  acc7: "/imags/accs/7.webp",
  acc8: "/imags/accs/8.webp",
  walletClean:
    "https://images.pexels.com/photos/30750448/pexels-photo-30750448.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-30750448.jpg&fm=jpg",
  beltBlack:
    "https://images.pexels.com/photos/989938/pexels-photo-989938.jpeg?cs=srgb&dl=pexels-fox-58267-989938.jpg&fm=jpg",
};

export const aboutPage = {
  page: 3,
  title: "ABOUT US",
  image: images.bagStudio,
  body: [
    "EURO INTERNATIONAL is a leather goods manufacturing and export house built around clean finishing, dependable production, and strong contemporary presentation.",
    "From Kolkata, we create bags, wallets, and belts with a product language that balances practical use, commercial value, and elevated visual appeal.",
  ],
};

export const summarySections = [
  {
    eyebrow: "01 / Opening",
    title: "Brand Story",
    description:
      "An overview of the company, catalogue, and opening product edit.",
    items: [
      { page: "02", title: "Summary" },
      { page: "03", title: "About Us" },
      { page: "04", title: "Leather Bag Collection" },
      { page: "09", title: "Leather Wallet Collection" },
    ],
  },
  {
    eyebrow: "02 / Collections",
    title: "Core Categories",
    description:
      "The main leather lines presented across the catalogue in a retail-ready sequence.",
    items: [
      { page: "14", title: "Leather Accessories" },
      { page: "17", title: "Leather Belt Collection" },
    ],
  },
  {
    eyebrow: "03 / Contact",
    title: "Keep In Touch",
    description:
      "Direct business details, office address, and workshop information.",
    items: [{ page: "22", title: "Keep In Touch" }],
  },
];

export const bagCoreProducts: ProductPage[] = [
  { page: 6, category: "Leather Bag", name: "Structured Bagpack", artNo: "6/000807-96", leatherType: "saffiano", color: "Brown", finish: "Matte Finish", description: "Minimal structure with a premium surface and a sharp fashion-led silhouette.", details: ["Top handle design", "Metal hardware", "Compact interior"], palette: ["#2f2f2f", "#8b5e3c", "#d9d9d9"], image: images.bag1, imageLabel: "Bag / 01", imagePosition: "center center" },
  { page: 7, category: "Leather Bag", name: "Sling Crossbody", artNo: "EI-BG-289", leatherType: "Vegetable Tanned Leather", color: "Golden Ochre", finish: "Handcrafted Matte", description: "A compact crossbody shape with artisanal character and easy everyday use.", details: ["Adjustable strap", "Front flap closure", "Lightweight build"], palette: ["#4f3729", "#a2714c", "#ececec"], image: images.bag1_2, imageLabel: "Bag / 02", imagePosition: "center center" },
  { page: 8, category: "Leather Bag", name: "Messenger Profile", artNo: "EI-BG-741", leatherType: "Full Grain Leather", color: "Sage Green", finish: "Semi Gloss", description: "A clean messenger style designed for polished utility and retail appeal.", details: ["Buckled front", "Long strap", "Soft edge construction"], palette: ["#2b2b2b", "#a45f39", "#efefef"], image: images.bag3, imageLabel: "Bag / 03", imagePosition: "center center" },
  { page: 9, category: "Leather Bag", name: "Modern Clutch", artNo: "EI-BG-978", leatherType: "Soft Nappa Leather", color: "Charcoal Black", finish: "Smooth Touch", description: "Refined clutch styling with restrained details and a contemporary commercial look.", details: ["Clean flap form", "Minimal seam lines", "Even edge finish"], palette: ["#383838", "#9f6947", "#f2f2f2"], image: images.bag4, imageLabel: "Bag / 04", imagePosition: "center center" },
  { page: 9, category: "Leather Bag", name: "Bucket Drawstring", artNo: "EI-BG-359", leatherType: "Pebble Grain Leather", color: "Smoky Gray", finish: "Glossy Finish", description: "Slouchy bucket form with a drawstring closure and clean pebble texture throughout.", details: ["Drawstring top", "Inner pocket", "Dual handles"], palette: ["#1a1a1a", "#5c5c5c", "#e8e8e8"], image: images.bag5, imageLabel: "Bag / 05", imagePosition: "center center" },
  { page: 9, category: "Leather Bag", name: "Structured Tote", artNo: "EI-BG-523", leatherType: "Full Grain Leather", color: "Olive Moss", finish: "Burnished Finish", description: "Generous tote proportions with a rigid base and polished hardware for a boardroom look.", details: ["Open top", "Metal base studs", "Interior zip pocket"], palette: ["#7a4a28", "#c28b5a", "#f5f5f5"], image: images.bag6, imageLabel: "Bag / 06", imagePosition: "center center" },
  { page: 9, category: "Leather Bag", name: "Envelope Shoulder Bag", artNo: "EI-BG-293", leatherType: "Vegetable Tanned Leather", color: "Deep Mahogany", finish: "Matte Finish", description: "Envelope-style shoulder bag with a fold-over flap and minimalist edge stitching.", details: ["Fold-over flap", "Shoulder strap", "Snap closure"], palette: ["#4a4a30", "#8a8a5c", "#eeeeee"], image: images.bag7, imageLabel: "Bag / 07", imagePosition: "center center" },
];

export const bagExtraProducts: ProductPage[] = [
  { page: 0, category: "Leather Bag", name: "Zip-Top Tote", artNo: "EI-BG-969", leatherType: "Vegetable Tanned Leather", color: "Misty Blue", finish: "Natural Matte", description: "A generous zip-top silhouette with a clean structure and versatile commercial profile.", details: ["Zip closure", "Dual carry handles", "Interior divider"], palette: ["#c9a97a", "#8b6340", "#f5f0e8"], image: images.bag8, imageLabel: "Bag / 08", imagePosition: "center center" },
  { page: 0, category: "Leather Bag", name: "Mini Frame Bag", artNo: "EI-BG-673", leatherType: "Saffiano Leather", color: "Walnut Brown", finish: "Cross-Grain Texture", description: "Compact frame bag with a rigid top and snap-frame closure for clean editorial appeal.", details: ["Frame closure", "Chain strap", "Card slot interior"], palette: ["#111111", "#555555", "#eeeeee"], image: images.bag9, imageLabel: "Bag / 09", imagePosition: "center center" },
  { page: 0, category: "Leather Bag", name: "Box Clutch", artNo: "EI-BG-415", leatherType: "Smooth Calf Leather", color: "Graphite Brown", finish: "Polished Smooth", description: "Structured box clutch with a push-lock closure and minimal edge stitching.", details: ["Push-lock closure", "Detachable strap", "Suede lining"], palette: ["#f0ece4", "#c8bfb0", "#7a7060"], image: images.bag10, imageLabel: "Bag / 10", imagePosition: "center center" },
  { page: 0, category: "Leather Bag", name: "Saddle Bag", artNo: "EI-BG-860", leatherType: "Full Grain Leather", color: "Cocoa Brown", finish: "Hand-Burnished", description: "Heritage saddle profile with a curved flap, clean stitch lines, and a contemporary crossbody strap.", details: ["Curved flap", "Adjustable strap", "Burnished edges"], palette: ["#9a6535", "#c8934f", "#f5ede0"], image: images.bag11, imageLabel: "Bag / 11", imagePosition: "center center" },
  { page: 0, category: "Leather Bag", name: "Drawstring Shopper", artNo: "EI-BG-563", leatherType: "Pebble Grain Leather", color: "Midnight Forest", finish: "Soft Pebble", description: "Relaxed drawstring shopper with an oversized profile and minimal branded hardware.", details: ["Drawstring top", "Flat base", "Large open interior"], palette: ["#c8c2b8", "#908880", "#f8f5f0"], image: images.bag12, imageLabel: "Bag / 12", imagePosition: "center center" },
];

export const bagTailProducts: ProductPage[] = [
  { page: 0, category: "Leather Bag", name: "Hobo Shoulder Bag", artNo: "EI-BG-294", leatherType: "Soft Pebble Leather", color: "Espresso Brown", finish: "Pebble Matte", description: "Slouchy hobo silhouette with a single shoulder strap and an unstructured interior for relaxed daily use.", details: ["Single strap", "Magnetic snap", "Unstructured body"], palette: ["#c8934f", "#e8b878", "#f8f0e0"], image: images.bag13, imageLabel: "Bag / 13", imagePosition: "center center" },
  { page: 0, category: "Leather Bag", name: "Convertible Backpack", artNo: "EI-BG-226", leatherType: "Full Grain Leather", color: "Forest Slate", finish: "Wax Finish", description: "Versatile backpack that converts to a shoulder carry, built for commercial travel and weekend use.", details: ["Convertible straps", "Laptop sleeve", "Zip pockets"], palette: ["#2a1200", "#6a3818", "#f0ece8"], image: images.bag14, imageLabel: "Bag / 14", imagePosition: "center center" },
  { page: 0, category: "Leather Bag", name: "Mini Crossbody", artNo: "EI-BG-302", leatherType: "Smooth Nappa Leather", color: "Rustic Chestnut", finish: "Gloss Smooth", description: "Compact mini crossbody with a chain strap and a polished flap closure for evening or day use.", details: ["Chain strap", "Flap closure", "Card slot"], palette: ["#111111", "#4a4a4a", "#eeeeee"], image: images.bag15, imageLabel: "Bag / 15", imagePosition: "center center" },
];

export const walletCoreProducts: ProductPage[] = [
  { page: 12, category: "Leather Wallet", name: "Classic Bifold", artNo: "EI-WL-1696", leatherType: "Pull-Up Leather", color: "Clay Brown", finish: "Natural Patina", description: "Slim, classic, and commercial. Built for daily carry with a familiar premium handfeel.", details: ["Bill compartment", "Card slots", "Compact fold"], palette: ["#3b3b3b", "#8a5a3d", "#ececec"], image: images.wl1, imageLabel: "Wallet / 01", imagePosition: "center center" },
  { page: 11, category: "Leather Wallet", name: "Everyday Wallet", artNo: "EI-WL-1920", leatherType: "Cowhide Leather", color: "Terracotta", finish: "Soft Grain", description: "Designed for easy storage, clean proportions, and broad market usability.", details: ["Multiple slots", "Slim profile", "Consistent grain"], palette: ["#1e1e1e", "#9c6847", "#f0f0f0"], image: images.wl2, imageLabel: "Wallet / 02", imagePosition: "center center" },
  { page: 12, category: "Leather Wallet", name: "Pocket Card Fold", artNo: "EI-WL-9246", leatherType: "Vegetable Tanned Leather", color: "Olive Stone", finish: "Dry Matte", description: "A compact card-focused format with a sharp edge profile and understated styling.", details: ["Card slots", "Central fold", "Minimal bulk"], palette: ["#232323", "#a16f46", "#ebebeb"], image: images.wl3, imageLabel: "Wallet / 03", imagePosition: "center top" },
  { page: 13, category: "Leather Wallet", name: "Travel Wallet", artNo: "EI-WL-0598", leatherType: "Milled Leather", color: "Burnt Sienna", finish: "Supple Grain", description: "Long format storage with a neat finish and dependable structure for travel needs.", details: ["Long body", "Inner storage", "Clean stitching"], palette: ["#111111", "#6f513d", "#ededed"], image: images.wl4, imageLabel: "Wallet / 04", imagePosition: "center center" },
  { page: 14, category: "Leather Wallet", name: "Zip Utility Wallet", artNo: "EI-WL-5125", leatherType: "Nappa Leather", color: "Auburn Clay", finish: "Smooth Finish", description: "Designed for organized carry with a softer luxury feel and a modern finish direction.", details: ["Zip closure", "Internal pockets", "Refined silhouette"], palette: ["#2a2a2a", "#7a573d", "#f3f3f3"], image: images.wl5, imageLabel: "Wallet / 05", imagePosition: "center center" },
  { page: 15, category: "Leather Wallet", name: "Card Zip Pouch", artNo: "EI-WL-8593", leatherType: "Printed Leather", color: "Redwood", finish: "Structured Surface", description: "Compact, neat, and highly giftable for modern accessory capsules and travel edits.", details: ["Zip section", "Small format", "Easy daily carry"], palette: ["#0f0f0f", "#6d6d6d", "#f0f0f0"], image: images.wl6, imageLabel: "Wallet / 06", imagePosition: "center top" },
  { page: 15, category: "Leather Wallet", name: "Slim Money Clip", artNo: "EI-WL-7745", leatherType: "Vegetable Tanned Leather", color: "Mocha Gray", finish: "Raw Edge Finish", description: "A stripped-back money clip wallet with a minimal footprint and a confident material story.", details: ["Money clip", "Card window", "Ultra slim"], palette: ["#a07040", "#c89a68", "#f5f0e8"], image: images.wl7, imageLabel: "Wallet / 07", imagePosition: "center center" },
];

export const walletExtraProducts: ProductPage[] = [
  { page: 0, category: "Leather Wallet", name: "Passport Holder", artNo: "EI-WL-0419", leatherType: "Full Grain Leather", color: "Coffee Bean", finish: "Natural Patina", description: "Travel passport holder with document pockets and a clean spine for easy passport access.", details: ["Passport slot", "Card pockets", "Document sleeve"], palette: ["#b08040", "#d4a860", "#f8f0e0"], image: images.wl8, imageLabel: "Wallet / 08", imagePosition: "center center" },
  { page: 0, category: "Leather Wallet", name: "Long Envelope Wallet", artNo: "EI-WL-6096", leatherType: "Smooth Calf Leather", color: "Copper Orange", finish: "Matte Finish", description: "Long envelope-style wallet with a magnetic snap closure and generous internal organization.", details: ["Magnetic snap", "Bill section", "8 card slots"], palette: ["#111111", "#4a4a4a", "#f0f0f0"], image: images.wl9, imageLabel: "Wallet / 09", imagePosition: "center center" },
  { page: 0, category: "Leather Wallet", name: "Mini Card Wallet", artNo: "EI-WL-7757", leatherType: "Vegetable Tanned Leather", color: "Gunmetal Gray", finish: "Raw Edge", description: "Minimal four-slot card wallet with a center fold and a raw edge finish for a refined artisan look.", details: ["4 card slots", "Center fold", "Raw edge"], palette: ["#c09060", "#e8b878", "#f8f0e0"], image: images.wl10, imageLabel: "Wallet / 10", imagePosition: "center center" },
  { page: 0, category: "Leather Wallet", name: "Key Coin Pouch", artNo: "EI-WL-9599", leatherType: "Nappa Leather", color: "Dark Cocoa", finish: "Soft Grain", description: "Small coin and key pouch with a ring attachment and a zip closure for compact daily carry.", details: ["Key ring", "Zip closure", "Coin pocket"], palette: ["#2a1200", "#6a3818", "#f0ece8"], image: images.wl11, imageLabel: "Wallet / 11", imagePosition: "center center" },
  { page: 0, category: "Leather Wallet", name: "Trifold Wallet", artNo: "EI-WL-6863", leatherType: "Pull-Up Leather", color: "Ash Gray", finish: "Natural Pull-Up", description: "Classic trifold with visible pull-up aging character, ample card slots, and a coin pocket.", details: ["Trifold", "Coin pocket", "6 card slots"], palette: ["#9a6535", "#c8934f", "#f5ede0"], image: images.wl12, imageLabel: "Wallet / 12", imagePosition: "center center" },
];

export const walletTailProducts: ProductPage[] = [
  { page: 0, category: "Leather Wallet", name: "Phone Wallet Case", artNo: "EI-WL-1425", leatherType: "Full Grain Leather", color: "Cinnamon Brown", finish: "Matte Clean", description: "Slim leather phone wallet case with card slots and a magnetic closure for everyday minimal carry.", details: ["Phone slot", "3 card slots", "Magnetic close"], palette: ["#111111", "#4a4a4a", "#eeeeee"], image: images.wl13, imageLabel: "Wallet / 13", imagePosition: "center center" },
  { page: 0, category: "Leather Wallet", name: "Checkbook Wallet", artNo: "EI-WL-3147", leatherType: "Cowhide Leather", color: "Warm Copper", finish: "Natural Grain", description: "Long checkbook wallet with a snap closure and organized interior for financial documents and cards.", details: ["Checkbook pocket", "Snap close", "6 card slots"], palette: ["#9a6535", "#c8934f", "#f5ede0"], image: images.wl14, imageLabel: "Wallet / 14", imagePosition: "center center" },
  { page: 0, category: "Leather Wallet", name: "Secretary Wallet", artNo: "EI-WL-7744", leatherType: "Vegetable Tanned Leather", color: "Sand Beige", finish: "Dry Matte", description: "Large secretary-style wallet with a fold-over flap, bill section, and ample card storage.", details: ["Fold-over flap", "Bill section", "8+ slots"], palette: ["#b08040", "#d4a860", "#f8f0e0"], image: images.wl15, imageLabel: "Wallet / 15", imagePosition: "center center" },
];

export const beltCoreProducts: ProductPage[] = [
  { page: 16, category: "Leather Belt", name: "Formal Buckle Belt", artNo: "EI-BT-6788", leatherType: "Full Grain Strap Leather", color: "Black / Yellow", finish: "Polished Edge", description: "A formal belt developed for clean presentation and strong everyday durability.", details: ["Metal buckle", "Smooth strap", "Even thickness"], palette: ["#0f0f0f", "#4b4b4b", "#efefef"], image: images.blt1, imageLabel: "Belt / 01", imagePosition: "center center" },
  { page: 17, category: "Leather Belt", name: "Styled Casual Belt", artNo: "EI-BT-3726", leatherType: "Buff Leather", color: "Deep Ocean Blue", finish: "Natural Look", description: "A cleaner casual format with visible texture and an understated contemporary mood.", details: ["Flexible strap", "Daily wear", "Classic buckle"], palette: ["#1c1c1c", "#7e583f", "#ececec"], image: images.blt9, imageLabel: "Belt / 02", imagePosition: "center center" },
  { page: 18, category: "Leather Belt", name: "Modern Reversible Belt", artNo: "EI-BT-9125", leatherType: "Corrected Grain Leather", color: "Burnt Umber", finish: "Dual Surface", description: "A neat reversible option intended for commercial dressing and gifting programs.", details: ["Reversible wear", "Smart hardware", "Balanced profile"], palette: ["#111111", "#7d5b40", "#f2f2f2"], image: images.blt10, imageLabel: "Belt / 03", imagePosition: "center center" },
  { page: 18, category: "Leather Belt", name: "Wide Waist Belt", artNo: "EI-BT-8882", leatherType: "Pull-Up Leather", color: "Rustic Copper", finish: "Burnished Edge", description: "A wider belt silhouette for fashion-forward styling and editorial placement.", details: ["Wide strap", "Decorative stitch", "Statement buckle"], palette: ["#6b4c2a", "#a07850", "#f5f5f5"], image: images.blt11, imageLabel: "Belt / 04", imagePosition: "center center" },
  { page: 18, category: "Leather Belt", name: "Woven Leather Belt", artNo: "EI-BT-3386", leatherType: "Braided Leather Strip", color: "Golden Bronze", finish: "Natural Woven", description: "Handwoven leather strips create a tactile surface with a relaxed artisanal feel.", details: ["Woven body", "Pin buckle", "Casual profile"], palette: ["#4e3520", "#8c6640", "#eeeeee"], image: images.blt15, imageLabel: "Belt / 05", imagePosition: "center center" },
  { page: 18, category: "Leather Belt", name: "Slim Formal Belt", artNo: "EI-BT-3752", leatherType: "Smooth Calf Leather", color: "Dusty Blush", finish: "High Gloss", description: "A refined narrow belt designed to pair with dress trousers and tailored suiting.", details: ["Slim width", "Polished buckle", "Dress cut"], palette: ["#2a1a0a", "#6b4428", "#f0f0f0"], image: images.blt13, imageLabel: "Belt / 06", imagePosition: "center center" },
  { page: 18, category: "Leather Belt", name: "D-Ring Canvas Belt", artNo: "EI-BT-0325", leatherType: "Leather-Trimmed Canvas", color: "Mauve Taupe", finish: "Military Matt", description: "A utility-inspired belt with leather tabs and a D-ring fastening for a rugged edge.", details: ["D-ring closure", "Leather tab", "Adjustable length"], palette: ["#5e5835", "#8c7e50", "#e8e8e8"], image: images.blt14, imageLabel: "Belt / 07", imagePosition: "center center" },
];

export const beltExtraProducts: ProductPage[] = [
  { page: 0, category: "Leather Belt", name: "Western Stitch Belt", artNo: "EI-BT-5112", leatherType: "Full Grain Leather", color: "Autumn Rust", finish: "Saddle Wax", description: "Western-inspired belt with decorative stitching and an antique brass oval buckle.", details: ["Western stitching", "Oval buckle", "Edge paint"], palette: ["#6b4020", "#9e6535", "#f5ede0"], image: images.blt16, imageLabel: "Belt / 08", imagePosition: "center center" },
  { page: 0, category: "Leather Belt", name: "Slim Dress Belt", artNo: "EI-BT-8221", leatherType: "Smooth Calf Leather", color: "Saddle Rust", finish: "High Polish", description: "Ultra-slim belt cut for dress suiting and formal occasions with a polished nickle buckle.", details: ["20mm width", "Nickel buckle", "Dress holes"], palette: ["#0a0a0a", "#3d3d3d", "#f0f0f0"], image: images.blt2, imageLabel: "Belt / 09", imagePosition: "center center" },
  { page: 0, category: "Leather Belt", name: "Braided Ring Belt", artNo: "EI-BT-4820", leatherType: "Braided Leather Strip", color: "Dark Burgundy", finish: "Natural Woven", description: "Double-ring buckle belt with a hand-braided leather body and a casual relaxed silhouette.", details: ["Double ring", "Braided body", "No-hole adjustable"], palette: ["#c09060", "#e8b878", "#f8f0e0"], image: images.blt3, imageLabel: "Belt / 10", imagePosition: "center center" },
  { page: 0, category: "Leather Belt", name: "Snap Utility Belt", artNo: "EI-BT-0557", leatherType: "Buff Leather", color: "Cocoa Ash", finish: "Military Matt", description: "Sturdy utility belt with a snap-pin buckle designed for everyday workwear and casual dressing.", details: ["Snap buckle", "Wide width", "Reinforced holes"], palette: ["#2a1800", "#6a3c18", "#eeeeee"], image: images.blt4, imageLabel: "Belt / 11", imagePosition: "center center" },
  { page: 0, category: "Leather Belt", name: "Statement Buckle Belt", artNo: "EI-BT-4274", leatherType: "Pull-Up Leather", color: "Honey Gold", finish: "Burnished Wax", description: "Wide fashion belt anchored by an oversized vintage-brass rectangular buckle.", details: ["Oversized buckle", "Wide cut", "Burnished pull-up"], palette: ["#c8983a", "#e8c060", "#f8f0d8"], image: images.blt5, imageLabel: "Belt / 12", imagePosition: "center center" },
];

export const beltTailProducts: ProductPage[] = [
  { page: 0, category: "Leather Belt", name: "Perforated Belt", artNo: "EI-BT-2282", leatherType: "Smooth Calf Leather", color: "Black", finish: "Perforated Panel", description: "Clean belt with a perforated panel pattern and a polished pin buckle for a fresh contemporary feel.", details: ["Perforated detail", "Pin buckle", "Even width"], palette: ["#0a0a0a", "#3d3d3d", "#f0f0f0"], image: images.blt6, imageLabel: "Belt / 13", imagePosition: "center center" },
  { page: 0, category: "Leather Belt", name: "Stitch Accent Belt", artNo: "EI-BT-8310", leatherType: "Full Grain Leather", color: "Brown", finish: "Contrast Stitch", description: "Wide belt with a contrasting topstitch accent and a solid brass square buckle for a bold everyday look.", details: ["Contrast stitch", "Square buckle", "Wide cut"], palette: ["#6b4020", "#9e6535", "#f5ede0"], image: images.blt7, imageLabel: "Belt / 14", imagePosition: "center center" },
  { page: 0, category: "Leather Belt", name: "Double Grommet Belt", artNo: "EI-BT-9736", leatherType: "Buff Leather", color: "Black", finish: "Matte Military", description: "Punk-inspired double grommet belt with a matte surface and an oversized pin buckle for fashion-forward styling.", details: ["Double grommets", "Oversized buckle", "Fashion cut"], palette: ["#111111", "#555555", "#eeeeee"], image: images.blt8, imageLabel: "Belt / 15", imagePosition: "center center" },
];

export const accessoryProducts: ProductPage[] = [
  { page: 0, category: "Leather Accessories", name: "Leather File Folder", artNo: "EI-AC-1142", leatherType: "aniline leather", color: "Green", finish: "Natural Matte", description: "A structured leather file folder for keeping documents organised — durable, professional, and built to last.", details: ["A4 capacity", "Secure closure", "Card slot"], palette: ["#7a4f2e", "#b07848", "#f5f0e8"], image: images.acc1, imageLabel: "Accessories / 01", imagePosition: "center center" },
  { page: 0, category: "Leather Accessories", name: "Slim Card Holder", artNo: "EI-AC-2387", leatherType: "Smooth Brown Napa Leather", color: "Brown", finish: "Burnished Edge", description: "A minimalist card holder engineered for everyday carry — slim enough to forget you have it.", details: ["4-card capacity", "Centre slot", "Open top"], palette: ["#c8974a", "#e8c080", "#f8f4ec"], image: images.acc2, imageLabel: "Accessories / 02", imagePosition: "center center" },
  { page: 0, category: "Leather Accessories", name: "Business Card Holder", artNo: "EI-AC-3054", leatherType: "aniline leather", color: "Blue", finish: "Soft Smooth", description: "A refined business card holder that keeps cards pristine and presentations sharp.", details: ["20-card capacity", "Magnetic closure", "Nappa lining"], palette: ["#1a1a1a", "#3a3a3a", "#f0f0f0"], image: images.acc3, imageLabel: "Accessories / 03", imagePosition: "center center" },
  { page: 0, category: "Leather Accessories", name: "Leather Key Holder", artNo: "EI-AC-4761", leatherType: "Smooth Napa", color: "Black", finish: "Matte Pull-Up", description: "A compact key holder with swing-out hooks that keep keys silent and scratch-free.", details: ["4-key hooks", "Snap closure", "Brass hardware"], palette: ["#2c1a0a", "#5c3820", "#e8ddd0"], image: images.acc4, imageLabel: "Accessories / 04", imagePosition: "center center" },
  { page: 0, category: "Leather Accessories", name: "Toiletry Pouch", artNo: "EI-AC-5293", leatherType: "Smooth Napa", color: "Rich Red", finish: "Smooth Polished", description: "A spacious leather toiletry pouch with a waterproof lining — travel-ready and elegantly finished.", details: ["Zip closure", "Waterproof lining", "Interior pockets"], palette: ["#4a5030", "#788050", "#f0f0e8"], image: images.acc5, imageLabel: "Accessories / 05", imagePosition: "center center" },
  { page: 0, category: "Leather Accessories", name: "Bag Charm", artNo: "EI-AC-6018", leatherType: "Full Grain Leather", color: "Cognac", finish: "Natural Matte", description: "A hand-stitched leather bag charm that adds a personal touch to any tote or handbag.", details: ["Lobster clasp", "Hand-stitched", "Solid brass hardware"], palette: ["#7a4f2e", "#b07848", "#f5f0e8"], image: images.acc6, imageLabel: "Accessories / 06", imagePosition: "center center" },
  { page: 0, category: "Leather Accessories", name: "Card Case", artNo: "EI-AC-7435", leatherType: "Nappa Leather", color: "Red", finish: "Soft Smooth", description: "A vibrant red card case that holds essentials without the bulk — a bold everyday essential.", details: ["6-card capacity", "Snap closure", "Slim profile"], palette: ["#9b1c1c", "#c83232", "#faeaea"], image: images.acc7, imageLabel: "Accessories / 07", imagePosition: "center center" },
  { page: 0, category: "Leather Accessories", name: "Phone Case", artNo: "EI-AC-8826", leatherType: "Full Grain Leather", color: "Oxblood", finish: "Matte Pull-Up", description: "A full grain leather phone case in deep oxblood — protective, refined, and built to age beautifully.", details: ["Precise cutouts", "Card slot", "Drop protection"], palette: ["#4a0a0a", "#7a1a1a", "#f8eaea"], image: images.acc8, imageLabel: "Accessories / 08", imagePosition: "center center" },
];

export const productCollections = {
  "Leather Bag": [...bagCoreProducts, ...bagExtraProducts, ...bagTailProducts],
  "Leather Wallet": [...walletCoreProducts, ...walletExtraProducts, ...walletTailProducts],
  "Leather Belt": [...beltCoreProducts, ...beltExtraProducts, ...beltTailProducts],
  "Leather Accessories": accessoryProducts,
} satisfies Record<ProductCategory, ProductPage[]>;
