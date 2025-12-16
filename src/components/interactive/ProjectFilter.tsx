import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  slug: string;
  data: {
    title: string;
    description: string;
    category: string;
    technologies: string[];
    featured: boolean;
  };
}

interface ProjectFilterProps {
  projects: Project[];
  onFilterChange: (filtered: Project[]) => void;
  categories: { value: string; label: string }[];
  technologies: string[];
}

const categoryLabels: Record<string, string> = {
  all: '全部',
  web: 'Web 应用',
  mobile: '移动应用',
  backend: '后端服务',
  fullstack: '全栈项目',
  tool: '工具',
  other: '其他',
};

export default function ProjectFilter({
  projects,
  onFilterChange,
  technologies,
}: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [showTechFilter, setShowTechFilter] = useState(false);

  const categories = [
    'all',
    ...Array.from(new Set(projects.map((p) => p.data.category))),
  ];

  const filterProjects = useCallback(
    (category: string, tech: string | null) => {
      let filtered = [...projects];

      if (category !== 'all') {
        filtered = filtered.filter((p) => p.data.category === category);
      }

      if (tech) {
        filtered = filtered.filter((p) =>
          p.data.technologies.some(
            (t) => t.toLowerCase() === tech.toLowerCase()
          )
        );
      }

      return filtered;
    },
    [projects]
  );

  useEffect(() => {
    const filtered = filterProjects(activeCategory, activeTech);
    onFilterChange(filtered);
  }, [activeCategory, activeTech, filterProjects, onFilterChange]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleTechChange = (tech: string | null) => {
    setActiveTech(tech === activeTech ? null : tech);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    action: () => void
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <div className="space-y-4">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="项目分类筛选">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            onKeyDown={(e) => handleKeyDown(e, () => handleCategoryChange(category))}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900 ${
              activeCategory === category
                ? 'bg-primary-500 text-white'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
            }`}
            aria-pressed={activeCategory === category}
          >
            {categoryLabels[category] || category}
          </button>
        ))}
      </div>

      {/* Tech Filter Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setShowTechFilter(!showTechFilter)}
          onKeyDown={(e) => handleKeyDown(e, () => setShowTechFilter(!showTechFilter))}
          className="flex items-center gap-2 text-dark-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
          aria-expanded={showTechFilter}
          aria-controls="tech-filter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
            />
          </svg>
          <span className="text-sm">按技术筛选</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
            animate={{ rotate: showTechFilter ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </motion.svg>
        </button>

        {/* Active filter indicator */}
        {activeTech && (
          <button
            onClick={() => setActiveTech(null)}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-primary-500/20 text-primary-400 rounded-full hover:bg-primary-500/30 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {activeTech}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Tech Filter Panel */}
      <AnimatePresence>
        {showTechFilter && (
          <motion.div
            id="tech-filter"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div
              className="flex flex-wrap gap-2 pt-2 pb-4 border-t border-dark-800"
              role="group"
              aria-label="技术栈筛选"
            >
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => handleTechChange(tech)}
                  onKeyDown={(e) => handleKeyDown(e, () => handleTechChange(tech))}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 focus:ring-offset-dark-900 ${
                    activeTech === tech
                      ? 'bg-primary-500 text-white'
                      : 'bg-dark-800 text-dark-400 hover:bg-dark-700 hover:text-dark-200'
                  }`}
                  aria-pressed={activeTech === tech}
                >
                  {tech}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
