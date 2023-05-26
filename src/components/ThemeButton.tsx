
import { FC } from 'react'
import styled from 'styled-components';
import { Button } from '../styles/components/Button';


const Path = styled.path`
  fill: transparent;
  &.moon {
    fill: ${({theme}) => theme.fillMoon};
  };
  &.sun {
    fill: ${({theme}) => theme.fillSun}
  }
`

interface ThemeButtonProps {
  onClick: () => void;
}

export const ThemeButton: FC<ThemeButtonProps> = ({onClick}) => {
  return (
    <Button onClick={onClick}>
      <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <Path className="sun" fill-rule="evenodd" d="M36 0c1 0 1 1 1 1l2 11 11 2s1 0 1 1v2l-6 9 6 8v2c0 1-1 1-1 1l-11 2-2 11s0 1-1 1h-2l-8-6-9 6h-2l-1-1-2-11-11-2s-1 0-1-1v-2l6-8-6-9v-2l1-1 11-2 2-11 1-1h2l9 6 8-6h2zM16 26c0-6 4-10 10-10 5 0 9 4 9 10a8.96 8.96 0 0 1-9 9c-6 0-10-4-10-9zm22 0c0-4-1-7-3-10-3-2-6-3-9-3-4 0-7 1-10 3-2 3-3 6-3 10 0 3 1 6 3 9 3 2 6 3 10 3 3 0 6-1 9-3 2-3 3-6 3-9z"/>
        <Path className="moon" fill-rule="evenodd" d="M29 0C15 0 4 11 4 25s11 26 25 26c7 0 13-3 18-8 0 0 1-1 0-2 0 0-1-1-2-1s-2 1-3 1c-11 0-20-9-20-20 0-8 4-14 10-18 1 0 1-1 1-2 0 0-1-1-2-1h-2z"/>
      </svg>
    </Button>

  )
}
