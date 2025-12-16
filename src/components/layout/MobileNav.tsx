import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { t, type Locale } from '../../i18n/ui';

interface NavLink {
  href: string;
  label: string;
  code: string;
}

interface MobileNavProps {
  links: NavLink[];
  currentPath: string;
  locale: Locale;
}

const normalizePath = (path: string) => (path !== '/' ? path.replace(/\/+$/, '') : '/');

export default function MobileNav({ links, currentPath, locale }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      {/* Hamburger Button - Cyberpunk style */}
      <button
        onClick={toggleMenu}
        className="relative z-50 w-12 h-12 flex items-center justify-center transition-all duration-300"
        style={{
          border: '1px solid rgba(0, 240, 255, 0.3)',
          background: isOpen ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
        }}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? t(locale, 'mobileNav.closeMenu') : t(locale, 'mobileNav.openMenu')}
      >
        {/* Corner accents */}
        <div className="absolute -top-px -left-px w-2 h-2 border-t border-l" style={{ borderColor: '#00f0ff' }} />
        <div className="absolute -top-px -right-px w-2 h-2 border-t border-r" style={{ borderColor: '#00f0ff' }} />
        <div className="absolute -bottom-px -left-px w-2 h-2 border-b border-l" style={{ borderColor: '#00f0ff' }} />
        <div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r" style={{ borderColor: '#00f0ff' }} />

        <div className="w-5 h-4 relative flex flex-col justify-between">
          <motion.span
            className="block h-0.5 w-full origin-center"
            style={{ background: '#00f0ff' }}
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-full"
            style={{ background: '#ff2d92' }}
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-full origin-center"
            style={{ background: '#00f0ff' }}
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with scan lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40"
              style={{
                background: 'rgba(5, 5, 5, 0.95)',
                backdropFilter: 'blur(10px)',
              }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            >
              {/* Scan line animation */}
              <motion.div
                className="absolute left-0 right-0 h-px opacity-30"
                style={{ background: '#00f0ff' }}
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            {/* Menu Panel */}
            <motion.nav
              id="mobile-menu"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 z-40 h-full w-80"
              style={{
                background: '#0d0d0d',
                borderLeft: '1px solid rgba(0, 240, 255, 0.2)',
              }}
            >
              {/* Decorative top line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #00f0ff, #ff2d92)' }}
              />

              <div className="flex flex-col h-full pt-24 pb-8 px-8">
                {/* Navigation label */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <span
                    className="text-xs tracking-[0.3em] uppercase"
                    style={{ color: '#525252', fontFamily: 'Space Mono, monospace' }}
                  >
                    {'// '}
                    {t(locale, 'mobileNav.navigation')}
                  </span>
                </motion.div>

                <ul className="space-y-2" role="menu">
                  {links.map((link, index) => {
                    const isActive = normalizePath(currentPath) === normalizePath(link.href);
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        role="none"
                      >
                        <a
                          href={link.href}
                          role="menuitem"
                          className="group relative flex items-center gap-4 py-4 px-4 transition-all duration-300"
                          style={{
                            background: isActive ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                            borderLeft: isActive ? '2px solid #00f0ff' : '2px solid transparent',
                          }}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {/* Number */}
                          <span
                            className="text-sm"
                            style={{
                              color: isActive ? '#ff2d92' : '#404040',
                              fontFamily: 'Space Mono, monospace',
                            }}
                          >
                            {link.code}
                          </span>

                          {/* Label */}
                          <span
                            className="text-xl font-bold tracking-wide"
                            style={{
                              color: isActive ? '#00f0ff' : '#e5e5e5',
                              fontFamily: 'Clash Display, sans-serif',
                              textShadow: isActive ? '0 0 20px rgba(0, 240, 255, 0.5)' : 'none',
                            }}
                          >
                            {link.label}
                          </span>

                          {/* Active indicator */}
                          {isActive && (
                            <motion.span
                              className="absolute right-4 w-2 h-2 rounded-full"
                              style={{ background: '#00f0ff', boxShadow: '0 0 10px #00f0ff' }}
                              layoutId="activeIndicator"
                            />
                          )}

                          {/* Hover line */}
                          <span
                            className="absolute bottom-2 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ background: 'linear-gradient(90deg, #00f0ff, transparent)' }}
                          />
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Footer section */}
                <div className="mt-auto">
                  {/* Divider */}
                  <div
                    className="h-px mb-6"
                    style={{ background: 'linear-gradient(90deg, #262626, transparent)' }}
                  />

                  {/* Status */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-3 mb-4"
                  >
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: '#22c55e', boxShadow: '0 0 10px #22c55e' }}
                    />
                    <span
                      className="text-xs tracking-wider"
                      style={{ color: '#525252', fontFamily: 'Space Mono, monospace' }}
                  >
                      {t(locale, 'header.statusOnline')}
                    </span>
                  </motion.div>

                  {/* Brand */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <span
                      className="text-xs tracking-[0.2em]"
                      style={{ color: '#404040', fontFamily: 'Space Mono, monospace' }}
                    >
                      VIBE.PORTFOLIO.V1
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Decorative corner brackets */}
              <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b" style={{ borderColor: '#262626' }} />
              <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b" style={{ borderColor: '#262626' }} />
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
