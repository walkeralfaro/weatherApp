import { FC } from 'react';
import styled from 'styled-components';
import { ThemeButton } from '.';

const NavbarContainer = styled.nav`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 0.5rem;
`;

const NavLink = styled.a`
  color: ${ ({theme}) => theme.text };
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 400;
  &:hover{
    color: #4992FF;
  }
`;
const NavLinkContainer = styled.div`
  width:100%;
  display: flex;
  margin: 0 4rem;
`;

interface NavBarProps {
  toggleTheme: () => void;
}

export const NavBar: FC<NavBarProps> = ({toggleTheme}) => {

  return (
    <NavbarContainer>
      <NavLink href='/'>
        <Logo>
          <Icon src="/assets/logo.svg" alt="Logo" />
        </Logo>
      </NavLink>
      <NavLinkContainer>
        <NavLink href="/documentation">documentation</NavLink>
      </NavLinkContainer>
      <ThemeButton onClick={toggleTheme}/>
    </NavbarContainer>
  );
};