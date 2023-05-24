import styled from 'styled-components';
import { Button } from './Button'

export const ThemeButton = styled(Button)`
  font-size: 1rem;
`;

ThemeButton.defaultProps = {
  theme: {
    background: "#BF4F74"
  }
}