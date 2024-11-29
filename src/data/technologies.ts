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
    logo: "/rbxstudiologo.png", 
    bgColorHex: "#0ACF83" 
  },
  { 
    name: "Luau", 
    description: "Roblox's programming language", 
    logo: "/luaulogo.png", 
    bgColorHex: "#3178C6" 
  },
  { 
    name: "Git", 
    description: "Version controlling system", 
    logo: "/gitlogo.png", 
    bgColorHex: "#61DAFB" 
  },
  { 
    name: "Rojo", 
    description: "Git and other IDEs in Roblox Studio", 
    logo: "/rojoLogo.png", 
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
    logo: "https://www.cursor.com/assets/images/logo.svg", 
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
    logo: "https://resources.jetbrains.com/storage/products/webstorm/img/meta/webstorm_logo_300x300.png", 
    bgColorHex: "#F24E1E" 
  }
];