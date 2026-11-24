import { Inter, Source_Serif_4 } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' });

export const metadata = {
  title: { default: 'CIDSSE 2028 | IEEE Conference, Dhaka', template: '%s | CIDSSE 2028' },
  description: 'International Conference on Computational Intelligence, Data Science and Software Engineering, 28–29 January 2028, Daffodil International University, Dhaka.',
  openGraph: { title: 'CIDSSE 2028', description: '28–29 January 2028 · Daffodil Smart City, Dhaka' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${serif.variable}`}>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}