import styled from 'styled-components';
import * as v from '../variables'
import { Button } from './Button';

export const ButtonMenu = styled(Button)`
  background-color: ${({theme}) => theme.backgroundButton};
  border: 1px solid ${v.blue};
  font-size: 1.6rem;
  padding: 1rem;
  cursor: pointer;
  border-radius: 8px;
  appearance:none;
  outline:none;
  &:hover {
    box-shadow: 3px 3px 0px 0px rgba(194,194,194,0.75);
  }
`