import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          William Mark Tattrie <br />
          Quality Assuarance Specialist
        </SectionTitle>
        <SectionText>
          Quality Assurance Specialist with 2+ years of experience in the
          technical field. Looking to help build quality solutions and improve
          test efficiency. Experienced in manual/automation testing for Web-based applications, Media
          applications, and Mobile applications.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;