import { AiEncouraged } from './AiEncouraged';
import { ClosingCta } from './ClosingCta';
import { EntryRequirements } from './EntryRequirements';
import { Hero } from './Hero';
import { HowToSubmit } from './HowToSubmit';
import { Judging } from './Judging';
import { Mission } from './Mission';
import { Prizes } from './Prizes';
import { Resources } from './Resources';
import { WhatToBuild } from './WhatToBuild';

export default function Main() {
  return (
    <main className="flex-1 text-white" role="main">
      <Hero />
      <Mission />
      <Prizes />
      <WhatToBuild />
      <AiEncouraged />
      <EntryRequirements />
      <Judging />
      <Resources />
      <HowToSubmit />
      <ClosingCta />
    </main>
  );
}
