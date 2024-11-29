import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark-300 border-t border-dark-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <a
              href="https://discord.com/users/1174734956296155278"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative z-10 inline-flex gap-2.5 h-12 items-center justify-center rounded-md border border-purple-500/20 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 px-6 font-medium text-sm sm:text-base text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-50 animate-gradient bg-[length:200%_auto]"
            >
              <span>Contact on Discord</span>
              <div className="relative w-5 h-5 transition-transform duration-200 group-hover:scale-110">
                <img
                  alt="Discord Logo"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  className="object-contain brightness-200 absolute inset-0 h-full w-full"
                  src="/discordLogo.svg"
                />
              </div>
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/gh-constant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.roblox.com/users/1564972967/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  Roblox
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Constant Scripting Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}