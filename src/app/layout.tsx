import Link from 'next/link';
import '../app/globals.css';
import { title } from 'process';
export const metadata = {
  title: "Flowmazone",
  description: "We make ayour wallet cry",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className=''>

        {children}
        </main>
      </body>
    </html>
  );
}
