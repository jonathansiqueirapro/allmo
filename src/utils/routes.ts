export function routePath(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalizedPath = path.replace(/^\//, '');

  if (!normalizedPath) {
    return `${base}/`;
  }

  return `${base}/${normalizedPath}`;
}
