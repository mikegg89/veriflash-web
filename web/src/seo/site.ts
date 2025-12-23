export function getSiteUrl(): string {
  const fromEnv = (import.meta as any).env?.VITE_SITE_URL as string | undefined;
  if (fromEnv && fromEnv.trim().length) return fromEnv.replace(/\/+$/, "");
  return window.location.origin;
}

export function canonicalForPath(pathname: string): string {
  const base = getSiteUrl();
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}


