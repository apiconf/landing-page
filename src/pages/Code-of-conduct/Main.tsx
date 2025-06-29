import {
  consequences,
  enforcementRights,
  expectedBehaviors,
  reportingOptions,
  scopeAreas,
  unacceptableBehaviors,
  values
} from './constants';

import { BulletList } from './BulletList';
import { ContactBox } from './ContactBox';
import { ReportingList } from './ReportingList';
import { Section } from './Section';
import { ValueItem } from './ValueItem';

export default function Main() {
  return (
    <main className="flex-1 bg-dark-purple text-white" role="main">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12 pb-8 border-b-2 border-gray-600">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Code of Conduct
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            API Conference Lagos 2025
          </p>
        </header>

        <Section id="commitment" title="Our Commitment">
          <div className="space-y-4 text-gray-200 leading-relaxed">
            <p className="text-lg">
              API Conference Lagos is dedicated to providing a harassment-free conference experience for everyone.
            </p>
            <p className="text-lg">
              We are committed to creating an inclusive environment where all participants can learn, network, and collaborate safely.
            </p>
          </div>
        </Section>

        <Section id="values" title="Our Values">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ValueItem 
                key={index}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </Section>

        <Section id="expected-behavior" title="Expected Behavior">
          <BulletList 
            items={expectedBehaviors}
            description="All conference participants are expected to:"
            bulletColor="text-purple-400"
          />
        </Section>

        <Section id="unacceptable-behavior" title="Unacceptable Behavior">
          <BulletList 
            items={unacceptableBehaviors}
            description="The following behaviors are considered harassment and will not be tolerated:"
            bulletColor="text-red-400"
          />
        </Section>

        <Section id="scope" title="Scope">
          <BulletList 
            items={scopeAreas}
            description="This Code of Conduct applies to all conference spaces, including:"
            bulletColor="text-blue-400"
          />
        </Section>

        <Section id="reporting" title="Reporting">
          <div>
            <p className="text-gray-200 text-lg mb-6">
              If you experience or witness unacceptable behavior, please report it immediately to:
            </p>
            <ReportingList options={reportingOptions} />
            <p className="text-gray-200 leading-relaxed">
              All reports will be handled with discretion and confidentiality.
            </p>
          </div>
        </Section>

        <Section id="enforcement" title="Enforcement">
          <BulletList 
            items={enforcementRights}
            description="Conference organizers have the right and responsibility to:"
            bulletColor="text-yellow-400"
          />
        </Section>

        <Section id="consequences" title="Consequences">
          <div className="space-y-4 text-gray-200 leading-relaxed mb-6">
            <p className="text-lg">
              Participants asked to stop any harassing behavior are expected to comply immediately.
            </p>
            <p className="text-lg">
              If a participant engages in harassing behavior, conference organizers may take any action they deem appropriate, including:
            </p>
          </div>
          <BulletList 
            items={consequences}
            bulletColor="text-orange-400"
          />
        </Section>

        <ContactBox />

        <footer className="mt-12 pt-8 border-t border-gray-600 text-center text-gray-400">
          <p className="text-sm leading-relaxed mb-4 italic">
            This Code of Conduct is adapted from the Contributor Covenant and other open source community guidelines. We reserve the right to revise this Code of Conduct at any time.
          </p>
          <p className="text-sm">
            <strong className="text-gray-300">Last Updated</strong>: June 2025
          </p>
        </footer>
      </div>
    </main>
  );
}