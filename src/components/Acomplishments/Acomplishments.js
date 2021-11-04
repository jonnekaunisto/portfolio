import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 4, text: 'CHI & ACM Conference Publications'},
  { number: 3, text: 'UX Projects', },
  { number: 1, text: 'Masters in Human Computer Interaction', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index}>
          <boxNum>
            {card.number}+</boxNum>
          <BoxText> {card.text}</BoxText>
        </Box>
      ))} 
    </Boxes>
  </Section>
);

export default Acomplishments;
