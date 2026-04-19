import { useEffect, useState } from 'react';

interface MainProps {
  testDate?: string; 
}

export default function Main({ testDate }: MainProps) {
  const [currentDay, setCurrentDay] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [animateCard, setAnimateCard] = useState(false);
  const [isEventEnded, setIsEventEnded] = useState(false);

  const questions: { [key: number]: string } = {
    1: "Meaning of APIs (wrong answers only)?",
    2: "What's one highlight, quote, or vibe from this conference you'll never forget?"
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const today = testDate ? new Date(testDate) : new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth() + 1;
      const currentDate = today.getDate();

      if (currentYear > 2025 || (currentYear === 2025 && currentMonth > 7) || (currentYear === 2025 && currentMonth === 7 && currentDate > 19)) {
        setIsEventEnded(true);
        setCurrentDate('July 18th - 19th, 2025');
      } else if (currentYear === 2025 && currentMonth === 7) {
        if (currentDate === 18) {
          setCurrentDay(1);
          setCurrentDate('Friday, July 18th');
        } else if (currentDate === 19) {
          setCurrentDay(2);
          setCurrentDate('Saturday, July 19th');
        } else {
          setCurrentDay(null);
          setCurrentDate('July 18th - 19th, 2025');
        }
      } else {
        setCurrentDay(null);
        setCurrentDate('July 18th - 19th, 2025');
      }

      setIsLoading(false);
      setTimeout(() => setAnimateCard(true), 300);
    }, 800);

    return () => clearTimeout(timer);
  }, [testDate]);

  if (isLoading) {
    return (
      <main className="flex w-full flex-1 min-h-screen bg-white">
        <div className="min-h-full w-full flex-1">
          <div className="relative mx-auto flex w-full flex-col justify-center items-center gap-12 px-4 pb-8 pt-48 md:top-[2%] md:w-[85%] md:gap-x-[clamp(1rem,7%,3rem)] md:px-0 lg:top-[6%] lg:pt-52 xl:top-[10%]">
            <div className="flex-1 md:max-w-[640px] text-center">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-gray-300 border-t-primary-black rounded-full animate-spin mx-auto mb-4"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-transparent border-t-gray-400 rounded-full animate-spin"></div>
              </div>
              <h1 className="text-balance font-sans text-4xl font-bold leading-[100%] tracking-[-0.045rem] text-primary-black sm:text-5xl md:text-[3.5rem] md:tracking-[-0.08rem] lg:text-[4rem]">
                APICONF
              </h1>
              <p className="font-sans text-lg text-primary-black/70 mt-4">
                Loading conference data...
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (isEventEnded) {
    return (
      <main className="flex w-full flex-1 min-h-screen bg-white">
        <div className="min-h-full w-full flex-1">
          <div className="relative mx-auto flex w-full flex-col justify-center items-center gap-12 px-4 pb-8 pt-48 md:top-[2%] md:w-[85%] md:gap-x-[clamp(1rem,7%,3rem)] md:px-0 lg:top-[6%] lg:pt-52 xl:top-[10%]">
            <div className="flex-1 md:max-w-[640px] text-center">
              <h1 className="text-balance font-sans text-4xl font-bold leading-[100%] tracking-[-0.045rem] text-primary-black sm:text-5xl md:text-[3.5rem] md:tracking-[-0.08rem] lg:text-[4rem]">
                APICONF
                <br />
                Thank You for Attending!
              </h1>
              <div className="mt-4 flex max-w-fit flex-1 flex-col items-center justify-center md:mt-8">
                <p className="font-base font-sans text-3xl text-primary-black md:text-4xl lg:text-5xl">
                  {currentDate}
                </p>
                <p className="font-sans text-lg text-primary-black/70 mt-4">
                  APICONF Lagos 2025 has concluded. Thank you for joining us for two days of incredible API discussions, insights, and networking! Stay tuned for updates on future events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (currentDay === null) {
    return (
      <main className="flex w-full flex-1 min-h-screen bg-white">
        <div className="min-h-full w-full flex-1">
          <div className="relative mx-auto flex w-full flex-col justify-center items-center gap-12 px-4 pb-8 pt-48 md:top-[2%] md:w-[85%] md:gap-x-[clamp(1rem,7%,3rem)] md:px-0 lg:top-[6%] lg:pt-52 xl:top-[10%]">
            <div className="flex-1 md:max-w-[640px] text-center">
              <h1 className="text-balance font-sans text-4xl font-bold leading-[100%] tracking-[-0.045rem] text-primary-black sm:text-5xl md:text-[3.5rem] md:tracking-[-0.08rem] lg:text-[4rem]">
                APICONF
                <br />
                Lagos 2025 Coming Soon!
              </h1>
              <div className="mt-4 flex max-w-fit flex-1 flex-col items-center justify-center md:mt-8">
                <p className="font-base font-sans text-3xl text-primary-black md:text-4xl lg:text-5xl">
                  {currentDate}
                </p>
                <p className="font-sans text-lg text-primary-black/70 mt-4">
                  Get ready for two days of amazing API discussions, insights, and networking! Check back during the conference for daily interactive questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex w-full flex-1 min-h-full bg-white">
      <div className="min-h-full w-full flex-1">
        <div className="relative mx-auto flex w-full flex-col justify-center items-center gap-12 py-12 px-8 lg:py-40">
          <div className="flex-1 md:max-w-[640px] text-center">
            <h1 className="text-balance font-sans text-4xl font-bold leading-[100%] tracking-[-0.045rem] text-primary-black sm:text-5xl md:text-[3.5rem] md:tracking-[-0.08rem] lg:text-[4rem]">
              APICONF
              <br />
              Day {currentDay}
            </h1>
            <div className="mt-4 flex flex-1 flex-col items-center justify-center md:mt-8">
              <p className="font-base font-sans text-3xl text-primary-black md:text-4xl lg:text-5xl">
                {currentDate}
              </p>
            </div>
            <div className={`mt-8 transform transition-all duration-1000 ${animateCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gray-100 rounded-2xl p-8 shadow-md">
                <h2 className="text-base md:text-3xl font-semibold text-primary-black text-center mb-4">
                  Today's Question
                </h2>
                <div className="w-24 h-1 bg-primary-black rounded-full mx-auto mb-6"></div>
                <p className="text-sm md:text-2xl text-primary-black leading-relaxed text-center font-medium">
                  {questions[currentDay]}
                </p>
              </div>
              <div className="mt-6 bg-gray-100 rounded-2xl p-6 shadow-md">
                <div className="flex items-center justify-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-16 bg-primary-black rounded-full flex items-center justify-center">
                      <span className="text-2xl text-white hidden md:flex">✍️</span>
                    </div>
                  </div>
                  <div className="flex-grow text-center">
                    <p className="text-sm md:text-xl font-bold text-primary-black mb-2">
                      Please write your answer on the whiteboard!
                    </p>
                    <p className="text-primary-black/80 text-sm md:text-lg">
                      Your response will be shared with all conference attendees and displayed on our community board.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm md:text-lg text-primary-black/70">
                  Thank you for participating in APICONF! 🚀
                </p>
                <p className="text-primary-black/60 text-sm md:text-base">
                  Let's build the future of APIs together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
