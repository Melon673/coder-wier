'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const NProgressHandler = () => {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();

    // Slight delay to simulate loading
    const timer = setTimeout(() => {
      NProgress.done();
    }, 300); // you can increase to 800ms if needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default NProgressHandler;
