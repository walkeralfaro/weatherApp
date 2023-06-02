import styled from 'styled-components';

export const ContainerMenus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2rem 0;

  @media screen and (max-width:770px) {
    &.menus-wrap{
      flex-direction: row;
      justify-content: space-around;
      width: 100%;

    }
  }
` 