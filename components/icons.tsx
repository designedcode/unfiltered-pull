export function StarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2.2 13.4 9 20 10.4 13.4 11.8 12 18.6 10.6 11.8 4 10.4 10.6 9z" />
    </svg>
  );
}

export function MoonIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <path
        d="M40 8.5c-2.4 4-3.7 8.6-3.7 13.5 0 15.2 12.3 27.5 27.5 27.5 1.4 0 2.8-.1 4.2-.3C62.2 59 50.8 68 36.8 68 19.2 68 5 53.8 5 36.2 5 21.4 15.4 8.8 29.4 6.2 26.8 10.4 26 15.4 26 20.6c0 15.2 12.3 27.5 27.5 27.5.8 0 1.6 0 2.4-.1C51.4 36 46.8 22.8 40 8.5Z"
        transform="translate(-4 -4) scale(0.9)"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function LeafIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M8 32c10-18 24-22 32-24-2 10-6 24-24 32-2-4-6-6-8-8Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M16 28c6-6 12-10 20-14" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function HandCardIcon({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden>
      <rect x="32" y="8" width="22" height="32" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="43" cy="22" r="5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M43 17v-2M43 29v2M38 22h-2M50 22h2" stroke="currentColor" strokeWidth="1" />
      <path
        d="M28 46c6-6 14-4 16-1 2-5 8-6 11-2 3 4 1 12-4 16-6 5-16 6-22 2-4-3-5-9-1-15Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
