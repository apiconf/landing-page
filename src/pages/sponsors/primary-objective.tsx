import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import Tabs from './tabs';

function TabChildCreator({ activeTab }: { activeTab: string }) {
  switch (activeTab) {
    case 'primary-objectives-charts':
      return <PrimaryObjectiveCharts />;
    case 'objectives-met':
      return <ObjectivesMet />;
    case 'attendee-engagement':
      return <AttendeeEngagement />;
    case 'demo-space':
      return <DemoSpace />;
    case 'future-sponsorship':
      return <FutureSponsorship />;
    case 'plans-for-2024':
      return <Plansfor2024 />;
    default:
      return null;
  }
}

interface CircularProgressProps {
  percentage: number;
  caption: string;
  color?: string;
  size?: number;
}

function CircularProgress({
  percentage = 0,
  caption = '',
  color = '#4536DD',
  size = 120,
}: CircularProgressProps) {
  const radius = 40;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;

  const rawProgress = useMotionValue(0);
  const animatedProgress = useSpring(rawProgress, { duration: 1, damping: 20, stiffness: 100 });
  const strokeOffset = useTransform(
    animatedProgress,
    (p) => circumference - (p / 100) * circumference
  );
  const displayText = useTransform(animatedProgress, (p) => `${Math.round(p)}%`);

  useEffect(() => {
    rawProgress.set(percentage);
  }, [percentage, rawProgress]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="h-full w-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="#e6e6e6"
            strokeWidth={strokeWidth}
            className="opacity-25"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeOffset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span className="text-xl font-semibold">{displayText}</motion.span>
        </div>
      </div>
      <div className="mt-4 line-clamp-2 max-w-36 text-center text-base font-medium leading-snug">
        {caption}
      </div>
    </div>
  );
}

interface BarChartProps {
  data: { label: string; value: number }[];
}

function BarChart({ data }: BarChartProps) {
  return (
    <div className="w-full max-w-[80%] md:max-w-lg">
      {data.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center">
            <span className="w-32 text-base font-medium text-primary-black">{item.label}</span>
            <div
              className={`h-6 flex-1 overflow-hidden rounded-xl ${item.value > 0 ? '' : 'bg-[#EBEBEB]'}`}
            >
              <motion.div
                className="h-full rounded-xl"
                style={{ backgroundColor: '#4536DD' }}
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1, ease: 'easeOut', delay: index * 0.2 }}
              />
            </div>
            <span className="w-8 rotate-90 text-center text-sm text-primary-black">
              {item.value}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function PrimaryObjectiveCharts() {
  return (
    <>
      <div className="sponsor-radial-bg mb-8 mt-[4.5rem] w-full">
        <div className="flex w-full flex-col flex-wrap justify-center gap-x-12 gap-y-12 py-20 text-3xl md:mx-auto md:w-fit md:flex-row md:px-[5.5rem] lg:gap-x-4">
          <CircularProgress percentage={20} caption="Brand awareness" />
          <CircularProgress percentage={40} caption="In-Person Conversations" />
          <CircularProgress percentage={60} caption="Product Demos and Showcase" />
          <CircularProgress percentage={80} caption="Lead Generation" />
          <CircularProgress percentage={100} caption="Keynote and Speaking Sessions" />
        </div>
      </div>
      <p className="w-full text-center text-[2rem] font-medium text-[#A6A6A6]">
        Primary Objectives
      </p>
    </>
  );
}

function ObjectivesMet() {
  const chartData = [
    { label: 'Strongly agree', value: 40 },
    { label: 'Agree', value: 60 },
    { label: 'Neutral', value: 0 },
    { label: 'Disagree', value: 0 },
    { label: 'Strongly disagree', value: 0 },
  ];

  return (
    <>
      <div className="sponsor-radial-bg mb-8 mt-[4.5rem] w-full">
        <div className="flex w-full justify-center py-20 text-3xl md:mx-auto md:px-[5.5rem]">
          <BarChart data={chartData} />
        </div>
      </div>
      <p className="w-full text-center text-[2rem] font-medium text-[#A6A6A6]">
        Sponsorship met objectives
      </p>
    </>
  );
}

function AttendeeEngagement() {
  const chartData = [
    { label: 'Strongly agree', value: 70 },
    { label: 'Agree', value: 30 },
    { label: 'Neutral', value: 0 },
    { label: 'Disagree', value: 0 },
    { label: 'Strongly disagree', value: 0 },
  ];

  return (
    <>
      <div className="sponsor-radial-bg mb-8 mt-[4.5rem] w-full">
        <div className="flex w-full justify-center py-20 text-3xl md:mx-auto md:px-[5.5rem]">
          <BarChart data={chartData} />
        </div>
      </div>
      <p className="w-full text-center text-[2rem] font-medium text-[#A6A6A6]">
        Satisfied with attendee engagement
      </p>
    </>
  );
}

function DemoSpace() {
  const chartData = [
    { label: 'Strongly agree', value: 70 },
    { label: 'Agree', value: 30 },
    { label: 'Neutral', value: 0 },
    { label: 'Disagree', value: 0 },
    { label: 'Strongly disagree', value: 0 },
  ];

  return (
    <>
      <div className="sponsor-radial-bg mb-8 mt-[4.5rem] w-full">
        <div className="flex w-full justify-center py-20 text-3xl md:mx-auto md:px-[5.5rem]">
          <BarChart data={chartData} />
        </div>
      </div>
      <p className="w-full text-center text-[2rem] font-medium text-[#A6A6A6]">
        Satisfied with demo space appearance
      </p>
    </>
  );
}

function FutureSponsorship() {
  const chartData = [
    { label: 'True', value: 100 },
    { label: 'False', value: 0 },
  ];

  return (
    <>
      <div className="sponsor-radial-bg mb-8 mt-[4.5rem] w-full">
        <div className="flex w-full justify-center py-20 text-3xl md:mx-auto md:px-[5.5rem]">
          <BarChart data={chartData} />
        </div>
      </div>
      <p className="w-full text-center text-[2rem] font-medium text-[#A6A6A6]">
        Plans to sponsor in 2025
      </p>
    </>
  );
}

function Plansfor2024() {
  const chartData = [
    { label: 'Participate at same level', value: 70 },
    { label: 'Consider higher level', value: 30 },
    { label: 'Lower level', value: 0 },
  ];

  return (
    <>
      <div className="sponsor-radial-bg mb-8 mt-[4.5rem] w-full">
        <div className="flex w-full justify-center py-20 text-3xl md:mx-auto md:px-[5.5rem]">
          <BarChart data={chartData} />
        </div>
      </div>
      <p className="w-full text-center text-[2rem] font-medium text-[#A6A6A6]">
        Plans for 2024 sponsorship
      </p>
    </>
  );
}

export default function PrimaryObjective() {
  return (
    <section className="w-full bg-[#000] px-6 py-16 md:px-24 md:py-32 lg:px-32">
      <h2 className="mb-6 text-[2rem] font-bold text-white md:text-[4rem]">
        Brand Engagement and Interaction
      </h2>
      <small className="text-lg text-[#F1F1F1]">Lorem ipsum test</small>
      <div className="mb-16 mt-12 md:mb-32 md:mt-16">
        <Tabs
          tabs={[
            { id: 'primary-objectives-charts', label: 'Primary Objectives' },
            { id: 'objectives-met', label: 'Objectives Met' },
            { id: 'attendee-engagement', label: 'Attendee Engagement' },
            { id: 'demo-space', label: 'Demo Space' },
            { id: 'future-sponsorship', label: 'Future Sponsorship' },
            { id: 'plans-for-2024', label: 'Plans for 2024' },
          ]}
          defaultTab="primary-objectives-charts"
        >
          {(activeTab) => <TabChildCreator activeTab={activeTab} />}
        </Tabs>
      </div>
      <div className="text-white">
        <span className="text-4xl font-bold md:text-5xl">Sponsor APIConf Lagos 2025</span>
        <p className="mb-12 mt-4 max-w-[32rem] text-2xl font-medium">
          Connect with over 1,000 API professionals and let your brand be at the center of the
          action.
        </p>
        <div className="flex flex-col gap-x-8 gap-y-12 md:flex-row">
          <a
            href="https://drive.google.com/file/d/1TYEN5HVH8_7ofGNpq2FoVniPskh6wXXe/view"
            rel="noopener noreferrer"
            target="_blank"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[20rem] bg-[#2F20BF] p-6 sm:px-4 sm:py-8 md:w-fit md:px-16 lg:py-8"
          >
            <span className="text-2xl font-bold text-white">View Sponsorship Deck</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1TYEN5HVH8_7ofGNpq2FoVniPskh6wXXe/view"
            rel="noopener noreferrer"
            target="_blank"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[20rem] bg-[#90EAF2] p-6 sm:px-4 sm:py-8 md:w-fit md:px-16 lg:py-8"
          >
            <span className="text-2xl font-bold text-[#000]">Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
