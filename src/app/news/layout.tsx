import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News - TechFocus',
  description: 'Stay updated with TechFocus latest news, product releases, and industry insights',
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
} 