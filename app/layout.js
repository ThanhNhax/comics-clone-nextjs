import { Inter } from 'next/font/google';
import './globals.css';
import HeaderPage from './components/HeaderPage';
import FooterPage from './components/FooterPage';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'NetTruyen - Đọc truyện tranh online - Truyện gì cũng có',
};
export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body
        className={`${inter.className} bg-main-bg `}
        suppressHydrationWarning={true}
      >
        <HeaderPage />
        <main className='max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-5 py-12 bg-white'>
          {children}
        </main>
        <FooterPage />
      </body>
    </html>
  );
}
