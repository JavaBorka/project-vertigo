import type { AuthorItem } from 'types/authorsItem';

const collator = new Intl.Collator('sk', {
  usage: 'sort',
  sensitivity: 'base',
  ignorePunctuation: true,
  numeric: true,
});

function safeText(v: string | null | undefined) {
  return (v ?? '').trim();
}

function splitAuthorName(author: string) {
  // Expected format: "Last, First"
  const raw = safeText(author);
  if (!raw) return { last: '', first: '' };

  const [last, ...rest] = raw.split(',');
  return {
    last: safeText(last),
    first: safeText(rest.join(',')),
  };
}

export function sortAuthorsSk(items: AuthorItem[]): AuthorItem[] {
  return [...items].sort((a, b) => {
    const an = splitAuthorName(a.author ?? '');
    const bn = splitAuthorName(b.author ?? '');

    const byLast = collator.compare(an.last, bn.last);
    if (byLast !== 0) return byLast;

    const byFirst = collator.compare(an.first, bn.first);
    if (byFirst !== 0) return byFirst;

    // Stable-ish final tie-breaker
    return (a.id ?? 0) - (b.id ?? 0);
  });
}
