import styled from 'styled-components';

export const ContainerUp = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width:770px) {
    .resumen-wrap {
      display: none;
    }
  }
` 