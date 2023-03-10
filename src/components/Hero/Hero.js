import Link from 'next/link';
import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there... <br />
          This Is My Personal Web Portfolio
        </SectionTitle>
        <SectionText>
          I'm learning web development especially using Javascripts, ReactJs,
          NodeJs, and Golang(I'm excited about it). Go check out my projets
          below...
        </SectionText>
        <Link href='#projects'>
          <Button>Learn More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
