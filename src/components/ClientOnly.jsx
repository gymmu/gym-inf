import { useState, useEffect } from "react";

/**
 * ClientOnly component - only renders children on the client side
 * Prevents SSR/SSG errors for browser-only components
 */
export default function ClientOnly({ children, fallback = null }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return fallback;
  }

  return <>{children}</>;
}
