import Link from 'next/link'
import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there... <br />
          This Is My Personal Web Portfolio
        </SectionTitle>
        <SectionText>
          I'm a Full-stack Developer who using NextJs and Golang for the tech
          stack. Go check out my projects below...
        </SectionText>
        <Link href='#projects'>
          <Button>Learn More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
)

export default Hero
