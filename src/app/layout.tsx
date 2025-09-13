import '../app/globals.css';

export const metadata = {
  title: "Flowmazone",
  description: "We make ayour wallet cry",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className='' >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
