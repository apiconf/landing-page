import Footer from '../../components/Footer/index';
import NavBar from '../../components/NavBar';
import ScrollToAnchor from '../../components/ScrollToAnchor';

const venueAddress =
  'Plot 9, Gbagada Industrial Scheme, beside UPS, Gbagada-Oworonshoki Expressway, Lagos';

const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=The+Zone%2C+Plot+9%2C+Gbagada+Industrial+Scheme%2C+Lagos';

export default function Venue() {
  return (
    <div className="flex min-h-[100svh] w-full flex-col bg-dark-purple">
      <header role="banner">
        <NavBar />
      </header>

      <main className="flex-1 bg-[#F6F4FF] px-[5.9701%] py-14 md:px-[7.4074%] md:py-20">
        <section className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#2F20BF]">
              Conference venue
            </p>
            <h1 className="text-4xl font-bold leading-tight text-[#1F1F1F] md:text-6xl">
              Find your way to The Zone
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-700 md:text-xl">
              API Conference Lagos 2026 takes place at The Zone in Gbagada. Use the map below to
              plan your journey and open turn-by-turn directions.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border-2 border-[#A6A6A6] bg-white shadow-sm">
            <iframe
              title="Map showing The Zone, Gbagada"
              src="https://www.google.com/maps?q=The+Zone,+Plot+9,+Gbagada+Industrial+Scheme,+Lagos&output=embed"
              className="h-[24rem] w-full border-0 md:h-[34rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1F1F1F]">The Zone</h2>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-gray-700">
                  {venueAddress}
                </p>
                <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-[#2F20BF]">
                  Hall access: Ruby is the main hall. Emerald and Sapphire are accessible through
                  the main reception.
                </p>
              </div>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#2F20BF] px-6 py-3 font-bold text-white transition hover:bg-[#251377]"
              >
                Get directions
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToAnchor />
    </div>
  );
}
