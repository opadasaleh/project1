import '../app/globals.css';

import { Tangerine, Rouge_Script } from 'next/font/google';
export const metadata = {
  title: "Flowmazone",
  description: "We make ayour wallet cry",
};

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-tangerine',
});

const rouge = Rouge_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rouge',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={` ${tangerine.variable} ${rouge.variable} antialiased`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
