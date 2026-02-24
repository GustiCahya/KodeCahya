import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Gusti Cahya - Front-end Developer | Next.js, React, TypeScript',
  description: 'Crafting beautiful, responsive, and performant web interfaces with modern front-end technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
