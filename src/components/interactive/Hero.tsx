import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface HeroProps {
  name: string;
  title: string;
  bio: string;
}

// Text scramble effect hook
function useTextScramble(text: string, trigger: boolean) {
  const [displayText, setDisplayText] = useState(text);
  const chars = '!<>-_\\/[]{}—=+*^?#アイウエオカキクケコ';

  useEffect(() => {
    if (!trigger) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 30);

    return () => clearInterval(interval);
  }, [text, trigger]);

  return displayText;
}

export default function Hero({ name, title, bio }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth cursor following
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform mouse position to rotation
  const rotateX = useTransform(y, [-300, 300], [5, -5]);
  const rotateY = useTransform(x, [-300, 300], [-5, 5]);

  // Scramble effect
  const scrambledName = useTextScramble(name, isLoaded);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cyan orb - top right */}
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Magenta orb - bottom left */}
        <motion.div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,45,146,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Yellow accent - center */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(228,255,26,0.05) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal accent line */}
        <motion.div
          className="absolute top-1/3 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0,240,255,0.3) 50%, transparent 100%)',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        />

        {/* Vertical accent line */}
        <motion.div
          className="absolute top-0 bottom-0 left-1/4 w-px"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(255,45,146,0.2) 50%, transparent 100%)',
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.7, ease: 'easeOut' }}
        />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-cyan-400/30" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-cyan-400/30" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-cyan-400/30" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-cyan-400/30" />

      {/* Main content */}
      <motion.div
        className="relative z-10 container-custom px-6 md:px-12"
        style={{
          perspective: 1000,
        }}
      >
        <motion.div
          style={{ rotateX, rotateY }}
          className="transform-gpu"
        >
          {/* Status indicator */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span
              className="text-sm tracking-[0.2em] uppercase"
              style={{ color: '#00f0ff', fontFamily: 'Space Mono, monospace' }}
            >
              Available for work
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="mb-6">
            <motion.p
              className="text-sm md:text-base tracking-[0.3em] uppercase mb-4"
              style={{ color: '#a3a3a3', fontFamily: 'Space Mono, monospace' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {'< Developer />'}
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tighter"
              style={{ fontFamily: 'Clash Display, sans-serif' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-white">I'm </span>
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(135deg, #00f0ff 0%, #ff2d92 50%, #e4ff1a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {scrambledName}
                {/* Glitch layers */}
                <span
                  className="absolute top-0 left-0 -z-10 opacity-50"
                  style={{
                    color: '#ff2d92',
                    transform: 'translate(-2px, 2px)',
                    clipPath: 'inset(10% 0 60% 0)',
                  }}
                  aria-hidden="true"
                >
                  {name}
                </span>
              </span>
            </motion.h1>
          </div>

          {/* Title with decorative bracket */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span
              className="text-2xl md:text-3xl lg:text-4xl font-light"
              style={{ color: '#00f0ff', fontFamily: 'Space Mono, monospace' }}
            >
              {'//'}
            </span>
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-medium"
              style={{ color: '#e5e5e5', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {title}
            </h2>
          </motion.div>

          {/* Bio with styled border */}
          <motion.div
            className="relative max-w-2xl mb-12 pl-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{
                background: 'linear-gradient(180deg, #00f0ff, #ff2d92)',
              }}
            />
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#a3a3a3', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {bio}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="/projects"
              className="group relative px-8 py-4 font-medium text-sm tracking-wider uppercase overflow-hidden"
              style={{
                background: '#00f0ff',
                color: '#050505',
                fontFamily: 'Space Mono, monospace',
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-[#e4ff1a]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="/about"
              className="group px-8 py-4 font-medium text-sm tracking-wider uppercase border transition-all duration-300"
              style={{
                borderColor: '#00f0ff',
                color: '#00f0ff',
                fontFamily: 'Space Mono, monospace',
              }}
              whileHover={{
                backgroundColor: '#00f0ff',
                color: '#050505',
                boxShadow: '0 0 30px rgba(0,240,255,0.5)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              About Me
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: '#525252', fontFamily: 'Space Mono, monospace' }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-12"
          style={{ background: 'linear-gradient(180deg, #00f0ff, transparent)' }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Japanese decorative text */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
        style={{
          writingMode: 'vertical-rl',
          color: '#262626',
          fontFamily: 'sans-serif',
          fontSize: '0.75rem',
          letterSpacing: '0.5em',
        }}
      >
        ポートフォリオ
      </div>

      {/* Coordinates decoration */}
      <motion.div
        className="absolute bottom-8 left-8 hidden md:block"
        style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.7rem', color: '#404040' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div>LAT: 31.2304° N</div>
        <div>LNG: 121.4737° E</div>
      </motion.div>
    </section>
  );
}
