'use client';

import React, { useMemo, useRef } from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@/Components/ThemeProvider/ThemeProvider';

function createEmotionCache() {
  // prepend true => MUI styles injected first for stable order
  return createCache({ key: 'mui', prepend: true });
}

export default function ThemeRegistry({ children }) {
  const cache = useMemo(() => createEmotionCache(), []);
  const prevInsert = useRef(cache.insert);
  const inserted = [];

  // Track styles generated during this render
  cache.insert = (...args) => {
    const [, serialized] = args;
    if (!cache.inserted[serialized.name]) {
      inserted.push(serialized.name);
    }
    return prevInsert.current(...args);
  };

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${inserted.join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: inserted.map(name => cache.inserted[name]).join(''),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
