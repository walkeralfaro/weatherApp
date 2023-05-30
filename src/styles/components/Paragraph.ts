import styled from 'styled-components';
import * as v from '../variables'

export const Paragraph = styled.p`
  background-color: ${({theme}) => theme.backgroundButton};
  color: ${({theme}) => theme.text};
  width: 60rem;
  font-size: 1.8rem;
  font-weight: 200;
  padding: 1rem;
  border: 1px solid ${v.blue};
  margin: 0;
  border-radius: 8px;
` 