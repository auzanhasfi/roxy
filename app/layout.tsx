import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'], 
  variable: '--font-poppins' 
});

export const metadata: Metadata = {
  title: 'Roxy Jember | A New Lifestyle Standard',
  description: 'Destinasi belanja, hiburan, kuliner, dan gaya hidup modern untuk keluarga Jember.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-[#F5F1EA] text-[#111111] antialiased selection:bg-[#D7F04B] selection:text-[#111111]" suppressHydrationWarning>{children}</body>
    </html>
  );
}
