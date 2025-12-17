
import { useState, useCallback } from 'react';

const MailIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

interface Props {
  email: string;
  t: {
    copy: string;
    copied: string;
  };
}

export default function CopyableEmail({ email, t }: Props) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  }, [email]);

  return (
    <div
      className="relative group w-full max-w-sm mx-auto cursor-pointer"
      onClick={handleCopy}
      onKeyDown={(e) => e.key === 'Enter' && handleCopy()}
      role="button"
      tabIndex={0}
    >
      {/* Neo-brutalism hard shadow */}
      <div
        className="absolute inset-0 translate-x-1 translate-y-1 bg-[var(--text)] transition-transform duration-200 group-hover:translate-x-1.5 group-hover:translate-y-1.5"
        style={{ borderRadius: '0' }}
      />

      {/* Main content box */}
      <div
        className="relative flex items-center justify-center gap-3 w-full h-14 px-5 bg-[var(--background)] border-2 border-[var(--text)] transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
        style={{ borderRadius: '0' }}
      >
        {/* Default state - Email display */}
        <div
          className={`flex items-center gap-3 transition-opacity duration-200 ${
            isCopied ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <MailIcon className="w-5 h-5 text-[var(--accent-dark)] flex-shrink-0" />
          <span className="font-mono text-sm md:text-base text-[var(--text)] truncate">
            {email}
          </span>
        </div>

        {/* Copied confirmation */}
        <div
          className={`absolute inset-0 flex items-center justify-center gap-2 transition-opacity duration-200 ${
            isCopied ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <CheckIcon className="w-5 h-5 text-[var(--accent-dark)]" />
          <span className="text-base font-semibold text-[var(--text)]">
            {t.copied}
          </span>
        </div>

        {/* Hover hint - click to copy */}
        <span
          className={`absolute right-4 text-xs uppercase tracking-wider text-[var(--text-muted)] transition-opacity duration-200 ${
            isCopied ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          {t.copy}
        </span>
      </div>
    </div>
  );
}
