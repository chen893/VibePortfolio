import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { t, type Locale } from '../../i18n/ui';

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  links: NavLink[];
  currentPath: string;
  locale: Locale;
}

const normalizePath = (path: string) => (path !== '/' ? path.replace(/\/+$/, '') : '/');

export default function MobileNav({ links, currentPath, locale }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative z-50 w-12 h-12 flex items-center justify-center border-2"
        style={{ borderColor: 'var(--text)' }}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? t(locale, 'mobileNav.closeMenu') : t(locale, 'mobileNav.openMenu')}
      >
        <div className="w-6 h-4 relative flex flex-col justify-between">
          <motion.span
            className="block h-0.5 w-full origin-center"
            style={{ background: 'var(--text)' }}
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-full"
            style={{ background: 'var(--text)' }}
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-full origin-center"
            style={{ background: 'var(--text)' }}
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40"
              style={{ background: 'var(--bg)' }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="fixed top-0 right-0 z-40 h-full w-full max-w-sm border-l-2"
              style={{ background: 'var(--bg)', borderColor: 'var(--text)' }}
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                <ul className="space-y-4" role="menu">
                  {links.map((link, index) => {
                    const isActive = normalizePath(currentPath) === normalizePath(link.href);
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.1 }}
                        role="none"
                      >
                        <a
                          href={link.href}
                          role="menuitem"
                          className={`block w-full py-4 text-4xl font-extrabold uppercase font-display transition-colors ${isActive ? 'active-link' : ''}`}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
                <div className="mt-auto text-sm font-semibold uppercase">
                  VIBE © {new Date().getFullYear()}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .active-link {
          color: var(--bg);
          background-color: var(--text);
        }
      `}</style>
    </div>
  );
}
