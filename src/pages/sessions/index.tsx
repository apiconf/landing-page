import Footer from '../../components/Footer/index';
import NavBar from '../../components/NavBar';
import { Schedule } from './schedule';
import ScrollToAnchor from '../../components/ScrollToAnchor';
import { useEffect } from 'react';
import { useSchedule } from '../../hooks/useSchedule';

const Main = () => {
  const {
    scheduleData,
  } = useSchedule();


  return (
    <main className="">
      <div className="">
        <Schedule
          data={scheduleData}
        />
      </div>
    </main>
  );
};

export default function Sessions() {
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