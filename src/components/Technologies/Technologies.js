import React from 'react';
import { DiFirebase, DiReact, DiCode } from "react-icons/di";
import { IoIosCog, IoMdStopwatch } from "react-icons/io";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      With a background in Computer Science, I've worked with a range of
      technologies for both Software Development and Quality Assurance.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            MySQL <br />
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>OOL</ListTitle>
          <ListParagraph>
            Java <br />
            C++
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <IoIosCog size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>QA - Manual Testing</ListTitle>
          <ListParagraph>
            Postman <br />
            Swagger <br />
            Android Debug Bridge (ADB)<br />
            Charles Proxy<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <IoMdStopwatch size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>QA - Automation</ListTitle>
          <ListParagraph>
            Selenium <br />
            Cypress <br />
            Appium - (WIP)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
