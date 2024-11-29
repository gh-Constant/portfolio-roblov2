import { motion } from 'framer-motion';

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
        className="relative z-10 container mx-auto px-4"
      >
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          <p className="text-gray-400 uppercase tracking-[0.2em] text-sm font-medium select-none">
            Based In France
          </p>
          <h1 className="mt-6 text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.1] font-bold tracking-tight select-none">
            <span className="text-white">Constant </span>
            <span className="text-purple-500">Roblox </span>
            <span className="text-purple-500">Scripting </span>
            <span className="text-purple-500">Services </span>
            <span className="text-purple-500">&amp; </span>
            <span className="text-white">Portfolio</span>
          </h1>
          <p className="mt-6 text-gray-300 text-xl max-w-3xl select-none">
            Hi, I'm Constant, I write clean, organized roblox scripts that can be used to build reliable games and systems on Roblox.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a 
              href="#projects"
              className="relative z-10 inline-flex gap-2.5 h-12 animate-shimmer items-center justify-center rounded-md border border-dark-700 bg-[linear-gradient(110deg,#1A1A1A,45%,#262626,55%,#1A1A1A)] hover:bg-[linear-gradient(110deg,#262626,45%,#404040,55%,#262626)] bg-[length:200%_100%] px-6 font-medium text-sm sm:text-base text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span>See My Works</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>
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
        </div>
      </motion.div>
    </div>
  );
}