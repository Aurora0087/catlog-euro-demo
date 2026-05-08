import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";
import DownloadPdfButton from "./DownloadPdfButton";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

type IntroPage = {
  page: number;
  title: string;
  label: string;
  slogan?: string;
  body: string[];
  image: string;
  imageLabel: string;
  imagePosition?: string;
};

type ProductCategory =
  | "Leather Bag"
  | "Leather Wallet"
  | "Leather Belt"
  | "Leather Shoes"
  | "Leather Jacket"
  | "Leather Gloves";

type ProductPage = {
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

type CollectionOpener = {
  page: number;
  category: ProductCategory;
  lines: string[];
  image: string;
  imagePosition?: string;
};

const images = {
  cover: "/imags/EURO BULDING.jpeg",
  aboutus:
    "https://images.unsplash.com/photo-1775641487797-ee362ba3b600?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  building:
    "https://images.unsplash.com/photo-1771599940657-f9f151abed45?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  artisan: "/imags/width_641.webp",
  workshop: "/imags/width_800.png",
  production:
    "https://images.unsplash.com/photo-1718004438746-4ef85144ee96?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  bagStudio: "/imags/width_670.png",
  bag1: "/imags/bag1.png",
  bag1_1: "/imags/bag1_1.png",
  bag1_2: "/imags/bag1_2.png",
  bag2: "/imags/bag2.png",
  bag3: "/imags/bag3.png",
  bag4: "/imags/bag4.png",
  bag5: "/imags/bag5.png",
  bag6: "/imags/bag6.png",
  bag7: "/imags/bag7.png",
  bag8: "/imags/bag8.png",
  bag9: "/imags/bag9.png",
  bag10: "/imags/bag10.png",
  bag11: "/imags/bag11.png",
  bag12: "/imags/bag12.png",
  bag13: "/imags/bag13.png",
  bag14: "/imags/bag14.png",
  bag15: "/imags/bag15.png",

  wl1:"/imags/wl1.png",
  wl2:"/imags/wl2.png",
  wl3:"/imags/wl3.png",
  wl4:"/imags/wl4.png",
  wl5:"/imags/wl5.png",
  wl6:"/imags/wl6.png",
  wl7:"/imags/wl7.png",

  blt1:"/imags/belt/1_2.png",
  blt2:"/imags/belt/2.png",
  blt3:"/imags/belt/3.png",
  blt4:"/imags/belt/4.png",
  blt5:"/imags/belt/5.png",
  blt6:"/imags/belt/6.png",
  blt7:"/imags/belt/7.png",
  blt8:"/imags/belt/8.png",
  blt9:"/imags/belt/9.png",
  blt10:"/imags/belt/10.png",
  blt11:"/imags/belt/11.png",
  blt12:"/imags/belt/12.png",
  blt13:"/imags/belt/13.png",
  blt14:"/imags/belt/14.png",
  blt15:"/imags/belt/15.png",
  
  bagFlatlay:
    "https://images.pexels.com/photos/4452389/pexels-photo-4452389.jpeg?cs=srgb&dl=pexels-vlada-karpovich-4452389.jpg&fm=jpg",
  bagMessenger:
    "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?cs=srgb&dl=pexels-geyonk-1152077.jpg&fm=jpg",
  bagClutch:
    "https://images.pexels.com/photos/28028348/pexels-photo-28028348.jpeg?cs=srgb&dl=pexels-ekrulila-28028348.jpg&fm=jpg",
  bagChair:
    "https://images.pexels.com/photos/27292676/pexels-photo-27292676.jpeg?cs=srgb&dl=pexels-ekrulila-27292676.jpg&fm=jpg",
  walletClean:
    "https://images.pexels.com/photos/30750448/pexels-photo-30750448.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-30750448.jpg&fm=jpg",
  walletFlatlay:
    "https://images.pexels.com/photos/28086433/pexels-photo-28086433.jpeg?cs=srgb&dl=pexels-ekrulila-28086433.jpg&fm=jpg",
  beltBlack:
    "https://images.pexels.com/photos/989938/pexels-photo-989938.jpeg?cs=srgb&dl=pexels-fox-58267-989938.jpg&fm=jpg",
  beltStyled:
    "https://images.pexels.com/photos/26851196/pexels-photo-26851196.jpeg?cs=srgb&dl=pexels-ron-lach-26851196.jpg&fm=jpg",
  shoesBlack:
    "https://images.pexels.com/photos/27063078/pexels-photo-27063078.jpeg?cs=srgb&dl=pexels-jose-martin-segura-benites-1422456152-27063078.jpg&fm=jpg",
  shoesSet:
    "https://images.pexels.com/photos/31935098/pexels-photo-31935098.jpeg?cs=srgb&dl=pexels-mr-abrar-visuals-2151929345-31935098.jpg&fm=jpg",
  shoesFormal:
    "https://images.pexels.com/photos/19556446/pexels-photo-19556446.jpeg?cs=srgb&dl=pexels-danyalmalik2770-19556446.jpg&fm=jpg",
  shoesBrown:
    "https://images.pexels.com/photos/27608407/pexels-photo-27608407.jpeg?cs=srgb&dl=pexels-jose-martin-segura-benites-1422456152-27608407.jpg&fm=jpg",
  jacketStone:
    "https://images.pexels.com/photos/20811216/pexels-photo-20811216.jpeg?cs=srgb&dl=pexels-markrz-20811216.jpg&fm=jpg",
  jacketNight:
    "https://images.pexels.com/photos/6553761/pexels-photo-6553761.jpeg?cs=srgb&dl=pexels-omari-6553761.jpg&fm=jpg",
  jacketClose:
    "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?cs=srgb&dl=pexels-cottonbro-1040945.jpg&fm=jpg",
  glovesStudio:
    "https://images.pexels.com/photos/10147906/pexels-photo-10147906.jpeg?cs=srgb&dl=pexels-rajeshverma-10147906.jpg&fm=jpg",
  glovesDetail:
    "https://images.pexels.com/photos/6989529/pexels-photo-6989529.jpeg?cs=srgb&dl=pexels-castorly-stock-6989529.jpg&fm=jpg",
};

const introPages: IntroPage[] = [
  {
    page: 4,
    title: "Compliance",
    label: "Responsible Production",
    image: images.artisan,
    imageLabel: "02 / Workshop",
    imagePosition: "center center",
    body: [
      "At Euro international, we understand the importance of providing a safe and healthy work environment to our employees.",
      "In light of this fact, we work strongly with third party agencies such as SEDEX and BSCI to not only audit our factories regularly, but also help us better our working conditions. To bring further transparency to our operations, we also have our own tanneries with LWG certified .",
      "In doing so, we ensure that our core values of excellence, integrity and contribution are upheld, and that we are able to impact society in a positive way.",
    ],
  },
  {
    page: 5,
    title: "Our Mission",
    label: "Purpose",
    image: images.workshop,
    imageLabel: "03 / Craft",
    imagePosition: "center center",
    body: [
      "Our mission is to craft leather goods that aren’t just carried or worn—but lived in. Products that age beautifully, tell your story, and stay by your side for years to come.",
      "We aim to give clients dependable manufacturing backed by strong design sense, sharp presentation, and consistent commercial value.",
    ],
  },
  {
    page: 6,
    title: "Our Story",
    label: "Heritage",
    slogan: "Crafted with Tradition. Designed for Today.",
    image: images.production,
    imageLabel: "04 / Process",
    imagePosition: "center center",
    body: [
      "We are passionate leather goods manufacturers driven by one belief: real craftsmanship never goes out of style. From our humble beginnings, we've built a reputation for quality by blending traditional techniques with modern design.",
      "Every product we create—wallets, belts, bags, gloves, and more—is handcrafted by skilled artisans who treat each piece of leather with care and respect. We source only the finest materials, focusing on durability, texture, and timeless appeal.",
    ],
  },
];

const aboutPage = {
  page: 3,
  title: "ABOUT US",
  image: images.workshop,
  body: [
    "EURO INTERNATIONAL is a leather goods manufacturing and export house built around clean finishing, dependable production, and strong contemporary presentation.",
    "From Kolkata, we create bags, wallets, belts, shoes, jackets, and gloves with a product language that balances practical use, commercial value, and elevated visual appeal.",
  ],
};

const summarySections = [
  {
    eyebrow: "01 / Opening",
    title: "Brand Story",
    description: "An overview of the company, catalogue, and opening product edit.",
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
      { page: "14", title: "Leather Belt Collection" },
      { page: "19", title: "Leather Shoes Collection" },
      { page: "24", title: "Leather Jacket Collection" },
      { page: "29", title: "Leather Gloves Collection" },
    ],
  },
  {
    eyebrow: "03 / Contact",
    title: "Keep In Touch",
    description: "Direct business details, office address, and workshop information.",
    items: [{ page: "34", title: "Keep In Touch" }],
  },
];

const collectionOpeners: CollectionOpener[] = [
  {
    page: 7,
    category: "Leather Bag",
    lines: ["LEATHER", "BAG"],
    image: images.bagStudio,
    imagePosition: "center center",
  },
  {
    page: 12,
    category: "Leather Wallet",
    lines: ["LEATHER", "WALLET"],
    image: images.walletClean,
    imagePosition: "center center",
  },
  {
    page: 17,
    category: "Leather Belt",
    lines: ["LEATHER", "BELT"],
    image: images.beltBlack,
    imagePosition: "center center",
  },
  {
    page: 22,
    category: "Leather Shoes",
    lines: ["LEATHER", "SHOES"],
    image: images.shoesBlack,
    imagePosition: "center center",
  },
  {
    page: 27,
    category: "Leather Jacket",
    lines: ["LEATHER", "JACKET"],
    image: images.jacketStone,
    imagePosition: "center center",
  },
  {
    page: 32,
    category: "Leather Gloves",
    lines: ["LEATHER", "GLOVES"],
    image: images.glovesStudio,
    imagePosition: "center center",
  },
];

const bagCoreProducts: ProductPage[] = [
  {
    page: 6,
    category: "Leather Bag",
    name: "Structured Bagpack",
    artNo: "6/000807-25",
    leatherType: "saffiano",
    color: "Tan",
    finish: "Matte Finish",
    description:
      "Minimal structure with a premium surface and a sharp fashion-led silhouette.",
    details: ["Top handle design", "Metal hardware", "Compact interior"],
    palette: ["#2f2f2f", "#8b5e3c", "#d9d9d9"],
    image: images.bag1,
    imageLabel: "Bag / 01",
    imagePosition: "center center",
  },
  {
    page: 7,
    category: "Leather Bag",
    name: "Sling Crossbody",
    artNo: "EI-BG-602",
    leatherType: "Vegetable Tanned Leather",
    color: "Natural Brown",
    finish: "Handcrafted Matte",
    description:
      "A compact crossbody shape with artisanal character and easy everyday use.",
    details: ["Adjustable strap", "Front flap closure", "Lightweight build"],
    palette: ["#4f3729", "#a2714c", "#ececec"],
    image: images.bag1_2,
    imageLabel: "Bag / 02",
    imagePosition: "center center",
  },
  {
    page: 8,
    category: "Leather Bag",
    name: "Messenger Profile",
    artNo: "EI-BG-603",
    leatherType: "Full Grain Leather",
    color: "Classic Camel",
    finish: "Semi Gloss",
    description:
      "A clean messenger style designed for polished utility and retail appeal.",
    details: ["Buckled front", "Long strap", "Soft edge construction"],
    palette: ["#2b2b2b", "#a45f39", "#efefef"],
    image: images.bag3,
    imageLabel: "Bag / 03",
    imagePosition: "center center",
  },
  {
    page: 9,
    category: "Leather Bag",
    name: "Modern Clutch",
    artNo: "EI-BG-604",
    leatherType: "Soft Nappa Leather",
    color: "Brown",
    finish: "Smooth Touch",
    description:
      "Refined clutch styling with restrained details and a contemporary commercial look.",
    details: ["Clean flap form", "Minimal seam lines", "Even edge finish"],
    palette: ["#383838", "#9f6947", "#f2f2f2"],
    image: images.bag4,
    imageLabel: "Bag / 04",
    imagePosition: "center center",
  },
  {
    page: 9,
    category: "Leather Bag",
    name: "Bucket Drawstring",
    artNo: "EI-BG-605",
    leatherType: "Pebble Grain Leather",
    color: "Black",
    finish: "Glossy Finish",
    description:
      "Slouchy bucket form with a drawstring closure and clean pebble texture throughout.",
    details: ["Drawstring top", "Inner pocket", "Dual handles"],
    palette: ["#1a1a1a", "#5c5c5c", "#e8e8e8"],
    image: images.bag5,
    imageLabel: "Bag / 05",
    imagePosition: "center center",
  },
  {
    page: 9,
    category: "Leather Bag",
    name: "Structured Tote",
    artNo: "EI-BG-606",
    leatherType: "Full Grain Leather",
    color: "Cognac",
    finish: "Burnished Finish",
    description:
      "Generous tote proportions with a rigid base and polished hardware for a boardroom look.",
    details: ["Open top", "Metal base studs", "Interior zip pocket"],
    palette: ["#7a4a28", "#c28b5a", "#f5f5f5"],
    image: images.bag6,
    imageLabel: "Bag / 06",
    imagePosition: "center center",
  },
  {
    page: 9,
    category: "Leather Bag",
    name: "Envelope Shoulder Bag",
    artNo: "EI-BG-607",
    leatherType: "Vegetable Tanned Leather",
    color: "Olive",
    finish: "Matte Finish",
    description:
      "Envelope-style shoulder bag with a fold-over flap and minimalist edge stitching.",
    details: ["Fold-over flap", "Shoulder strap", "Snap closure"],
    palette: ["#4a4a30", "#8a8a5c", "#eeeeee"],
    image: images.bag7,
    imageLabel: "Bag / 07",
    imagePosition: "center center",
  },
];

const walletCoreProducts: ProductPage[] = [
  {
    page: 12,
    category: "Leather Wallet",
    name: "Classic Bifold",
    artNo: "EI-WL-1001",
    leatherType: "Pull-Up Leather",
    color: "Cognac",
    finish: "Natural Patina",
    description:
      "Slim, classic, and commercial. Built for daily carry with a familiar premium handfeel.",
    details: ["Bill compartment", "Card slots", "Compact fold"],
    palette: ["#3b3b3b", "#8a5a3d", "#ececec"],
    image: images.wl1,
    imageLabel: "Wallet / 01",
    imagePosition: "center center",
  },
  {
    page: 11,
    category: "Leather Wallet",
    name: "Everyday Wallet",
    artNo: "EI-WL-1002",
    leatherType: "Cowhide Leather",
    color: "Brown",
    finish: "Soft Grain",
    description:
      "Designed for easy storage, clean proportions, and broad market usability.",
    details: ["Multiple slots", "Slim profile", "Consistent grain"],
    palette: ["#1e1e1e", "#9c6847", "#f0f0f0"],
    image: images.wl2,
    imageLabel: "Wallet / 02",
    imagePosition: "center center",
  },
  {
    page: 12,
    category: "Leather Wallet",
    name: "Pocket Card Fold",
    artNo: "EI-WL-1003",
    leatherType: "Vegetable Tanned Leather",
    color: "Whiskey",
    finish: "Dry Matte",
    description:
      "A compact card-focused format with a sharp edge profile and understated styling.",
    details: ["Card slots", "Central fold", "Minimal bulk"],
    palette: ["#232323", "#a16f46", "#ebebeb"],
    image: images.wl3,
    imageLabel: "Wallet / 03",
    imagePosition: "center top",
  },
  {
    page: 13,
    category: "Leather Wallet",
    name: "Travel Wallet",
    artNo: "EI-WL-1004",
    leatherType: "Milled Leather",
    color: "Deep Brown",
    finish: "Supple Grain",
    description:
      "Long format storage with a neat finish and dependable structure for travel needs.",
    details: ["Long body", "Inner storage", "Clean stitching"],
    palette: ["#111111", "#6f513d", "#ededed"],
    image: images.wl4,
    imageLabel: "Wallet / 04",
    imagePosition: "center center",
  },
  {
    page: 14,
    category: "Leather Wallet",
    name: "Zip Utility Wallet",
    artNo: "EI-WL-1005",
    leatherType: "Nappa Leather",
    color: "Dark Coffee",
    finish: "Smooth Finish",
    description:
      "Designed for organized carry with a softer luxury feel and a modern finish direction.",
    details: ["Zip closure", "Internal pockets", "Refined silhouette"],
    palette: ["#2a2a2a", "#7a573d", "#f3f3f3"],
    image: images.wl5,
    imageLabel: "Wallet / 05",
    imagePosition: "center center",
  },
  {
    page: 15,
    category: "Leather Wallet",
    name: "Card Zip Pouch",
    artNo: "EI-WL-1006",
    leatherType: "Printed Leather",
    color: "Black",
    finish: "Structured Surface",
    description:
      "Compact, neat, and highly giftable for modern accessory capsules and travel edits.",
    details: ["Zip section", "Small format", "Easy daily carry"],
    palette: ["#0f0f0f", "#6d6d6d", "#f0f0f0"],
    image: images.wl6,
    imageLabel: "Wallet / 06",
    imagePosition: "center top",
  },
  {
    page: 15,
    category: "Leather Wallet",
    name: "Slim Money Clip",
    artNo: "EI-WL-1007",
    leatherType: "Vegetable Tanned Leather",
    color: "Natural Tan",
    finish: "Raw Edge Finish",
    description:
      "A stripped-back money clip wallet with a minimal footprint and a confident material story.",
    details: ["Money clip", "Card window", "Ultra slim"],
    palette: ["#a07040", "#c89a68", "#f5f0e8"],
    image: images.wl7,
    imageLabel: "Wallet / 07",
    imagePosition: "center center",
  },
];

const beltCoreProducts: ProductPage[] = [
  {
    page: 16,
    category: "Leather Belt",
    name: "Formal Buckle Belt",
    artNo: "EI-BT-1601",
    leatherType: "Full Grain Strap Leather",
    color: "Black",
    finish: "Polished Edge",
    description:
      "A formal belt developed for clean presentation and strong everyday durability.",
    details: ["Metal buckle", "Smooth strap", "Even thickness"],
    palette: ["#0f0f0f", "#4b4b4b", "#efefef"],
    image: images.blt1,
    imageLabel: "Belt / 01",
    imagePosition: "center center",
  },
  {
    page: 17,
    category: "Leather Belt",
    name: "Styled Casual Belt",
    artNo: "EI-BT-1602",
    leatherType: "Buff Leather",
    color: "Brown",
    finish: "Natural Look",
    description:
      "A cleaner casual format with visible texture and an understated contemporary mood.",
    details: ["Flexible strap", "Daily wear", "Classic buckle"],
    palette: ["#1c1c1c", "#7e583f", "#ececec"],
    image: images.blt7,
    imageLabel: "Belt / 02",
    imagePosition: "center center",
  },
  {
    page: 18,
    category: "Leather Belt",
    name: "Modern Reversible Belt",
    artNo: "EI-BT-1603",
    leatherType: "Corrected Grain Leather",
    color: "Black / Brown",
    finish: "Dual Surface",
    description:
      "A neat reversible option intended for commercial dressing and gifting programs.",
    details: ["Reversible wear", "Smart hardware", "Balanced profile"],
    palette: ["#111111", "#7d5b40", "#f2f2f2"],
    image: images.blt8,
    imageLabel: "Belt / 03",
    imagePosition: "center center",
  },
  {
    page: 18,
    category: "Leather Belt",
    name: "Wide Waist Belt",
    artNo: "EI-BT-1604",
    leatherType: "Pull-Up Leather",
    color: "Tan",
    finish: "Burnished Edge",
    description:
      "A wider belt silhouette for fashion-forward styling and editorial placement.",
    details: ["Wide strap", "Decorative stitch", "Statement buckle"],
    palette: ["#6b4c2a", "#a07850", "#f5f5f5"],
    image: images.blt9,
    imageLabel: "Belt / 04",
    imagePosition: "center center",
  },
  {
    page: 18,
    category: "Leather Belt",
    name: "Woven Leather Belt",
    artNo: "EI-BT-1605",
    leatherType: "Braided Leather Strip",
    color: "Brown",
    finish: "Natural Woven",
    description:
      "Handwoven leather strips create a tactile surface with a relaxed artisanal feel.",
    details: ["Woven body", "Pin buckle", "Casual profile"],
    palette: ["#4e3520", "#8c6640", "#eeeeee"],
    image: images.blt10,
    imageLabel: "Belt / 05",
    imagePosition: "center center",
  },
  {
    page: 18,
    category: "Leather Belt",
    name: "Slim Formal Belt",
    artNo: "EI-BT-1606",
    leatherType: "Smooth Calf Leather",
    color: "Dark Brown",
    finish: "High Gloss",
    description:
      "A refined narrow belt designed to pair with dress trousers and tailored suiting.",
    details: ["Slim width", "Polished buckle", "Dress cut"],
    palette: ["#2a1a0a", "#6b4428", "#f0f0f0"],
    image: images.blt11,
    imageLabel: "Belt / 06",
    imagePosition: "center center",
  },
  {
    page: 18,
    category: "Leather Belt",
    name: "D-Ring Canvas Belt",
    artNo: "EI-BT-1607",
    leatherType: "Leather-Trimmed Canvas",
    color: "Khaki",
    finish: "Military Matt",
    description:
      "A utility-inspired belt with leather tabs and a D-ring fastening for a rugged edge.",
    details: ["D-ring closure", "Leather tab", "Adjustable length"],
    palette: ["#5e5835", "#8c7e50", "#e8e8e8"],
    image: images.blt12,
    imageLabel: "Belt / 07",
    imagePosition: "center center",
  },
];

const shoesCoreProducts: ProductPage[] = [
  {
    page: 19,
    category: "Leather Shoes",
    name: "Black Loafer",
    artNo: "EI-SH-1901",
    leatherType: "Embossed Leather",
    color: "Black",
    finish: "Textured Finish",
    description:
      "A sharp loafer presentation with a modern dress shoe expression.",
    details: ["Slip-on construction", "Metal trim", "Croc texture"],
    palette: ["#111111", "#6f6f6f", "#ececec"],
    image: images.shoesBlack,
    imageLabel: "Shoes / 01",
    imagePosition: "center center",
  },
  {
    page: 20,
    category: "Leather Shoes",
    name: "Formal Shoe Set",
    artNo: "EI-SH-1902",
    leatherType: "Leather / Suede Mix",
    color: "Black / Brown",
    finish: "Mixed Surface",
    description:
      "A curated formal assortment with contrast, variety, and clean showroom appeal.",
    details: ["Multiple styles", "Dress finish", "Retail-ready display"],
    palette: ["#111111", "#815b43", "#f0f0f0"],
    image: images.shoesSet,
    imageLabel: "Shoes / 02",
    imagePosition: "center center",
  },
  {
    page: 21,
    category: "Leather Shoes",
    name: "Formal Bit Loafer",
    artNo: "EI-SH-1903",
    leatherType: "Smooth Leather",
    color: "Black",
    finish: "Semi Gloss",
    description:
      "A refined black formal shoe with a classic bit detail and a clean last shape.",
    details: ["Bit hardware", "Soft upper", "Low profile sole"],
    palette: ["#0d0d0d", "#4f4f4f", "#ededed"],
    image: images.shoesFormal,
    imageLabel: "Shoes / 03",
    imagePosition: "center center",
  },
  {
    page: 21,
    category: "Leather Shoes",
    name: "Brown Derby Shoe",
    artNo: "EI-SH-1904",
    leatherType: "Burnished Calf Leather",
    color: "Cognac Brown",
    finish: "Hand Burnished",
    description:
      "A timeless derby silhouette with a rich burnished finish and clean broguing details.",
    details: ["Open lacing", "Brogue punch", "Leather sole"],
    palette: ["#6b3a1f", "#a06035", "#f5f0eb"],
    image: images.shoesBrown,
    imageLabel: "Shoes / 04",
    imagePosition: "center center",
  },
  {
    page: 21,
    category: "Leather Shoes",
    name: "Oxford Cap Toe",
    artNo: "EI-SH-1905",
    leatherType: "Polished Calf Leather",
    color: "Black",
    finish: "Mirror Polish",
    description:
      "A sharp cap-toe oxford for professional dress codes and formal styling.",
    details: ["Closed lacing", "Cap toe detail", "Goodyear welt"],
    palette: ["#0a0a0a", "#3d3d3d", "#f0f0f0"],
    image: images.shoesBlack,
    imageLabel: "Shoes / 05",
    imagePosition: "center center",
  },
  {
    page: 21,
    category: "Leather Shoes",
    name: "Suede Chelsea Boot",
    artNo: "EI-SH-1906",
    leatherType: "Suede Leather",
    color: "Camel",
    finish: "Brushed Suede",
    description:
      "A clean chelsea silhouette in camel suede with elastic gussets for effortless wear.",
    details: ["Elastic gusset", "Pull tab", "Stacked heel"],
    palette: ["#b58050", "#d4a870", "#f8f0e0"],
    image: images.shoesSet,
    imageLabel: "Shoes / 06",
    imagePosition: "center center",
  },
  {
    page: 21,
    category: "Leather Shoes",
    name: "Monk Strap Formal",
    artNo: "EI-SH-1907",
    leatherType: "Smooth Grain Leather",
    color: "Dark Brown",
    finish: "Satin Gloss",
    description:
      "A single-buckle monk strap with a sleek profile ideal for boardroom and event wear.",
    details: ["Buckle closure", "Square toe", "Leather lining"],
    palette: ["#2a1200", "#6a3818", "#eeeeee"],
    image: images.shoesFormal,
    imageLabel: "Shoes / 07",
    imagePosition: "center center",
  },
];

const jacketCoreProducts: ProductPage[] = [
  {
    page: 22,
    category: "Leather Jacket",
    name: "Stone Wall Rider",
    artNo: "EI-JK-2201",
    leatherType: "Sheep Nappa Leather",
    color: "Black",
    finish: "Soft Shine",
    description:
      "A classic rider profile with clean proportions and a strong fashion-forward presence.",
    details: ["Front zip", "Structured collar", "Modern fit"],
    palette: ["#111111", "#5d5d5d", "#efefef"],
    image: images.jacketStone,
    imageLabel: "Jacket / 01",
    imagePosition: "center center",
  },
  {
    page: 23,
    category: "Leather Jacket",
    name: "Night Street Jacket",
    artNo: "EI-JK-2202",
    leatherType: "Soft Lamb Leather",
    color: "Black",
    finish: "Smooth Matte",
    description:
      "A moodier city-driven style with an understated premium surface and sharp silhouette.",
    details: ["Urban styling", "Lightweight body", "Soft handfeel"],
    palette: ["#0f0f0f", "#676767", "#f1f1f1"],
    image: images.jacketNight,
    imageLabel: "Jacket / 02",
    imagePosition: "center center",
  },
  {
    page: 24,
    category: "Leather Jacket",
    name: "Minimal Zip Jacket",
    artNo: "EI-JK-2203",
    leatherType: "Cow Leather",
    color: "Black",
    finish: "Clean Surface",
    description:
      "Reduced detailing and a sleek line make this jacket easy to place in modern collections.",
    details: ["Minimal front", "Clean paneling", "Commercial fit"],
    palette: ["#171717", "#575757", "#f3f3f3"],
    image: images.jacketClose,
    imageLabel: "Jacket / 03",
    imagePosition: "center center",
  },
  {
    page: 24,
    category: "Leather Jacket",
    name: "Oversized Biker Jacket",
    artNo: "EI-JK-2204",
    leatherType: "Buffalo Leather",
    color: "Dark Brown",
    finish: "Worn Matte",
    description:
      "An oversized biker cut with relaxed shoulders and a raw, lived-in leather character.",
    details: ["Relaxed fit", "Zip cuffs", "Multi-pocket"],
    palette: ["#1e0e04", "#5a3018", "#f0ece8"],
    image: images.jacketStone,
    imageLabel: "Jacket / 04",
    imagePosition: "center center",
  },
  {
    page: 24,
    category: "Leather Jacket",
    name: "Racer Bomber",
    artNo: "EI-JK-2205",
    leatherType: "Nappa Leather",
    color: "Black",
    finish: "Stretch Matte",
    description:
      "A bomber silhouette with a racer collar and a clean stretch-fit leather surface.",
    details: ["Rib hem", "Front zip", "Inner lining"],
    palette: ["#0d0d0d", "#555555", "#f2f2f2"],
    image: images.jacketNight,
    imageLabel: "Jacket / 05",
    imagePosition: "center center",
  },
  {
    page: 24,
    category: "Leather Jacket",
    name: "Tailored Leather Blazer",
    artNo: "EI-JK-2206",
    leatherType: "Lamb Leather",
    color: "Black",
    finish: "Fine Grain",
    description:
      "A structured leather blazer that bridges fashion and formalwear with refined tailoring.",
    details: ["Notch lapel", "Two-button", "Fitted silhouette"],
    palette: ["#131313", "#505050", "#f3f3f3"],
    image: images.jacketClose,
    imageLabel: "Jacket / 06",
    imagePosition: "center center",
  },
  {
    page: 24,
    category: "Leather Jacket",
    name: "Moto Shirt Jacket",
    artNo: "EI-JK-2207",
    leatherType: "Washed Sheep Leather",
    color: "Olive Green",
    finish: "Washed Distressed",
    description:
      "A casual leather overshirt jacket with a relaxed moto feel and washed surface texture.",
    details: ["Shirt collar", "Chest pockets", "Drop shoulder"],
    palette: ["#2d3b1a", "#5a6e38", "#eceee8"],
    image: images.jacketStone,
    imageLabel: "Jacket / 07",
    imagePosition: "center center",
  },
];

const glovesCoreProducts: ProductPage[] = [
  {
    page: 25,
    category: "Leather Gloves",
    name: "Editorial Leather Gloves",
    artNo: "EI-GL-2501",
    leatherType: "Sheep Leather",
    color: "Black",
    finish: "Glossy Soft Finish",
    description:
      "Elegant gloves with a polished surface and a clear fashion presentation.",
    details: ["Slim shape", "Dress styling", "Smooth finish"],
    palette: ["#101010", "#4f4f4f", "#ededed"],
    image: images.glovesStudio,
    imageLabel: "Gloves / 01",
    imagePosition: "center center",
  },
  {
    page: 26,
    category: "Leather Gloves",
    name: "Studio Glove Detail",
    artNo: "EI-GL-2502",
    leatherType: "Fine Nappa Leather",
    color: "Black",
    finish: "Supple Finish",
    description:
      "Soft leather gloves with a cleaner refined look suited to premium winter accessories.",
    details: ["Soft drape", "Luxury look", "Premium touch"],
    palette: ["#0f0f0f", "#6b6b6b", "#efefef"],
    image: images.glovesDetail,
    imageLabel: "Gloves / 02",
    imagePosition: "center center",
  },
  {
    page: 27,
    category: "Leather Gloves",
    name: "Classic Dress Gloves",
    artNo: "EI-GL-2503",
    leatherType: "Goat Leather",
    color: "Black",
    finish: "Smooth Matte",
    description:
      "Classic glove styling with strong visual neatness and dependable category appeal.",
    details: ["Dress glove profile", "Neat seam finish", "Balanced structure"],
    palette: ["#111111", "#505050", "#f0f0f0"],
    image: images.glovesStudio,
    imageLabel: "Gloves / 03",
    imagePosition: "center top",
  },
  {
    page: 27,
    category: "Leather Gloves",
    name: "Lined Winter Gloves",
    artNo: "EI-GL-2504",
    leatherType: "Sheep Leather",
    color: "Dark Brown",
    finish: "Soft Suede Inner",
    description:
      "Warmly lined leather gloves with a classic outer shell and a premium interior feel.",
    details: ["Fleece lined", "Wrist snap", "Thermal comfort"],
    palette: ["#2c1a0a", "#6e4028", "#f0ece8"],
    image: images.glovesDetail,
    imageLabel: "Gloves / 04",
    imagePosition: "center center",
  },
  {
    page: 27,
    category: "Leather Gloves",
    name: "Fingerless Leather Gloves",
    artNo: "EI-GL-2505",
    leatherType: "Nappa Leather",
    color: "Black",
    finish: "Soft Matte",
    description:
      "Open-finger gloves designed for practical daily use with a contemporary edge.",
    details: ["Open fingers", "Snap wrist", "Minimal stitching"],
    palette: ["#111111", "#484848", "#f2f2f2"],
    image: images.glovesStudio,
    imageLabel: "Gloves / 05",
    imagePosition: "center center",
  },
  {
    page: 27,
    category: "Leather Gloves",
    name: "Driving Gloves",
    artNo: "EI-GL-2506",
    leatherType: "Peccary Leather",
    color: "Tan",
    finish: "Perforated Panel",
    description:
      "Heritage driving gloves with knuckle cutouts and a snug grip-fit for style and control.",
    details: ["Knuckle cutout", "Snap buckle", "Grip palm"],
    palette: ["#b08050", "#d4a870", "#f8f4ec"],
    image: images.glovesDetail,
    imageLabel: "Gloves / 06",
    imagePosition: "center center",
  },
  {
    page: 27,
    category: "Leather Gloves",
    name: "Touchscreen Gloves",
    artNo: "EI-GL-2507",
    leatherType: "Nappa Leather",
    color: "Black",
    finish: "Conductive Tip",
    description:
      "Smart leather gloves with touchscreen-compatible fingertips for seamless modern use.",
    details: ["Touch tip", "Slim fit", "Cashmere lined"],
    palette: ["#0d0d0d", "#3f3f3f", "#efefef"],
    image: images.glovesStudio,
    imageLabel: "Gloves / 07",
    imagePosition: "center center",
  },
];

const bagExtraProducts: ProductPage[] = [
  // --- Leather Bag extras ---
  {
    page: 0,
    category: "Leather Bag",
    name: "Zip-Top Tote",
    artNo: "EI-BG-608",
    leatherType: "Vegetable Tanned Leather",
    color: "Camel",
    finish: "Natural Matte",
    description:
      "A generous zip-top silhouette with a clean structure and versatile commercial profile.",
    details: ["Zip closure", "Dual carry handles", "Interior divider"],
    palette: ["#c9a97a", "#8b6340", "#f5f0e8"],
    image: images.bag8,
    imageLabel: "Bag / 08",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Bag",
    name: "Mini Frame Bag",
    artNo: "EI-BG-609",
    leatherType: "Saffiano Leather",
    color: "Black",
    finish: "Cross-Grain Texture",
    description:
      "Compact frame bag with a rigid top and snap-frame closure for clean editorial appeal.",
    details: ["Frame closure", "Chain strap", "Card slot interior"],
    palette: ["#111111", "#555555", "#eeeeee"],
    image: images.bag9,
    imageLabel: "Bag / 09",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Bag",
    name: "Box Clutch",
    artNo: "EI-BG-610",
    leatherType: "Smooth Calf Leather",
    color: "Ivory",
    finish: "Polished Smooth",
    description:
      "Structured box clutch with a push-lock closure and minimal edge stitching.",
    details: ["Push-lock closure", "Detachable strap", "Suede lining"],
    palette: ["#f0ece4", "#c8bfb0", "#7a7060"],
    image: images.bag10,
    imageLabel: "Bag / 10",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Bag",
    name: "Saddle Bag",
    artNo: "EI-BG-611",
    leatherType: "Full Grain Leather",
    color: "Cognac",
    finish: "Hand-Burnished",
    description:
      "Heritage saddle profile with a curved flap, clean stitch lines, and a contemporary crossbody strap.",
    details: ["Curved flap", "Adjustable strap", "Burnished edges"],
    palette: ["#9a6535", "#c8934f", "#f5ede0"],
    image: images.bag11,
    imageLabel: "Bag / 11",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Bag",
    name: "Drawstring Shopper",
    artNo: "EI-BG-612",
    leatherType: "Pebble Grain Leather",
    color: "Stone",
    finish: "Soft Pebble",
    description:
      "Relaxed drawstring shopper with an oversized profile and minimal branded hardware.",
    details: ["Drawstring top", "Flat base", "Large open interior"],
    palette: ["#c8c2b8", "#908880", "#f8f5f0"],
    image: images.bag12,
    imageLabel: "Bag / 12",
    imagePosition: "center center",
  },
];

const beltExtraProducts: ProductPage[] = [
  // --- Leather Belt extras ---
  {
    page: 0,
    category: "Leather Belt",
    name: "Western Stitch Belt",
    artNo: "EI-BT-1608",
    leatherType: "Full Grain Leather",
    color: "Brown",
    finish: "Saddle Wax",
    description:
      "Western-inspired belt with decorative stitching and an antique brass oval buckle.",
    details: ["Western stitching", "Oval buckle", "Edge paint"],
    palette: ["#6b4020", "#9e6535", "#f5ede0"],
    image: images.blt13,
    imageLabel: "Belt / 08",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Belt",
    name: "Slim Dress Belt",
    artNo: "EI-BT-1609",
    leatherType: "Smooth Calf Leather",
    color: "Black",
    finish: "High Polish",
    description:
      "Ultra-slim belt cut for dress suiting and formal occasions with a polished nickle buckle.",
    details: ["20mm width", "Nickel buckle", "Dress holes"],
    palette: ["#0a0a0a", "#3d3d3d", "#f0f0f0"],
    image: images.bag14,
    imageLabel: "Belt / 09",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Belt",
    name: "Braided Ring Belt",
    artNo: "EI-BT-1610",
    leatherType: "Braided Leather Strip",
    color: "Tan",
    finish: "Natural Woven",
    description:
      "Double-ring buckle belt with a hand-braided leather body and a casual relaxed silhouette.",
    details: ["Double ring", "Braided body", "No-hole adjustable"],
    palette: ["#c09060", "#e8b878", "#f8f0e0"],
    image: images.beltStyled,
    imageLabel: "Belt / 10",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Belt",
    name: "Snap Utility Belt",
    artNo: "EI-BT-1611",
    leatherType: "Buff Leather",
    color: "Dark Brown",
    finish: "Military Matt",
    description:
      "Sturdy utility belt with a snap-pin buckle designed for everyday workwear and casual dressing.",
    details: ["Snap buckle", "Wide width", "Reinforced holes"],
    palette: ["#2a1800", "#6a3c18", "#eeeeee"],
    image: images.beltBlack,
    imageLabel: "Belt / 11",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Belt",
    name: "Statement Buckle Belt",
    artNo: "EI-BT-1612",
    leatherType: "Pull-Up Leather",
    color: "Camel",
    finish: "Burnished Wax",
    description:
      "Wide fashion belt anchored by an oversized vintage-brass rectangular buckle.",
    details: ["Oversized buckle", "Wide cut", "Burnished pull-up"],
    palette: ["#c8983a", "#e8c060", "#f8f0d8"],
    image: images.beltStyled,
    imageLabel: "Belt / 12",
    imagePosition: "center center",
  },
];

const shoesExtraProducts: ProductPage[] = [
  // --- Leather Shoes extras ---
  {
    page: 0,
    category: "Leather Shoes",
    name: "Penny Loafer",
    artNo: "EI-SH-1908",
    leatherType: "Smooth Calf Leather",
    color: "Black",
    finish: "Gloss Burnish",
    description:
      "A clean penny loafer with a flat saddle and a refined round toe for professional wear.",
    details: ["Penny slot", "Leather sole", "Slip-on"],
    palette: ["#0a0a0a", "#3d3d3d", "#f0f0f0"],
    image: images.shoesBlack,
    imageLabel: "Shoes / 08",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Shoes",
    name: "Wingtip Oxford",
    artNo: "EI-SH-1909",
    leatherType: "Burnished Calf Leather",
    color: "Tan",
    finish: "Antique Burnish",
    description:
      "Classic wingtip broguing on a clean oxford last — a commercial staple for dress footwear programs.",
    details: ["Wingtip brogue", "Closed lacing", "Leather sole"],
    palette: ["#b07840", "#d4a060", "#f8f0e0"],
    image: images.shoesBrown,
    imageLabel: "Shoes / 09",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Shoes",
    name: "Slip-On Mule",
    artNo: "EI-SH-1910",
    leatherType: "Smooth Nappa Leather",
    color: "Black",
    finish: "Semi Gloss",
    description:
      "Backless slip-on mule with a low block heel and a sleek pointed toe for fashion-led collections.",
    details: ["Backless design", "Block heel", "Pointed toe"],
    palette: ["#111111", "#555555", "#eeeeee"],
    image: images.shoesFormal,
    imageLabel: "Shoes / 10",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Shoes",
    name: "Ankle Boot",
    artNo: "EI-SH-1911",
    leatherType: "Full Grain Leather",
    color: "Dark Brown",
    finish: "Matte Wax",
    description:
      "Clean ankle boot with a side zip, stacked heel, and a rounded toe for broad seasonal placement.",
    details: ["Side zip", "Stacked heel", "Leather lining"],
    palette: ["#2a1200", "#6a3818", "#eeeeee"],
    image: images.shoesSet,
    imageLabel: "Shoes / 11",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Shoes",
    name: "Platform Derby",
    artNo: "EI-SH-1912",
    leatherType: "Polished Calf Leather",
    color: "Black",
    finish: "High Gloss",
    description:
      "Fashion-forward platform derby with an exaggerated sole unit and open lacing for editorial placement.",
    details: ["Platform sole", "Open lacing", "Padded insole"],
    palette: ["#0a0a0a", "#4a4a4a", "#f0f0f0"],
    image: images.shoesBlack,
    imageLabel: "Shoes / 12",
    imagePosition: "center center",
  },
];

const walletExtraProducts: ProductPage[] = [
  // --- Leather Wallet extras ---
  {
    page: 0,
    category: "Leather Wallet",
    name: "Passport Holder",
    artNo: "EI-WL-1008",
    leatherType: "Full Grain Leather",
    color: "Tan",
    finish: "Natural Patina",
    description:
      "Travel passport holder with document pockets and a clean spine for easy passport access.",
    details: ["Passport slot", "Card pockets", "Document sleeve"],
    palette: ["#b08040", "#d4a860", "#f8f0e0"],
    image: images.walletFlatlay,
    imageLabel: "Wallet / 08",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Wallet",
    name: "Long Envelope Wallet",
    artNo: "EI-WL-1009",
    leatherType: "Smooth Calf Leather",
    color: "Black",
    finish: "Matte Finish",
    description:
      "Long envelope-style wallet with a magnetic snap closure and generous internal organization.",
    details: ["Magnetic snap", "Bill section", "8 card slots"],
    palette: ["#111111", "#4a4a4a", "#f0f0f0"],
    image: images.walletClean,
    imageLabel: "Wallet / 09",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Wallet",
    name: "Mini Card Wallet",
    artNo: "EI-WL-1010",
    leatherType: "Vegetable Tanned Leather",
    color: "Natural Tan",
    finish: "Raw Edge",
    description:
      "Minimal four-slot card wallet with a center fold and a raw edge finish for a refined artisan look.",
    details: ["4 card slots", "Center fold", "Raw edge"],
    palette: ["#c09060", "#e8b878", "#f8f0e0"],
    image: images.walletFlatlay,
    imageLabel: "Wallet / 10",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Wallet",
    name: "Key Coin Pouch",
    artNo: "EI-WL-1011",
    leatherType: "Nappa Leather",
    color: "Dark Brown",
    finish: "Soft Grain",
    description:
      "Small coin and key pouch with a ring attachment and a zip closure for compact daily carry.",
    details: ["Key ring", "Zip closure", "Coin pocket"],
    palette: ["#2a1200", "#6a3818", "#f0ece8"],
    image: images.walletClean,
    imageLabel: "Wallet / 11",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Wallet",
    name: "Trifold Wallet",
    artNo: "EI-WL-1012",
    leatherType: "Pull-Up Leather",
    color: "Cognac",
    finish: "Natural Pull-Up",
    description:
      "Classic trifold with visible pull-up aging character, ample card slots, and a coin pocket.",
    details: ["Trifold", "Coin pocket", "6 card slots"],
    palette: ["#9a6535", "#c8934f", "#f5ede0"],
    image: images.walletFlatlay,
    imageLabel: "Wallet / 12",
    imagePosition: "center center",
  },
];

const jacketExtraProducts: ProductPage[] = [
  // --- Leather Jacket extras ---
  {
    page: 0,
    category: "Leather Jacket",
    name: "Cropped Biker",
    artNo: "EI-JK-2208",
    leatherType: "Lamb Leather",
    color: "Black",
    finish: "Supple Matte",
    description:
      "A cropped biker cut sitting at the waist — directional silhouette for contemporary women's collections.",
    details: ["Cropped length", "Front zip", "Snap cuffs"],
    palette: ["#111111", "#4a4a4a", "#f0f0f0"],
    image: images.jacketClose,
    imageLabel: "Jacket / 08",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Jacket",
    name: "Double Breast Blazer",
    artNo: "EI-JK-2209",
    leatherType: "Smooth Calf Leather",
    color: "Black",
    finish: "Clean Surface",
    description:
      "Double-breasted leather blazer with wide lapels and a structured body for fashion-forward tailoring.",
    details: ["DB closure", "Wide lapel", "Structured body"],
    palette: ["#131313", "#505050", "#f3f3f3"],
    image: images.jacketStone,
    imageLabel: "Jacket / 09",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Jacket",
    name: "Shearling Trim Jacket",
    artNo: "EI-JK-2210",
    leatherType: "Sheep Leather",
    color: "Dark Brown",
    finish: "Shearling Interior",
    description:
      "Rider jacket with shearling collar trim and cuff lining for a premium winter-season profile.",
    details: ["Shearling trim", "Warm lining", "Zip front"],
    palette: ["#1e0e04", "#5a3018", "#f0ece8"],
    image: images.jacketNight,
    imageLabel: "Jacket / 10",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Jacket",
    name: "Band Collar Jacket",
    artNo: "EI-JK-2211",
    leatherType: "Cow Leather",
    color: "Black",
    finish: "Washed Matte",
    description:
      "Band-collar zip jacket with clean paneling and a relaxed contemporary fit for modern streetwear.",
    details: ["Band collar", "Washed finish", "Relaxed fit"],
    palette: ["#171717", "#575757", "#f3f3f3"],
    image: images.jacketClose,
    imageLabel: "Jacket / 11",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Jacket",
    name: "Zip Field Jacket",
    artNo: "EI-JK-2212",
    leatherType: "Buffalo Leather",
    color: "Olive",
    finish: "Military Wax",
    description:
      "Field-style leather jacket with cargo pockets and a military wax finish for a utility edge.",
    details: ["Cargo pockets", "Military finish", "Straight hem"],
    palette: ["#2d3b1a", "#5a6e38", "#eceee8"],
    image: images.jacketStone,
    imageLabel: "Jacket / 12",
    imagePosition: "center center",
  },
];

const glovesExtraProducts: ProductPage[] = [
  // --- Leather Gloves extras ---
  {
    page: 0,
    category: "Leather Gloves",
    name: "Long Opera Gloves",
    artNo: "EI-GL-2508",
    leatherType: "Fine Nappa Leather",
    color: "Black",
    finish: "Glossy Silk Finish",
    description:
      "Elbow-length opera gloves in fine nappa for editorial fashion shoots and evening-wear collections.",
    details: ["Elbow length", "Silk lining", "Dress styling"],
    palette: ["#0d0d0d", "#3f3f3f", "#efefef"],
    image: images.glovesStudio,
    imageLabel: "Gloves / 08",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Gloves",
    name: "Half Finger Gloves",
    artNo: "EI-GL-2509",
    leatherType: "Nappa Leather",
    color: "Dark Brown",
    finish: "Soft Matte",
    description:
      "Open-finger gloves with knuckle cutouts and a padded palm for practical urban use.",
    details: ["Half finger", "Padded palm", "Adjustable wrist"],
    palette: ["#2c1a0a", "#6e4028", "#f0ece8"],
    image: images.glovesDetail,
    imageLabel: "Gloves / 09",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Gloves",
    name: "Padded Moto Gloves",
    artNo: "EI-GL-2510",
    leatherType: "Cowhide Leather",
    color: "Black",
    finish: "Textured Surface",
    description:
      "Moto-inspired gloves with knuckle padding and a wrist strap for a strong utilitarian presence.",
    details: ["Knuckle pad", "Wrist strap", "Textured back"],
    palette: ["#111111", "#484848", "#f2f2f2"],
    image: images.glovesStudio,
    imageLabel: "Gloves / 10",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Gloves",
    name: "Shearling Cuff Gloves",
    artNo: "EI-GL-2511",
    leatherType: "Sheep Leather",
    color: "Tan",
    finish: "Shearling Cuff",
    description:
      "Warm winter gloves with an oversized shearling cuff and a snug fitted palm.",
    details: ["Shearling cuff", "Fleece lined", "Snap close"],
    palette: ["#c09060", "#e8b878", "#f8f0e0"],
    image: images.glovesDetail,
    imageLabel: "Gloves / 11",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Gloves",
    name: "Ruched Detail Gloves",
    artNo: "EI-GL-2512",
    leatherType: "Goat Leather",
    color: "Black",
    finish: "Ruched Surface",
    description:
      "Feminine ruched-back gloves with a gathered leather detail and a slim wrist silhouette.",
    details: ["Ruched back", "Slim wrist", "Dress length"],
    palette: ["#0f0f0f", "#4a4a4a", "#eeeeee"],
    image: images.glovesStudio,
    imageLabel: "Gloves / 12",
    imagePosition: "center center",
  },
];

const bagTailProducts: ProductPage[] = [
  // extra 3 per category to reach 15
  {
    page: 0,
    category: "Leather Bag",
    name: "Hobo Shoulder Bag",
    artNo: "EI-BG-613",
    leatherType: "Soft Pebble Leather",
    color: "Caramel",
    finish: "Pebble Matte",
    description:
      "Slouchy hobo silhouette with a single shoulder strap and an unstructured interior for relaxed daily use.",
    details: ["Single strap", "Magnetic snap", "Unstructured body"],
    palette: ["#c8934f", "#e8b878", "#f8f0e0"],
    image: images.bag13,
    imageLabel: "Bag / 13",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Bag",
    name: "Convertible Backpack",
    artNo: "EI-BG-614",
    leatherType: "Full Grain Leather",
    color: "Dark Brown",
    finish: "Wax Finish",
    description:
      "Versatile backpack that converts to a shoulder carry, built for commercial travel and weekend use.",
    details: ["Convertible straps", "Laptop sleeve", "Zip pockets"],
    palette: ["#2a1200", "#6a3818", "#f0ece8"],
    image: images.bag14,
    imageLabel: "Bag / 14",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Bag",
    name: "Mini Crossbody",
    artNo: "EI-BG-615",
    leatherType: "Smooth Nappa Leather",
    color: "Black",
    finish: "Gloss Smooth",
    description:
      "Compact mini crossbody with a chain strap and a polished flap closure for evening or day use.",
    details: ["Chain strap", "Flap closure", "Card slot"],
    palette: ["#111111", "#4a4a4a", "#eeeeee"],
    image: images.bag15,
    imageLabel: "Bag / 15",
    imagePosition: "center center",
  },
];

const walletTailProducts: ProductPage[] = [
  {
    page: 0,
    category: "Leather Wallet",
    name: "Phone Wallet Case",
    artNo: "EI-WL-1013",
    leatherType: "Full Grain Leather",
    color: "Black",
    finish: "Matte Clean",
    description:
      "Slim leather phone wallet case with card slots and a magnetic closure for everyday minimal carry.",
    details: ["Phone slot", "3 card slots", "Magnetic close"],
    palette: ["#111111", "#4a4a4a", "#eeeeee"],
    image: images.walletClean,
    imageLabel: "Wallet / 13",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Wallet",
    name: "Checkbook Wallet",
    artNo: "EI-WL-1014",
    leatherType: "Cowhide Leather",
    color: "Cognac",
    finish: "Natural Grain",
    description:
      "Long checkbook wallet with a snap closure and organized interior for financial documents and cards.",
    details: ["Checkbook pocket", "Snap close", "6 card slots"],
    palette: ["#9a6535", "#c8934f", "#f5ede0"],
    image: images.walletFlatlay,
    imageLabel: "Wallet / 14",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Wallet",
    name: "Secretary Wallet",
    artNo: "EI-WL-1015",
    leatherType: "Vegetable Tanned Leather",
    color: "Tan",
    finish: "Dry Matte",
    description:
      "Large secretary-style wallet with a fold-over flap, bill section, and ample card storage.",
    details: ["Fold-over flap", "Bill section", "8+ slots"],
    palette: ["#b08040", "#d4a860", "#f8f0e0"],
    image: images.walletClean,
    imageLabel: "Wallet / 15",
    imagePosition: "center center",
  },
];

const beltTailProducts: ProductPage[] = [
  {
    page: 0,
    category: "Leather Belt",
    name: "Perforated Belt",
    artNo: "EI-BT-1613",
    leatherType: "Smooth Calf Leather",
    color: "Black",
    finish: "Perforated Panel",
    description:
      "Clean belt with a perforated panel pattern and a polished pin buckle for a fresh contemporary feel.",
    details: ["Perforated detail", "Pin buckle", "Even width"],
    palette: ["#0a0a0a", "#3d3d3d", "#f0f0f0"],
    image: images.beltBlack,
    imageLabel: "Belt / 13",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Belt",
    name: "Stitch Accent Belt",
    artNo: "EI-BT-1614",
    leatherType: "Full Grain Leather",
    color: "Brown",
    finish: "Contrast Stitch",
    description:
      "Wide belt with a contrasting topstitch accent and a solid brass square buckle for a bold everyday look.",
    details: ["Contrast stitch", "Square buckle", "Wide cut"],
    palette: ["#6b4020", "#9e6535", "#f5ede0"],
    image: images.beltStyled,
    imageLabel: "Belt / 14",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Belt",
    name: "Double Grommet Belt",
    artNo: "EI-BT-1615",
    leatherType: "Buff Leather",
    color: "Black",
    finish: "Matte Military",
    description:
      "Punk-inspired double grommet belt with a matte surface and an oversized pin buckle for fashion-forward styling.",
    details: ["Double grommets", "Oversized buckle", "Fashion cut"],
    palette: ["#111111", "#555555", "#eeeeee"],
    image: images.beltBlack,
    imageLabel: "Belt / 15",
    imagePosition: "center center",
  },
];

const shoesTailProducts: ProductPage[] = [
  {
    page: 0,
    category: "Leather Shoes",
    name: "Tassel Loafer",
    artNo: "EI-SH-1913",
    leatherType: "Smooth Calf Leather",
    color: "Dark Brown",
    finish: "Semi Gloss",
    description:
      "Heritage tassel loafer with a leather tassel trim and a clean last for smart casual dressing.",
    details: ["Tassel trim", "Slip-on", "Leather sole"],
    palette: ["#2a1200", "#6a3818", "#eeeeee"],
    image: images.shoesBlack,
    imageLabel: "Shoes / 13",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Shoes",
    name: "Side-Zip Boot",
    artNo: "EI-SH-1914",
    leatherType: "Burnished Calf Leather",
    color: "Cognac",
    finish: "Hand Burnished",
    description:
      "Sleek side-zip ankle boot with a tapered toe and a stacked block heel for refined everyday wear.",
    details: ["Side zip", "Block heel", "Tapered toe"],
    palette: ["#9a6535", "#c8934f", "#f5ede0"],
    image: images.shoesBrown,
    imageLabel: "Shoes / 14",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Shoes",
    name: "Square Toe Mule",
    artNo: "EI-SH-1915",
    leatherType: "Smooth Nappa Leather",
    color: "Black",
    finish: "Polished Matte",
    description:
      "Contemporary square-toe mule with a low kitten heel and a clean backless silhouette for fashion collections.",
    details: ["Square toe", "Kitten heel", "Backless"],
    palette: ["#111111", "#4a4a4a", "#eeeeee"],
    image: images.shoesFormal,
    imageLabel: "Shoes / 15",
    imagePosition: "center center",
  },
];

const jacketTailProducts: ProductPage[] = [
  {
    page: 0,
    category: "Leather Jacket",
    name: "Belted Trench Jacket",
    artNo: "EI-JK-2213",
    leatherType: "Smooth Calf Leather",
    color: "Camel",
    finish: "Polished Smooth",
    description:
      "Structured leather trench with a self-tie belt, wide lapels, and a clean mid-length silhouette.",
    details: ["Self-tie belt", "Wide lapel", "Mid length"],
    palette: ["#c8984a", "#e8b878", "#f8f0e0"],
    image: images.jacketClose,
    imageLabel: "Jacket / 13",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Jacket",
    name: "Collarless Blazer",
    artNo: "EI-JK-2214",
    leatherType: "Lamb Leather",
    color: "Black",
    finish: "Supple Matte",
    description:
      "Minimal collarless leather blazer with a clean placket and a relaxed refined silhouette.",
    details: ["No collar", "Button placket", "Relaxed fit"],
    palette: ["#111111", "#505050", "#f3f3f3"],
    image: images.jacketStone,
    imageLabel: "Jacket / 14",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Jacket",
    name: "Quilted Leather Jacket",
    artNo: "EI-JK-2215",
    leatherType: "Nappa Leather",
    color: "Black",
    finish: "Diamond Quilt",
    description:
      "Diamond-quilted leather jacket with a zip front and a padded feel for a bold statement outerwear look.",
    details: ["Diamond quilt", "Zip front", "Padded look"],
    palette: ["#131313", "#4a4a4a", "#f0f0f0"],
    image: images.jacketNight,
    imageLabel: "Jacket / 15",
    imagePosition: "center center",
  },
];

const glovesTailProducts: ProductPage[] = [
  {
    page: 0,
    category: "Leather Gloves",
    name: "Wrist Strap Gloves",
    artNo: "EI-GL-2513",
    leatherType: "Nappa Leather",
    color: "Black",
    finish: "Soft Smooth",
    description:
      "Sleek gloves with an adjustable wrist strap and a clean minimal silhouette for everyday urban use.",
    details: ["Wrist strap", "Minimal seam", "Snug fit"],
    palette: ["#111111", "#484848", "#f2f2f2"],
    image: images.glovesDetail,
    imageLabel: "Gloves / 13",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Gloves",
    name: "Lined Riding Gloves",
    artNo: "EI-GL-2514",
    leatherType: "Cowhide Leather",
    color: "Dark Brown",
    finish: "Structured Grip",
    description:
      "Equestrian-inspired riding gloves with a structured grip palm and a knuckle roll for a heritage look.",
    details: ["Grip palm", "Knuckle roll", "Lined interior"],
    palette: ["#2c1a0a", "#6e4028", "#f0ece8"],
    image: images.glovesStudio,
    imageLabel: "Gloves / 14",
    imagePosition: "center center",
  },
  {
    page: 0,
    category: "Leather Gloves",
    name: "Knit Back Gloves",
    artNo: "EI-GL-2515",
    leatherType: "Sheep Leather",
    color: "Black",
    finish: "Knit Panel Back",
    description:
      "Hybrid gloves combining a smooth leather palm with a stretch knit back panel for comfort and flexibility.",
    details: ["Knit back", "Leather palm", "Stretch fit"],
    palette: ["#0d0d0d", "#3a3a3a", "#efefef"],
    image: images.glovesDetail,
    imageLabel: "Gloves / 15",
    imagePosition: "center center",
  },
];

const productCollections = {
  "Leather Bag": [...bagCoreProducts, ...bagExtraProducts, ...bagTailProducts],
  "Leather Wallet": [
    ...walletCoreProducts,
    ...walletExtraProducts,
    ...walletTailProducts,
  ],
  "Leather Belt": [
    ...beltCoreProducts,
    ...beltExtraProducts,
    ...beltTailProducts,
  ],
  "Leather Shoes": [
    ...shoesCoreProducts,
    ...shoesExtraProducts,
    ...shoesTailProducts,
  ],
  "Leather Jacket": [
    ...jacketCoreProducts,
    ...jacketExtraProducts,
    ...jacketTailProducts,
  ],
  "Leather Gloves": [
    ...glovesCoreProducts,
    ...glovesExtraProducts,
    ...glovesTailProducts,
  ],
} satisfies Record<ProductCategory, ProductPage[]>;

const whyChooseUs = [
  "Low MOQ support for focused seasonal drops and private label programs.",
  "Reliable development with clean presentation and consistent finish control.",
  "Balanced pricing for premium-looking leather goods with practical scalability.",
  "Design language that feels minimal, modern, and commercially adaptable.",
];

const contactDetails = [
  "Proprietor: Mr. Kamal Aktar",
  "Phone: +91 9564117600",
  "Mail: info@euro-intl.com",
  "Mail: dev.eurointarnational@gmail.com",
  "Office: Block-A, 1st Floor, 4A, G.J. Khan Road, Kolkata-700039, West Bengal, India",
  "Workshop: Plot 1603, Zone-9, K.L.C, South 24 Pargana-743502, West Bengal, India",
];

function TinySquares() {
  return (
    <div className="flex items-center gap-1">
      <span className="h-1.5 w-1.5 bg-black" />
      <span className="h-1.5 w-1.5 bg-black/35" />
      <span className="h-1.5 w-1.5 bg-black/15" />
    </div>
  );
}

function PageShell({
  page,
  bg = "#ffffff",
  children,
}: {
  page: number;
  bg?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="catalogue-page relative overflow-hidden px-[1.6rem] py-[1.2rem] text-[#111]"
      style={{ backgroundColor: bg }}
    >
      <div className="flex items-center justify-between text-[0.72rem] uppercase tracking-[0.28em] text-black/55">
        <span>EURO INTERNATIONAL</span>
        <span>catalogue</span>
      </div>
      <div className="mt-3 h-px bg-black/10" />
      <div className="relative h-[calc(100%-3.5rem)]">{children}</div>
      <div className="absolute inset-x-[1.6rem] bottom-[1rem] flex items-center justify-between text-[0.72rem] uppercase tracking-[0.28em] text-black/50">
        <span>2025 / 2026</span>
        <span>{String(page).padStart(2, "0")}</span>
      </div>
    </section>
  );
}

function EditorialImage({
  src,
  alt,
  label,
  position = "center center",
  ratio = "square",
}: {
  src: string;
  alt: string;
  label: string;
  position?: string;
  ratio?: "square" | "portrait" | "wide";
}) {
  const frameRatio =
    ratio === "portrait"
      ? "aspect-[4/5]"
      : ratio === "wide"
        ? "aspect-[16/10]"
        : "aspect-square";

  return (
    <div className="relative">
      <div className={`relative overflow-hidden bg-[#f1f1f1] ${frameRatio}`}>
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes="(max-width: 900px) 100vw, 50vw"
          className="object-cover grayscale-8"
          style={{ objectPosition: position }}
        />
        <div className="pointer-events-none absolute inset-0 border border-black/5" />
        <div className="absolute bottom-3 left-3 flex items-center gap-3">
          <div className="h-1 bg-white/90 w-12" />
          <TinySquares />
        </div>
        <p
          className="absolute bottom-3 right-3 text-[0.58rem] uppercase tracking-[0.24em] text-black/55"
          style={{ writingMode: "vertical-rl" }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

function CoverPage() {
  return (
    <PageShell page={1}>
      <div className="grid h-full grid-cols-[58%_1fr] gap-5 px-[8%] pb-8 pt-4">
        {/* Left: contained building image */}
        <div className="relative overflow-hidden bg-[#f2f2f0]">
          <Image
            src={images.cover}
            alt="EURO INTERNATIONAL"
            fill
            unoptimized
            sizes="210mm"
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </div>

        {/* Right: typography panel */}
        <div className="flex flex-col justify-between py-2">
          <div>
            <p className="text-[0.64rem] uppercase tracking-[0.34em] text-black/38">
              Leather Goods
            </p>
            <h1
              className="mt-3 uppercase leading-[0.85] text-black/88"
              style={{
                fontFamily: bodoniModa.style.fontFamily,
                fontSize: "4.8rem",
              }}
            >
              cata
              <br />
              logue
            </h1>
          </div>

          <div className="space-y-3">
            <div className="h-px bg-black/12" />
            <p
              className="uppercase tracking-[0.16em] text-black/68 leading-[1.6]"
              style={{
                fontFamily: bodoniModa.style.fontFamily,
                fontSize: "0.82rem",
              }}
            >
              Euro
              <br />
              International
            </p>
            <div className="h-px bg-black/8" />
            <div className="space-y-1">
              <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/36">
                Volume 01 · 2025 / 2026
              </p>
              <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/28">
                www.euro-intl.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function SummaryPage() {
  const allEntries = summarySections.flatMap((section) => section.items);
  const collectionCount = allEntries.filter((item) =>
    item.title.includes("Collection"),
  ).length;

  return (
    <PageShell page={2}>
      <div className="grid h-full grid-cols-[0.92fr_1.08fr] gap-6 pb-8 pt-5">
        <div className="flex h-full flex-col">
          <div className="relative overflow-hidden bg-[#f2f1ed] px-5 py-5">
            <div className="absolute inset-y-0 right-0 w-[32%] bg-linear-to-l from-black/[0.04] to-transparent" />
            <div className="relative">
              <p className="text-[0.64rem] uppercase tracking-[0.34em] text-black/38">
                Table of Contents
              </p>
              <h2
                className="mt-3 uppercase leading-[0.88] text-black/88"
                style={{
                  fontFamily: bodoniModa.style.fontFamily,
                  fontSize: "4rem",
                }}
              >
                Contents
              </h2>
              <div className="mt-5 h-px bg-black/10" />
              <p className="mt-4 max-w-[92%] text-[0.7rem] leading-[1.85] text-black/46">
                A quick guide through the brand story, leather categories, and
                contact details presented in this volume.
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-[#f7f6f2] px-4 py-4">
              <p className="text-[0.52rem] uppercase tracking-[0.28em] text-black/34">
                Sections
              </p>
              <p
                className="mt-2 text-black/88"
                style={{
                  fontFamily: bodoniModa.style.fontFamily,
                  fontSize: "1.9rem",
                }}
              >
                {String(allEntries.length).padStart(2, "0")}
              </p>
            </div>
            <div className="bg-[#ece9e2] px-4 py-4">
              <p className="text-[0.52rem] uppercase tracking-[0.28em] text-black/34">
                Collections
              </p>
              <p
                className="mt-2 text-black/88"
                style={{
                  fontFamily: bodoniModa.style.fontFamily,
                  fontSize: "1.9rem",
                }}
              >
                {String(collectionCount).padStart(2, "0")}
              </p>
            </div>
          </div>

          <div className="mt-4 min-h-0 flex-1">
            <div className="relative h-full overflow-hidden bg-[#f0efec]">
              <Image
                src={images.bagStudio}
                alt="Leather goods editorial display"
                fill
                unoptimized
                sizes="(max-width: 900px) 100vw, 34vw"
                className="object-cover grayscale-8"
                style={{ objectPosition: "center center" }}
              />
              <div className="pointer-events-none absolute inset-0 border border-black/5" />
              <div className="absolute bottom-3 left-3 flex items-center gap-3">
                <div className="h-1 w-12 bg-white/90" />
                <TinySquares />
              </div>
              <p
                className="absolute bottom-3 right-3 text-[0.58rem] uppercase tracking-[0.24em] text-black/55"
                style={{ writingMode: "vertical-rl" }}
              >
                Catalogue / Edit
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-black/36">
                Euro International
              </p>
              <p className="mt-1 text-[0.66rem] text-black/42">
                Leather Goods Catalogue · Volume 01 · 2025 / 2026
              </p>
            </div>
            <TinySquares />
          </div>
        </div>

        <div className="flex h-full min-h-0 flex-col">
          <div
            className="grid flex-1 min-h-0 gap-3"
            style={{
              gridTemplateRows: "minmax(0, 1fr) minmax(0, 1fr) auto",
            }}
          >
            {summarySections.map((section, index) => (
              <section
                key={section.title}
                className={`flex min-h-0 flex-col justify-between border border-black/8 px-4 py-4 ${
                  index === 1 ? "bg-[#f1efea]" : "bg-[#f8f7f4]"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[0.5rem] uppercase tracking-[0.3em] text-black/34">
                        {section.eyebrow}
                      </p>
                      <h3
                        className="mt-2 uppercase leading-[0.95] text-black/86"
                        style={{
                          fontFamily: bodoniModa.style.fontFamily,
                          fontSize: "1.22rem",
                        }}
                      >
                        {section.title}
                      </h3>
                    </div>
                    <span className="text-[0.5rem] uppercase tracking-[0.28em] text-black/36">
                      {String(section.items.length).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-3 max-w-[96%] text-[0.62rem] leading-[1.65] text-black/44">
                    {section.description}
                  </p>
                </div>

                <div className="mt-4 divide-y divide-black/8">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-baseline justify-between gap-3 py-2.5"
                    >
                      <p className="text-[0.72rem] uppercase tracking-[0.12em] text-black/70">
                        {item.title}
                      </p>
                      <span className="shrink-0 text-[0.58rem] uppercase tracking-[0.24em] text-black/36">
                        {item.page}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-3 flex items-end justify-between px-1">
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/30">
              www.euro-intl.com
            </p>
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/30">
              Leather Goods
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function AboutPage() {
  return (
    <PageShell page={aboutPage.page}>
      <div className="grid h-full grid-cols-[1.02fr_0.98fr] gap-6 pb-8 pt-5">
        <div className="flex h-full flex-col">
          <div className="relative min-h-0 flex-1 overflow-hidden bg-[#f1efea]">
            <Image
              src={aboutPage.image}
              alt="EURO INTERNATIONAL"
              fill
              unoptimized
              sizes="(max-width: 900px) 100vw, 36vw"
              className="object-cover grayscale-8"
              style={{ objectPosition: "center center" }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/12 to-transparent" />
            <div className="absolute inset-[5%] border border-white/30" />

            <div className="absolute left-[8%] right-[8%] top-[8%] flex items-start justify-between text-[0.6rem] uppercase tracking-[0.3em] text-white/70">
              <span>The Company</span>
              <span>Since 1999</span>
            </div>

            <div className="absolute bottom-[9%] left-[8%] right-[8%]">
              <p className="text-[0.6rem] uppercase tracking-[0.32em] text-white/55">
                Leather Goods Export House
              </p>
              <h2
                className="mt-3 max-w-[88%] uppercase leading-[0.92] tracking-[-0.03em] text-white/92"
                style={{
                  fontFamily: bodoniModa.style.fontFamily,
                  fontSize: "2.85rem",
                }}
              >
                Euro
                <br />
                International
              </h2>

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-white/80" />
                  <TinySquares />
                </div>
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/64">
                  Kolkata, India
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between bg-[#f5f3ef] px-4 py-3">
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-black/36">
              www.euro-intl.com
            </p>
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-black/36">
              Export House Since 1999
            </p>
          </div>
        </div>

        <div className="flex h-full flex-col justify-between">
          <div className="bg-[#f7f6f2] px-5 py-5">
            <p className="text-[0.64rem] uppercase tracking-[0.34em] text-black/38">
              About Us
            </p>
            <h3
              className="mt-3 uppercase leading-[0.94] text-black/86"
              style={{
                fontFamily: bodoniModa.style.fontFamily,
                fontSize: "1.9rem",
              }}
            >
              Clean Presentation.
              <br />
              Dependable Production.
            </h3>
            <div className="mt-5 h-px bg-black/10" />
            <div className="mt-5 space-y-4 text-[0.78rem] leading-[1.8] text-black/50">
              {aboutPage.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="bg-[#efebe4] px-4 py-4">
              <p className="text-[0.5rem] uppercase tracking-[0.28em] text-black/34">
                Base
              </p>
              <p
                className="mt-2 uppercase leading-[1.1] text-black/84"
                style={{
                  fontFamily: bodoniModa.style.fontFamily,
                  fontSize: "1.1rem",
                }}
              >
                Kolkata
                <br />
                India
              </p>
            </div>
            <div className="bg-[#f2f0eb] px-4 py-4">
              <p className="text-[0.5rem] uppercase tracking-[0.28em] text-black/34">
                Focus
              </p>
              <p
                className="mt-2 uppercase leading-[1.1] text-black/84"
                style={{
                  fontFamily: bodoniModa.style.fontFamily,
                  fontSize: "1.1rem",
                }}
              >
                Leather
                <br />
                Collections
              </p>
            </div>
          </div>

          <div className="mt-3 border border-black/8 bg-[#fbfaf7] px-5 py-4">
            <div className="flex items-center justify-between">
              <p className="text-[0.5rem] uppercase tracking-[0.3em] text-black/36">
                Brand Note
              </p>
              <TinySquares />
            </div>
            <p className="mt-3 text-[0.7rem] leading-[1.75] text-black/48">
              We build commercially strong leather goods with a visual language
              that feels modern, minimal, and presentation-ready for buyers.
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between px-1">
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/30">
              The Company
            </p>
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/30">
              Leather Goods Catalogue
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function IntroSection(page: IntroPage) {
  const imageOnRight = page.page % 2 === 0;

  return (
    <PageShell page={page.page}>
      <div className="h-full px-[8%] pb-12 pt-8">
        <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.3em] text-black/48">
          <span>www.euro-intl.com</span>
          <span>catalogue</span>
        </div>

        <h2 className="catalogue-display mt-10 text-[3.4rem] leading-none tracking-[0.02em] text-black/88">
          {page.title.toUpperCase()}
        </h2>

        {page.slogan && (
          <p
            className="mt-3 text-[0.95rem] italic leading-[1.5] text-black/50"
            style={{
              fontFamily:
                '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
            }}
          >
            {page.slogan}
          </p>
        )}

        <div
          className={`mt-8 grid items-center gap-x-8 ${
            imageOnRight ? "grid-cols-[1fr_auto]" : "grid-cols-[auto_1fr]"
          }`}
        >
          <div className={imageOnRight ? "order-1" : "order-2"}>
            <div className="relative w-[72%] bg-[#f2f2f0]">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={page.image}
                  alt={page.title}
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 30vw"
                  className="object-cover grayscale-6"
                  style={{
                    objectPosition: page.imagePosition ?? "center center",
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className={
              imageOnRight
                ? "order-2 flex items-center gap-4"
                : "order-1 flex items-center gap-4 justify-end"
            }
          >
            {!imageOnRight && (
              <p
                className="text-[0.84rem] uppercase tracking-[0.28em] text-black/54"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                {page.label}
              </p>
            )}
            <TinySquares />
            {imageOnRight && (
              <p
                className="text-[0.84rem] uppercase tracking-[0.28em] text-black/54"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                {page.label}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-black/52">
            {page.imageLabel}
          </p>
          <span className="h-2.5 w-2.5 bg-black/85" />
        </div>

        <div
          className={`mt-8 max-w-[62%] space-y-4 text-[0.92rem] leading-[1.8] text-black/46 ${
            imageOnRight ? "ml-[27%]" : "mr-[27%]"
          }`}
        >
          {page.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function CollectionOpenerPage(opener: CollectionOpener) {
  return (
    <PageShell page={opener.page}>
      <div className="relative h-full overflow-hidden">
        {/* Full-bleed background image */}
        <Image
          src={opener.image}
          alt={`${opener.category} collection`}
          fill
          unoptimized
          sizes="210mm"
          className="object-cover"
          style={{ objectPosition: opener.imagePosition ?? "center center" }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/30" />
        <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />

        {/* Inset border accent */}
        <div className="absolute inset-[4%] border border-white/25 z-10" />

        {/* Top-left: collection title */}
        <div className="absolute left-[8%] top-[8%] z-20">
          <h2
            className="uppercase text-white/92 leading-[0.88] tracking-[-0.01em]"
            style={{
              fontFamily: bodoniModa.style.fontFamily,
              fontSize: "6rem",
            }}
          >
            {opener.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-3 text-[0.66rem] uppercase tracking-[0.36em] text-white/50">
            Collection
          </p>
        </div>

        {/* Top-right label */}
        <div className="absolute right-[8%] top-[8%] z-20 text-right text-[0.68rem] uppercase tracking-[0.34em] text-white/60">
          EURO
          <br />
          INTERNATIONAL
        </div>

        {/* Bottom corner labels */}
        <div className="absolute left-[8%] bottom-[8%] z-20 text-[0.68rem] uppercase tracking-[0.32em] text-white/55">
          2025 / 2026
        </div>
        <div className="absolute right-[8%] bottom-[8%] z-20 text-[0.68rem] uppercase tracking-[0.32em] text-white/55">
          {opener.category}
        </div>
      </div>
    </PageShell>
  );
}

function ProductSectionOneUp({
  page,
  items,
}: {
  page: number;
  items: ProductPage[];
}) {
  const item = items[0];

  return (
    <PageShell page={page}>
      <div className="h-full px-[8%] pb-12 pt-8">
        <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.3em] text-black/48">
          <span>www.euro-intl.com</span>
          <span>catalogue name</span>
        </div>

        <div className="mt-6 grid h-[84%] grid-cols-[48%_1fr] gap-4">
          <div className="flex h-full flex-col gap-4">
            <div className="relative min-h-0 flex-1 overflow-hidden bg-[#f3f3f1]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                unoptimized
                sizes="(max-width: 900px) 100vw, 28vw"
                className="object-cover grayscale-8"
                style={{
                  objectPosition: item.imagePosition ?? "center center",
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden bg-[#f3f3f1]">
                <Image
                  src={item.image}
                  alt={`${item.name} detail 1`}
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 14vw"
                  className="object-cover grayscale-10"
                  style={{ objectPosition: "left center" }}
                />
              </div>
              <div className="relative aspect-square overflow-hidden bg-[#f3f3f1]">
                <Image
                  src={item.image}
                  alt={`${item.name} detail 2`}
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 14vw"
                  className="object-cover grayscale-10"
                  style={{ objectPosition: "right center" }}
                />
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col">
            <div className="relative aspect-square w-full flex-shrink-0 overflow-hidden bg-[#f3f3f1]">
              <Image
                src={item.image}
                alt={`${item.name} detail`}
                fill
                unoptimized
                sizes="(max-width: 900px) 100vw, 26vw"
                className="object-cover grayscale-8"
                style={{ objectPosition: "center top" }}
              />
            </div>

            <div className="mt-4 flex-1 pt-0">
              <h3
                className="text-[1.8rem] uppercase leading-[1.12] tracking-[0.07em] text-black/84"
                style={{
                  fontFamily:
                    '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
                }}
              >
                {item.name}
              </h3>

              <p className="mt-3 max-w-[94%] text-[0.7rem] leading-[1.72] text-black/44">
                {item.description}
              </p>

              <div className="mt-4 text-[0.74rem] uppercase tracking-[0.22em]">
                <span className="text-black/76">{item.artNo}</span>
                {"  "}
                <span className="text-black/42">{item.leatherType}</span>
              </div>

              <div className="mt-5">
                <p className="text-[0.6rem] uppercase tracking-[0.26em] text-black/46">
                  Description
                </p>
                <p className="mt-2 max-w-[92%] text-[0.74rem] leading-[1.7] text-black/44">
                  {item.description}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-[0.6rem] uppercase tracking-[0.26em] text-black/46">
                  Option
                </p>
                <p className="mt-2 text-[0.74rem] leading-[1.7] text-black/44">
                  {item.details.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// for showing 1 product as a hero product
function ProductSection({
  page,
  items,
  imgs,
}: {
  page: number;
  items: ProductPage[];
  imgs?: string[];
  collectionName?: string;
}) {
  const hero = items[0];
  const heroImg = imgs?.[0] ?? hero.image;

  return (
    <PageShell page={page}>
      <div className="relative h-full overflow-hidden">
        {/* Full-bleed product image */}
        <Image
          src={heroImg}
          alt={hero.name}
          fill
          unoptimized
          sizes="210mm"
          className="object-cover"
          style={{ objectPosition: hero.imagePosition ?? "center center" }}
        />

        {/* Light wash from top so dark text stays readable */}
        <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/50 to-transparent" />

        {/* Inset border accent */}
        <div className="absolute inset-[4%] z-10 border border-black/10" />

        {/* Product details — top-left */}
        <div className="absolute left-[8%] right-[8%] top-[8%] z-20">
          {/* Category + art no row */}
          <div className="flex items-center justify-between">
            <p className="text-[0.64rem] uppercase tracking-[0.34em] text-black/42">
              {hero.category}
            </p>
            <p className="text-[0.64rem] uppercase tracking-[0.34em] text-black/42">
              {hero.artNo}
            </p>
          </div>

          {/* Product name */}
          <h3
            className="mt-3 uppercase leading-[0.88] text-black/88"
            style={{
              fontFamily: bodoniModa.style.fontFamily,
              fontSize: "4rem",
            }}
          >
            {hero.name}
          </h3>

          {/* Description */}
          <p className="mt-3 max-w-[62%] text-[0.7rem] leading-[1.75] text-black/50">
            {hero.description}
          </p>

          {/* Specs row */}
          <div className="mt-5 flex gap-8 text-[0.62rem] uppercase tracking-[0.26em]">
            {[
              { label: "Leather", value: hero.leatherType },
              { label: "Colour", value: hero.color },
              { label: "Finish", value: hero.finish },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-black/32">{label}</p>
                <p className="mt-0.5 text-black/62">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}

//for showing 2 products
function ProductSectionTwoUp({
  page,
  items,
  variant = "a",
}: {
  page: number;
  items: ProductPage[];
  variant?: "a" | "b";
}) {
  return (
    <PageShell page={page}>
      <div className="h-full px-[8%] pb-12 pt-8">
        <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.3em] text-black/48">
          <span>www.euro-intl.com</span>
          <span></span>
        </div>

        <div
          className={`mt-6 grid grid-cols-2 gap-8 ${
            variant === "a" ? "h-[98%]" : "h-[88%] items-start"
          }`}
        >
          {items.map((item) => (
            <article key={item.artNo} className="flex flex-col">
              {variant === "a" ? (
                <>
                  <div className="relative bg-[#f3f3f1] h-[75%]">
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized
                        sizes="(max-width: 900px) 100vw, 28vw"
                        className="object-cover grayscale-8"
                        style={{
                          objectPosition: item.imagePosition ?? "center center",
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3
                      className="text-[1.1rem] uppercase leading-[1.15] tracking-[0.08em] text-black/82"
                      style={{
                        fontFamily:
                          '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
                      }}
                    >
                      {item.artNo} | {item.name}
                    </h3>

                    <div className="mt-6 space-y-2 text-[0.68rem] uppercase tracking-[0.24em] text-black/74">
                      <p>
                        <span className="text-black/46">Leather</span>
                        {"  "}
                        {item.leatherType}
                      </p>
                      <p>
                        <span className="text-black/46">Colour</span>
                        {"  "}
                        {item.color}
                      </p>
                      <p>
                        <span className="text-black/46">Art No.</span>
                        {"  "}
                        {item.artNo}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-[#f4f4f4] p-3">
                    <p className="text-[0.58rem] uppercase tracking-[0.26em] text-black/46">
                      Product Name
                    </p>
                    <h3
                      className="mt-2 text-[1.08rem] uppercase leading-[1.15] tracking-[0.08em] text-black/82"
                      style={{
                        fontFamily:
                          '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
                      }}
                    >
                      {item.name}
                    </h3>
                  </div>

                  <div className="relative mt-3 bg-[#f3f3f1]">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized
                        sizes="(max-width: 900px) 100vw, 28vw"
                        className="object-cover grayscale-8"
                        style={{
                          objectPosition: item.imagePosition ?? "center center",
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="mt-4 space-y-2 text-[0.66rem] uppercase tracking-[0.22em] text-black/72">
                      <p>
                        <span className="text-black/46">Leather</span>
                        {"  "}
                        {item.leatherType}
                      </p>
                      <p>
                        <span className="text-black/46">Colour</span>
                        {"  "}
                        {item.color}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

//for showing 4 products
function ProductSectionFourUp({
  page,
  items,
}: {
  page: number;
  items: ProductPage[];
}) {
  return (
    <PageShell page={page}>
      <div className="flex h-full flex-col px-[8%] pb-5 pt-5 bg-[#ededed]">
        <div className="flex shrink-0 items-center justify-between text-[0.66rem] uppercase tracking-[0.3em] text-black/40">
          <span>www.euro-intl.com</span>
          <span>catalogue</span>
        </div>

        <div className="mt-3 grid flex-1 min-h-0 grid-cols-2 grid-rows-2 gap-x-5 gap-y-4">
          {items.map((item) => (
            <article
              key={item.artNo}
              className="flex min-h-0 flex-col gap-[0.4rem]"
            >
              {/* Image — fills all available space above the details strip */}
              <div className="relative w-full overflow-hidden aspect-square bg-[#f0efec]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 50vw, 13vw"
                  className="object-cover"
                  style={{
                    objectPosition: item.imagePosition ?? "center center",
                  }}
                />
              </div>

              {/* Details strip */}
              <div>
                <h3
                  className="uppercase leading-[1.2] text-black/80"
                  style={{
                    fontFamily: bodoniModa.style.fontFamily,
                    fontSize: "0.78rem",
                  }}
                >
                  {item.artNo} | {item.name}
                </h3>
                <div className="mt-[0.6rem] space-y-[0.14rem]">
                  {[
                    { label: "Art No.", value: item.artNo },
                    { label: "Leather", value: item.leatherType },
                    { label: "Colour", value: item.color },
                  ].map(({ label, value }) => (
                    <p
                      key={label}
                      className="text-[0.6rem] uppercase tracking-[0.18em] leading-normal"
                    >
                      <span className="text-black/32">{label}</span>
                      {"  "}
                      <span className="text-black/62">{value}</span>
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

//for showing 3 products
function ProductSectionThreeUp({
  page,
  items,
}: {
  page: number;
  items: ProductPage[];
}) {
  return (
    <PageShell page={page}>
      <div className="flex h-full flex-col px-[8%] pb-6 pt-6 bg-[#ededed]">
        {/* Page header */}
        <div className="flex shrink-0 items-center justify-between text-[0.66rem] uppercase tracking-[0.3em] text-black/40">
          <span>www.euro-intl.com</span>
          <span>catalogue</span>
        </div>

        {/* Three product rows */}
        <div className="mt-3 flex flex-1 flex-col divide-y divide-black/8">
          {items.map((item) => (
            <article
              key={item.artNo}
              className="grid flex-1 grid-cols-[36%_1fr] gap-5 py-3"
            >
              {/* Product image */}
              <div className="relative overflow-hidden bg-[#f2f2f0]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 50vw, 12vw"
                  className="object-cover"
                  style={{
                    objectPosition: item.imagePosition ?? "center center",
                  }}
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center gap-[0.45rem]">
                {/* Art no / Name */}
                <p className="text-[0.56rem] uppercase tracking-[0.3em] text-black/36">
                  {item.artNo}
                </p>
                <h3
                  className="uppercase leading-[0.9] text-black/86"
                  style={{
                    fontFamily: bodoniModa.style.fontFamily,
                    fontSize: "1.8rem",
                  }}
                >
                  {item.name}
                </h3>

                {/* Description */}
                <div>
                  <p className="text-[0.44rem] uppercase tracking-[0.28em] text-black/34">
                    Description
                  </p>
                  <p className="mt-[0.2rem] text-[0.62rem] leading-[1.6] text-black/50">
                    {item.description}
                  </p>
                </div>

                {/* Options */}
                <div>
                  <p className="text-[0.44rem] uppercase tracking-[0.28em] text-black/34">
                    Option
                  </p>
                  <p className="mt-[0.2rem] text-[0.58rem] leading-[1.5] text-black/46">
                    {item.details.join(", ")}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function WhyChoosePage() {
  return (
    <PageShell page={37}>
      <div className="grid h-full gap-8 pb-10 pt-6 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-[0.74rem] uppercase tracking-[0.32em] text-black/42">
            Why Choose Us
          </p>
          <h2 className="catalogue-display mt-4 text-[3.8rem] leading-[0.95] tracking-[-0.05em]">
            Clean Manufacturing.
            <br />
            Clear Value.
          </h2>
          <div className="mt-8 grid gap-4">
            {whyChooseUs.map((item, index) => (
              <div
                key={item}
                className="grid grid-cols-[2rem_1fr] gap-4 bg-[#f4f4f4] p-4"
              >
                <span className="text-[0.7rem] uppercase tracking-[0.26em] text-black/44">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[0.94rem] leading-[1.75] text-black/70">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <EditorialImage
            src={images.bagChair}
            alt="Why choose us visual"
            label="Brand / Edit"
            position="center center"
            ratio="portrait"
          />
          <div className="mt-5 flex items-center justify-between">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-black/45">
              Product Development
            </p>
            <TinySquares />
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function ContactPage() {
  const contactBlocks = [
    {
      label: "Direct",
      lines: [
        "Proprietor: Mr. Kamal Aktar",
        "Phone: +91 9564117600",
        "Mail: info@euro-intl.com",
        "Mail: dev.eurointarnational@gmail.com",
      ],
    },
    {
      label: "Office",
      lines: [
        "Block-A, 1st Floor, 4A",
        "G.J. Khan Road, Kolkata-700039",
        "West Bengal, India",
      ],
    },
    {
      label: "Workshop",
      lines: [
        "Plot 1603, Zone-9, K.L.C",
        "South 24 Pargana-743502",
        "West Bengal, India",
      ],
    },
  ];

  return (
    <PageShell page={34}>
      <div className="h-full px-[8%] pb-12 pt-8">
        <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.3em] text-black/48">
          <span>www.euro-intl.com</span>
          <span>catalogue</span>
        </div>

        <div className="mt-8 grid h-[83%] grid-cols-[0.95fr_1.05fr] gap-10">
          <div className="relative">
            <div className="relative overflow-hidden bg-[#f2f2f0]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={images.production}
                  alt="EURO INTERNATIONAL workshop"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 34vw"
                  className="object-cover grayscale-6"
                  style={{ objectPosition: "center center" }}
                />
              </div>
            </div>

            <div className="absolute -bottom-6 right-0 w-[34%] bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-square overflow-hidden bg-[#f4f4f2]">
                <Image
                  src={images.building}
                  alt="EURO INTERNATIONAL building"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 14vw"
                  className="object-cover grayscale-6"
                  style={{ objectPosition: "center center" }}
                />
              </div>
            </div>

            <div className="absolute left-[-1.6rem] top-[12%] h-[42%] w-[1.1rem] bg-[#f1f1f1]" />
            <div className="absolute right-[-1.3rem] top-[22%] flex items-center gap-4">
              <TinySquares />
              <p
                className="text-[0.84rem] uppercase tracking-[0.28em] text-black/54"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                Keep In Touch
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-black/42">
              Contact Page
            </p>
            <h2 className="catalogue-display mt-3 text-[3.6rem] leading-[0.92] tracking-[-0.05em] text-black/88">
              CONTACT
              <br />
              EURO INTERNATIONAL
            </h2>
            <p className="mt-4 max-w-[92%] text-[0.82rem] leading-[1.75] text-black/48">
              For product development, sampling, pricing, and export enquiries,
              connect with us directly through the details below.
            </p>

            <div className="mt-6 space-y-4">
              {contactBlocks.map((block) => (
                <div key={block.label} className="bg-[#f4f4f4] p-4">
                  <p className="text-[0.6rem] uppercase tracking-[0.28em] text-black/46">
                    {block.label}
                  </p>
                  <div className="mt-3 space-y-1.5 text-[0.8rem] leading-[1.65] text-black/68">
                    {block.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-5">
              <div className="flex items-center justify-between border-t border-black/12 pt-4 text-[0.68rem] uppercase tracking-[0.28em] text-black/46">
                <span>India</span>
                <span>Leather Goods Export</span>
              </div>
              <div className="mt-3 flex items-center justify-between bg-[#f4f4f4] px-4 py-3 text-[0.78rem] uppercase tracking-[0.24em] text-black/60">
                <span>www.euro-intl.com</span>
                <span>+91 9564117600</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

export default function Home() {
  const by = (cat: ProductCategory) => productCollections[cat];

  return (
    <main className="catalogue-stage">
      <DownloadPdfButton />
      <div className="mx-auto flex w-full max-w-600 flex-col items-center gap-8 py-6">
        <CoverPage />
        <SummaryPage />
        <AboutPage />

        {/* Bag: pages 4–8  (1-3-4-3-4) */}
        <ProductSection
          imgs={[images.bag1, images.bag1_2]}
          items={by("Leather Bag").slice(0, 1)}
          page={4}
        />
        <ProductSectionThreeUp items={by("Leather Bag").slice(1, 4)} page={5} />
        <ProductSectionFourUp items={by("Leather Bag").slice(4, 8)} page={6} />
        <ProductSectionThreeUp
          items={by("Leather Bag").slice(8, 11)}
          page={7}
        />
        <ProductSectionFourUp
          items={by("Leather Bag").slice(11, 15)}
          page={8}
        />

        {/* Wallet: pages 9–13 */}
        <ProductSection items={by("Leather Wallet").slice(0, 1)} page={9} />
        <ProductSectionThreeUp
          items={by("Leather Wallet").slice(1, 4)}
          page={10}
        />
        <ProductSectionFourUp
          items={by("Leather Wallet").slice(4, 8)}
          page={11}
        />
        <ProductSectionThreeUp
          items={by("Leather Wallet").slice(8, 11)}
          page={12}
        />
        <ProductSectionFourUp
          items={by("Leather Wallet").slice(11, 15)}
          page={13}
        />

        {/* Belt: pages 14–18 */}
        <ProductSection items={by("Leather Belt").slice(0, 1)} page={14} />
        <ProductSectionThreeUp
          items={by("Leather Belt").slice(1, 4)}
          page={15}
        />
        <ProductSectionFourUp
          items={by("Leather Belt").slice(4, 8)}
          page={16}
        />
        <ProductSectionThreeUp
          items={by("Leather Belt").slice(8, 11)}
          page={17}
        />
        <ProductSectionFourUp
          items={by("Leather Belt").slice(11, 15)}
          page={18}
        />

        {/* Shoes: pages 19–23 */}
        <ProductSection items={by("Leather Shoes").slice(0, 1)} page={19} />
        <ProductSectionThreeUp
          items={by("Leather Shoes").slice(1, 4)}
          page={20}
        />
        <ProductSectionFourUp
          items={by("Leather Shoes").slice(4, 8)}
          page={21}
        />
        <ProductSectionThreeUp
          items={by("Leather Shoes").slice(8, 11)}
          page={22}
        />
        <ProductSectionFourUp
          items={by("Leather Shoes").slice(11, 15)}
          page={23}
        />

        {/* Jacket: pages 24–28 */}
        <ProductSection items={by("Leather Jacket").slice(0, 1)} page={24} />
        <ProductSectionThreeUp
          items={by("Leather Jacket").slice(1, 4)}
          page={25}
        />
        <ProductSectionFourUp
          items={by("Leather Jacket").slice(4, 8)}
          page={26}
        />
        <ProductSectionThreeUp
          items={by("Leather Jacket").slice(8, 11)}
          page={27}
        />
        <ProductSectionFourUp
          items={by("Leather Jacket").slice(11, 15)}
          page={28}
        />

        {/* Gloves: pages 29–33 */}
        <ProductSection items={by("Leather Gloves").slice(0, 1)} page={29} />
        <ProductSectionThreeUp
          items={by("Leather Gloves").slice(1, 4)}
          page={30}
        />
        <ProductSectionFourUp
          items={by("Leather Gloves").slice(4, 8)}
          page={31}
        />
        <ProductSectionThreeUp
          items={by("Leather Gloves").slice(8, 11)}
          page={32}
        />
        <ProductSectionFourUp
          items={by("Leather Gloves").slice(11, 15)}
          page={33}
        />

        <ContactPage />
      </div>
    </main>
  );
}
