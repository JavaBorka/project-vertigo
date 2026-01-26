export const normalizePath = (path: string | undefined): string => {
  if (!path) return '/';
  const withoutTrailing = path.replace(/\/+$/, '');
  return withoutTrailing.length === 0 ? '/' : withoutTrailing;
};
