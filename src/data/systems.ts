export interface System {
  title: string;
  description: string;
  features: string[];
  image: string;
  demoLink?: string;
}

export const systems: System[] = [
  {
    title: "Advanced Combat System",
    description: "A flexible and responsive combat system with customizable abilities, combos, and effects.",
    features: [
      "Combo system with chain attacks",
      "Skill cooldown management",
      "Damage calculation system",
      "Visual effects integration"
    ],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Inventory Management",
    description: "Comprehensive inventory system with drag-and-drop functionality and item management.",
    features: [
      "Drag and drop interface",
      "Item stacking",
      "Category filtering",
      "Save/Load system"
    ],
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Quest System",
    description: "Dynamic quest system with progress tracking and reward distribution.",
    features: [
      "Multiple quest types",
      "Progress tracking",
      "Reward system",
      "Quest chain support"
    ],
    image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=800&auto=format&fit=crop&q=60"
  }
];