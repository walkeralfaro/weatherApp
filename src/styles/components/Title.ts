import styled from 'styled-components';

export const Title = styled.h1`
  color: ${ ({theme}) => theme.text };
  font-size: 4.5rem;
  /* text-align: center; */
  @media screen and (max-width:500px) {
    font-size: 3rem;
  }
`;