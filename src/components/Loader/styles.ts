import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 10vw;


  @media (max-width: ${breakpoints.mobileLarge}) {
    top: 25vw;
  }

  @media (min-width: ${breakpoints.tablet}) {
    top: 11vw;
  }

  @media (min-width: ${breakpoints.desktop}) {
    top: 11.5vw;
  }

  @media (min-width: ${breakpoints.fullHd}) {
    top: 11.5vw;
  }
`
