import { FC } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
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
`;

export const NavBar: FC = () => {
  return (
    <NavbarContainer>
      <NavLink href='/'>
        <Logo>
          <Icon src="/assets/logo.svg" alt="Logo" />
        </Logo>
      </NavLink>
      <NavLink href="/documentation">documentation</NavLink>
    </NavbarContainer>
  );
};