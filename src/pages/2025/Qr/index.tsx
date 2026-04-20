import Footer from '@/components/2025/Footer/index';
import Main from './Main';
import NavBar from '@/components/2025/NavBar';
import ScrollToAnchor from '@/components/2025/ScrollToAnchor';
import { useEffect } from 'react';

export default function CodeOfConduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex min-h-[100svh] w-full flex-col bg-dark-purple">
      <header role="banner">
        <NavBar />
      </header>
      <Main />
      <Footer />
      <ScrollToAnchor />
    </div>
  );
}
