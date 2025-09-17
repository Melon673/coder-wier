// import './globals.css';
// import { Inter } from 'next/font/google';
// import { Box, CssBaseline, ThemeProvider } from '@mui/material';
// import { theme } from '@/Components/ThemeProvider/ThemeProvider';
// import NewFooterSSR from '@/Components/NewComponents/NewFooter/NewFooterSSR';
// import Navbar from '@/Components/common/Header/Navebar';

// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '600', '700'],
//   variable: '--font-inter',
//   display: 'swap',
// });

// function getImgOrigin() {
//   try {
//     const base = process.env.NEXT_PUBLIC_IMG_LINK || '';
//     if (!base || !base.startsWith('http')) return null;
//     return new URL(base).origin; // e.g. https://devtechub.com
//   } catch {
//     return null;
//   }
// }

// export const metadata = {
//   title: 'Coders Wire',
//   description: 'Your meta description here',
// };

// export default function RootLayout({ children }) {
//   const imgOrigin = getImgOrigin();

//   return (
//     <html lang="en">
//       <head>
//         {imgOrigin && (
//           <>
//             <link rel="preconnect" href={imgOrigin} crossOrigin="" />
//             <link rel="dns-prefetch" href={imgOrigin} />
//           </>
//         )}
//       </head>
//       <body className={`${inter.className} ${inter.variable}`}>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <Box sx={{ marginBottom: { md: '4%', xs: '17%', sm: '9%' } }}>
//             <Navbar />
//           </Box>
//           {children}
//           <NewFooterSSR />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
import './globals.css';
import { Inter } from 'next/font/google';
import NewFooterSSR from '@/Components/NewComponents/NewFooter/NewFooterSSR';
import Navbar from '@/Components/common/Header/Navebar';
import { Box } from '@mui/material';
import ThemeRegistry from './ThemeRegistry';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

function getImgOrigin() {
  try {
    const base = process.env.NEXT_PUBLIC_IMG_LINK || '';
    if (!base || !base.startsWith('http')) return null;
    return new URL(base).origin;
  } catch {
    return null;
  }
}

export const metadata = {
  title: 'Coders Wire',
  description: 'Your meta description here',
};

export default function RootLayout({ children }) {
  const imgOrigin = getImgOrigin();

  return (
    <html lang="en">
      <head>
        {imgOrigin && (
          <>
            <link rel="preconnect" href={imgOrigin} crossOrigin="" />
            <link rel="dns-prefetch" href={imgOrigin} />
          </>
        )}
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        <ThemeRegistry>
          <Box sx={{ marginBottom: { xs: '17%', sm: '9%', md: '4%' } }}>
            <Navbar />
          </Box>
          {children}
          <NewFooterSSR />
        </ThemeRegistry>
      </body>
    </html>
  );
}
