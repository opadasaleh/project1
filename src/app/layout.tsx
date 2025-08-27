import Link from 'next/link';
import '../app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          
        </nav>
        {children}
      </body>
    </html>
  );
}
