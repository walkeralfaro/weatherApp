import styled from 'styled-components';
import { Button } from './Button'

export const ButtonTheme = styled(Button)`

  /* height: 10rem; */
  width: 1rem;

`;

ButtonTheme.defaultProps = {
  theme: {
    background: "#BF4F74"
  }
}