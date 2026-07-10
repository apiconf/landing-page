import Footer from '@/components/Footer/index';
import Main from './Main';
import NavBar from '@/components/NavBar';
import ScrollToAnchor from '@/components/ScrollToAnchor';
import { useEffect } from 'react';

export default function Hackathon() {
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
