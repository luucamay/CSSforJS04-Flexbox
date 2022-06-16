import React from 'react';
import SHOES from '../../data';
import ShoeCard from '../ShoeCard';
import styled from 'styled-components/macro';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
`;

export default ShoeGrid;
