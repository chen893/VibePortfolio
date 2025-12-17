import { motion } from 'framer-motion';
import { t, type Locale } from '../../i18n/ui';

interface HeroProps {
  name: string;
  title: string;
  bio: string;
  locale: Locale;
  projectsHref: string;
  aboutHref: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Hero({ name, title, bio, locale, projectsHref, aboutHref }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center bg-[var(--bg)] text-[var(--text)]">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Headline */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h1 className="font-display font-extrabold leading-none mb-4">
              {name}
            </h1>
            <p className="font-display text-2xl md:text-3xl font-bold uppercase">
              {title}
            </p>
          </motion.div>

          {/* Right Column: Bio and CTAs */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <p className="text-lg mb-8 max-w-prose">
              {bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={projectsHref} className="btn btn-primary magnetic">
                {t(locale, 'hero.viewProjects')}
              </a>
              <a href={aboutHref} className="btn magnetic">
                {t(locale, 'hero.aboutMe')}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
