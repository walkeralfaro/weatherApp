import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.text};
  font-family: 'Overpass', Arial, sans-serif;
  font-weight: 300;
  cursor: pointer;
  border: none;
`;