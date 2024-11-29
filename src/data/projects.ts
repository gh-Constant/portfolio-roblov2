export interface Project {
  title: string;
  description: string;
  media: {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string; // For videos
  };
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Zombie Defense Game",
    description: "A thrilling tower defense game where players strategically place defenses to protect against waves of zombies.",
    media: {
      type: 'image',
      url: "https://images.unsplash.com/photo-1614465000772-1b302f406c47?w=800&auto=format&fit=crop&q=60"
    },
    tags: ["Roblox", "Luau", "Game Design"],
    link: "https://www.roblox.com/games/example1"
  },
  {
    title: "Racing Simulator",
    description: "High-speed racing game with realistic physics and customizable vehicles.",
    media: {
      type: 'video',
      url: "https://player.vimeo.com/video/123456789",
      thumbnail: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=60"
    },
    tags: ["Roblox", "Physics", "Multiplayer"],
    link: "https://www.roblox.com/games/example2"
  },
  {
    title: "RPG Adventure",
    description: "An immersive role-playing game with quests, character progression, and dynamic combat.",
    media: {
      type: 'image',
      url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60"
    },
    tags: ["Roblox", "RPG", "Game Systems"],
    link: "https://www.roblox.com/games/example3"
  }
];