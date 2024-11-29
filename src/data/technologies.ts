export interface Technology {
  name: string;
  description: string;
  logo: string;
  bgColorHex: string;
}

export const technologies: Technology[] = [
  { 
    name: "Roblox Studio", 
    description: "Roblox's official IDE", 
    logo: "https://images.unsplash.com/photo-1614465000772-1b302f406c47?w=100", 
    bgColorHex: "#0ACF83" 
  },
  { 
    name: "Luau", 
    description: "Roblox's programming language", 
    logo: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=100", 
    bgColorHex: "#3178C6" 
  },
  { 
    name: "Git", 
    description: "Version controlling system", 
    logo: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100", 
    bgColorHex: "#61DAFB" 
  },
  { 
    name: "Rojo", 
    description: "Git and other IDEs in Roblox Studio", 
    logo: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=100", 
    bgColorHex: "#F1502F" 
  },
  { 
    name: "Photoshop", 
    description: "Image editing software", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png", 
    bgColorHex: "#31A8FF" 
  },
  { 
    name: "Cursor", 
    description: "VSCode fork with AI", 
    logo: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100", 
    bgColorHex: "#000000" 
  },
  { 
    name: "VSCode", 
    description: "Popular IDE", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/640px-Visual_Studio_Code_1.35_icon.svg.png", 
    bgColorHex: "#007ACC" 
  },
  { 
    name: "Webstorm", 
    description: "Web IDE (EmmyLua)", 
    logo: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=100", 
    bgColorHex: "#F24E1E" 
  }
];