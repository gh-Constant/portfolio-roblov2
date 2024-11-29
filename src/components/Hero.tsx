import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center py-20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-500/40 rounded-full blur-[180px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-purple-500/40 rounded-full blur-[180px]"
        />
      </div>

      

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-4 tracking-tight text-gray-400">
          Based In France
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-white">Constant </span>
          <span className="text-purple-500">Roblox </span>
          <span className="text-purple-500">Scripting </span>
          <span className="text-purple-500">Services </span>
          <span className="text-purple-500">&amp; </span>
          <span className="text-white">Portfolio</span>
        </h1>
        

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="relative z-10 inline-flex gap-2.5 h-12 animate-shimmer items-center justify-center rounded-md border border-dark-700 bg-[linear-gradient(110deg,#1A1A1A,45%,#262626,55%,#1A1A1A)] hover:bg-[linear-gradient(110deg,#262626,45%,#404040,55%,#262626)] bg-[length:200%_100%] px-6 font-medium text-sm sm:text-base text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            View Projects
          </a>
          <a
            href="https://discord.com/users/1174734956296155278"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex gap-2.5 h-12 animate-shimmer items-center justify-center rounded-md border border-dark-700 bg-[linear-gradient(110deg,#1A1A1A,45%,#262626,55%,#1A1A1A)] hover:bg-[linear-gradient(110deg,#262626,45%,#404040,55%,#262626)] bg-[length:200%_100%] px-6 font-medium text-sm sm:text-base text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </div>
  );
}