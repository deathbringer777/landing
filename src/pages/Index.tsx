import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Index = () => {
  const links = [
    {
      href: "https://www.youtube.com/watch?v=XaUOO6qQp9U",
      label: "YouTube"
    },
    {
      href: "https://soundcloud.com/dezbringer",
      label: "SoundCloud"
    },
    {
      href: "https://1deathbringer.bandcamp.com/track/black",
      label: "BandCamp"
    },
    {
      href: "https://instagram.com/dezbringer",
      label: "Instagram"
    },
    {
      href: "https://t.me/vdovin_music/",
      label: "Telegram"
    },
    {
      href: "mailto:contact@dezbringer.com",
      label: "Email 📩"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col backdrop-blur-sm"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header - Always at top */}
      <motion.div 
        className="flex-shrink-0 pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
        variants={itemVariants}
      >
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <motion.div 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 glass-avatar flex items-center justify-center"
            variants={avatarVariants}
            whileHover="hover"
          >
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">D</span>
          </motion.div>
          {/* Artist title */}
          <motion.h1 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5"
            variants={itemVariants}
          >
            Dezbringer
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/70 font-medium"
            variants={itemVariants}
          >
            Electronic Music Producer
          </motion.p>
        </div>
      </motion.div>

      {/* Main content - Centered between header and footer */}
      <motion.div 
        className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-2 sm:py-3 md:py-4"
        variants={itemVariants}
      >
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
          {/* Clean button list */}
          <motion.div 
            className="space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-5 xl:space-y-5 flex flex-col items-center"
            variants={containerVariants}
          >
            {links.map((link, index) => (
              <motion.div
                key={link.label}
                className="w-full h-12 sm:h-13 md:h-14 lg:h-15 xl:h-16 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl glass-liquid glass-pill-both text-white font-medium touch-manipulation block"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  y: -3,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
              >
                <a 
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="flex items-center justify-center gap-2 sm:gap-3 w-full h-full"
                >
                  {link.label}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Footer - Simple text */}
      <motion.div 
        className="flex-shrink-0 pb-8 sm:pb-10 md:pb-12"
        variants={itemVariants}
      >
        <div className="w-full flex flex-col items-center justify-center gap-1 text-center">
          <p className="text-white/40 text-xs">
            Warsaw | PL 📍
          </p>
          <p className="text-white/30 text-[10px]">
            Developed by Kyrylo Vdovin © 2025
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Index;