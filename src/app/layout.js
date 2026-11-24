import { Inter, Source_Serif_4 } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' });

export const metadata = {
  title: 'IEEE CIDSSE 2028 - Daffodil International University',
  description: 'IEEE International Conference on Computational Intelligence, Data Science and Software Engineering',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${serif.variable}`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}