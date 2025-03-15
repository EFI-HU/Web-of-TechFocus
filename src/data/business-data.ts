import { Product, Project } from "@/types/business";

/**
 * Software projects data
 */
export const projects: Project[] = [
  {
    id: "doe-foa",
    title: "Awarded DOE FOA Proposal",
    description: "Received $1.75 million funding for electric bus deployment strategies",
    fullDescription: "Initiated an FOA proposal and was funded in the amount of $1.75 million in 2020. The primary goal of the proposed project was to develop a set of innovative planning and operation tools and identify effective strategies informed by real-world implementation and validation to help transit agencies gradually and effectively deploy and operate electric buses.",
    imageUrl: "/business/electric-bus.jpg",
    tags: ["Electric Vehicles", "Public Transit", "Energy Efficiency"]
  },
  {
    id: "doe-copyright",
    title: "Received DOE Copyright Authorization",
    description: "Developed fuel economy estimation tool adopted by Google Maps",
    fullDescription: "In 2019, as the sole contributor on the model \"A Tool to Estimate Fuel Economy/Consumption-Based on Real World Driving Profile\", Dr. Wang received DOE authorization to assert a closed-source copyright for NREL, which was adopted by Google in 2021 to add \"most energy efficient route\" feature into Google Maps.",
    imageUrl: "/business/google-maps.jpg",
    tags: ["Fuel Economy", "Google Maps", "Software Development"]
  },
  {
    id: "freight-efficiency",
    title: "Improved Freight Movement Energy Efficiency",
    description: "Developed intelligent platform for transportation system operators",
    fullDescription: "Improved the energy efficiency of multi-modal smart city freight movement; Developed an intelligent platform that guides transportation system operators to improve energy efficiency. Please contact us for details.",
    imageUrl: "/business/freight.jpg",
    tags: ["Freight", "Energy Efficiency", "Smart City"]
  }
];

/**
 * Hardware products data
 */
export const products: Product[] = [
  // HP Computers
  {
    id: "hp-1",
    category: "hp",
    name: "HP - 11.6\" Chromebook",
    description: "Intel Celeron - 4GB Memory - 32GB eMMC Flash Memory - Ash Gray",
    price: 198.99,
    imageUrl: "/business/products/hp-chromebook.jpg",
    contactInfo: "Please contact us to purchase"
  },
  {
    id: "hp-2",
    category: "hp",
    name: "HP Stream 14-inch Laptop",
    description: "Intel Celeron N4000, 4 GB RAM, 64 GB eMMC, Windows 10 Home in S Mode With Office 365 Personal For 1 Year",
    price: 233.99,
    imageUrl: "/business/products/hp-stream.jpg",
    contactInfo: "Please contact us to purchase"
  },
  {
    id: "hp-3",
    category: "hp",
    name: "HP 14-Inch HD Display Laptop",
    description: "Intel Celeron 4GB RAM 64GB eMMC Win 10 Laptop (Pale Gold)",
    price: 245.00,
    imageUrl: "/business/products/hp-14.jpg",
    contactInfo: "Please contact us to purchase"
  },
  
  // TI Calculators
  {
    id: "ti-1",
    category: "ti",
    name: "TI-84 Plus School Pack",
    description: "Pack of 10 calculators for classroom use",
    price: 1334.99,
    imageUrl: "/business/products/ti-84-pack.jpg",
    contactInfo: "Please contact us to purchase"
  },
  {
    id: "ti-2",
    category: "ti",
    name: "Texas Instruments Ti-84 plus",
    description: "Graphing calculator - Black",
    price: 129.99,
    imageUrl: "/business/products/ti-84.jpg",
    contactInfo: "Please contact us to purchase"
  },
  {
    id: "ti-3",
    category: "ti",
    name: "Texas Instruments TI-84 Plus CE",
    description: "Color Graphing Calculator, Black 7.5 Inch",
    price: 145.00,
    imageUrl: "/business/products/ti-84-ce.jpg",
    contactInfo: "Please contact us to purchase"
  },
  
  // Game Consoles
  {
    id: "game-1",
    category: "game",
    name: "Sony - PlayStation 5 Console",
    description: "Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio",
    price: 649.00,
    imageUrl: "/business/products/ps5.jpg",
    contactInfo: "Please contact us to purchase"
  },
  {
    id: "game-2",
    category: "game",
    name: "PlayStation 4 1TB Console - Black",
    description: "Geek Squad® Certified Refurbished products are thoroughly tested, so you can be sure that your device will work right, right away",
    price: 449.00,
    imageUrl: "/business/products/ps4.jpg",
    contactInfo: "Please contact us to purchase"
  },
  {
    id: "game-3",
    category: "game",
    name: "Microsoft - Xbox Series X 1TB Console",
    description: "Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming",
    price: 649.00,
    imageUrl: "/business/products/xbox.jpg",
    contactInfo: "Please contact us to purchase"
  },
  {
    id: "game-4",
    category: "game",
    name: "Meta - Quest 2 VR Headset",
    description: "Advanced All-In-One Virtual Reality Headset - 128GB",
    price: 399.00,
    imageUrl: "/business/products/meta-quest.jpg",
    contactInfo: "Please contact us to purchase"
  },
  {
    id: "game-5",
    category: "game",
    name: "Nintendo Switch – OLED Model",
    description: "White Joy-Con with vibrant 7-inch OLED screen and wide adjustable stand",
    price: 449.00,
    imageUrl: "/business/products/nintendo-switch.jpg",
    contactInfo: "Please contact us to purchase"
  },
  {
    id: "game-6",
    category: "game",
    name: "Razer Wolverine Ultimate Controller",
    description: "Officially Licensed Xbox One Controller with 6 Remappable Buttons and Triggers",
    price: 179.99,
    imageUrl: "/business/products/razer-controller.jpg",
    contactInfo: "Please contact us to purchase"
  }
]; 