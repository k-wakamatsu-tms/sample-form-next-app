import 'ress/dist/ress.min.css';
import '@/styles/global.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'Nextjs latest starter',
  description: 'Generated by nextjs latest starter',
  icons: {
    icon: '/favicon.ico',
  },
};
