import { useState } from 'react';
import { useNavigate } from 'react-router';

/**
 * Figma 15.01 hero search ("Search guides, features and FAQs" + "Search"). There is no search
 * backend yet, so submitting opens the FAQs page with the query in `?q=`.
 */
export default function SupportSearch({ to, placeholder = 'Search guides, features and FAQs' }) {
  const [q, setQ] = useState('');
  const navigate = useNavigate();
  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        navigate(q.trim() ? `${to}?q=${encodeURIComponent(q.trim())}` : to);
      }}
      className="flex w-full max-w-[520px] items-center gap-2 rounded-pill border border-border-muted bg-surface-white p-1.5 pl-5 shadow-[0_8px_24px_rgb(11_11_18/0.06)]"
    >
      <span aria-hidden="true" className="text-ink-500">
        ⌕
      </span>
      <label htmlFor="support-search" className="sr-only">
        {placeholder}
      </label>
      <input
        id="support-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-[15px] text-ink-900 outline-none placeholder:text-ink-500"
      />
      <button
        type="submit"
        className="rounded-pill bg-brand-blue px-5 py-2.5 text-[14px] font-medium text-white hover:bg-[#0050d6]"
      >
        Search
      </button>
    </form>
  );
}
