import { useMemo, useState } from 'react';

import Footer from '../../components/Footer/index';
import NavBar from '../../components/NavBar';
import { speakers } from '../speakers/speaker';
import {
  buildSlideUrl,
  slides,
  slidesFolderUrl,
  type SlideCategory,
  type SlideEntry,
} from './slidesData';

const categories: { label: string; value: SlideCategory }[] = [
  { label: 'Conference', value: 'conference' },
  { label: 'Workshop', value: 'workshop' },
];

function initialsFor(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function findSpeakerImage(slide: SlideEntry) {
  const normalizedName = slide.speaker.toLowerCase();
  return speakers.find((speaker) => speaker.name.toLowerCase() === normalizedName)?.image;
}

export default function Slides() {
  const [category, setCategory] = useState<SlideCategory>('conference');
  const [query, setQuery] = useState('');

  const categoryCounts = useMemo(
    () => ({
      conference: slides.filter((slide) => slide.category === 'conference').length,
      workshop: slides.filter((slide) => slide.category === 'workshop').length,
    }),
    [],
  );

  const visibleSlides = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return slides.filter(
      (slide) =>
        slide.category === category &&
        (!normalizedQuery ||
          slide.speaker.toLowerCase().includes(normalizedQuery) ||
          slide.title.toLowerCase().includes(normalizedQuery)),
    );
  }, [category, query]);

  return (
    <div className="min-h-screen bg-[#F6F3FF] text-[#1F1F1F]">
      <div className="bg-[#2F20BF]">
        <NavBar />
      </div>

      <main>
        <section className="overflow-hidden bg-[#2F20BF] px-[5%] pb-16 pt-12 text-white md:px-[7.4074%] md:pb-24 md:pt-20">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#D8FF71]">
              Talks worth revisiting
            </p>
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-4xl">
                <h1 className="font-monument text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-7xl">
                  APIConf Lagos 2026 Slides
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                  Browse the presentation materials shared by this year’s conference speakers and
                  workshop facilitators.
                </p>
              </div>
              <a
                href={slidesFolderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/40 px-6 py-3 font-bold transition hover:border-[#D8FF71] hover:bg-[#D8FF71] hover:text-[#251377] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Browse all files
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="px-[5%] py-12 md:px-[7.4074%] md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[28px] border border-[#2F20BF]/15 bg-white p-4 shadow-[0_20px_70px_rgba(47,32,191,0.09)] md:p-6">
              <label htmlFor="slides-search" className="mb-2 block text-sm font-bold text-[#251377]">
                Find a speaker or session
              </label>
              <div className="relative">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#251377]"
                >
                  <path
                    d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  id="slides-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by speaker or session title"
                  className="min-h-14 w-full rounded-2xl border border-[#2F20BF]/20 bg-[#F8F6FF] py-3 pl-12 pr-4 text-base outline-none transition placeholder:text-black/45 focus:border-[#2F20BF] focus:ring-4 focus:ring-[#2F20BF]/10"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
              <div className="inline-flex rounded-full bg-white p-1.5 shadow-sm">
                {categories.map(({ label, value }) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={category === value}
                    onClick={() => setCategory(value)}
                    className={`min-h-11 rounded-full px-5 py-2 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F20BF] sm:text-base ${
                      category === value
                        ? 'bg-[#2F20BF] text-white shadow-md'
                        : 'text-[#251377] hover:bg-[#ECE8FF]'
                    }`}
                  >
                    {label}{' '}
                    <span className={category === value ? 'text-[#D8FF71]' : 'text-[#251377]/55'}>
                      {categoryCounts[value]}
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-sm font-semibold text-black/55">
                {visibleSlides.length} {visibleSlides.length === 1 ? 'presentation' : 'presentations'}
              </p>
            </div>

            {visibleSlides.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {visibleSlides.map((slide) => {
                  const speakerImage = findSpeakerImage(slide);

                  return (
                    <article
                      key={slide.fileId}
                      className="group flex min-h-[320px] flex-col overflow-hidden rounded-[26px] border border-[#2F20BF]/15 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#2F20BF]/35 hover:shadow-[0_22px_55px_rgba(47,32,191,0.13)]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="rounded-full bg-[#E8FF9A] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[#251377]">
                          {slide.category}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.08em] text-black/40">
                          {slide.fileType === 'google-slides'
                            ? 'Google Slides'
                            : slide.fileType === 'drive-shortcut'
                              ? 'Slides'
                              : slide.fileType}
                        </span>
                      </div>

                      <h2 className="mt-6 text-2xl font-extrabold leading-tight text-[#1F1F1F]">
                        {slide.title}
                      </h2>

                      <div className="mt-auto flex items-center gap-3 pt-7">
                        {speakerImage ? (
                          <img
                            src={speakerImage}
                            alt=""
                            className="h-12 w-12 shrink-0 rounded-full border-2 border-[#2F20BF]/20 object-cover object-center"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#2F20BF] text-sm font-extrabold text-white"
                          >
                            {initialsFor(slide.speaker)}
                          </span>
                        )}
                        <p className="font-bold leading-snug text-[#251377]">{slide.speaker}</p>
                      </div>

                      <a
                        href={buildSlideUrl(slide)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View slides for ${slide.title} by ${slide.speaker}`}
                        className="mt-6 inline-flex min-h-12 items-center justify-between rounded-full bg-[#2F20BF] px-5 py-3 font-bold text-white transition hover:bg-[#251377] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F20BF]"
                      >
                        View slides
                        <span
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          ↗
                        </span>
                      </a>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="mt-8 rounded-[28px] border border-dashed border-[#2F20BF]/35 bg-white px-6 py-16 text-center">
                <p className="text-2xl font-extrabold text-[#251377]">No presentations found</p>
                <p className="mt-2 text-black/60">
                  Try another speaker name, session title, or category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
