import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({theme}) => theme.background};
  color: ${({theme}) => theme.text};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Overpass', Arial, sans-serif;
  font-size: 2rem;
`;

Button.defaultProps = {
  theme: {
    background: "#FFFFFF"
  }
}