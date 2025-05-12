import { Roboto } from 'next/font/google';
import 'remixicon/fonts/remixicon.css';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Anupam Tripathi',
  description: 'Designer, Copywriter & Marketer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* The Shery.js CSS will be loaded in page.js with a useEffect to ensure it loads client-side */}
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}