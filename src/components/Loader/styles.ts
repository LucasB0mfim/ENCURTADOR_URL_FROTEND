import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 25vw;

  @media (min-width: ${breakpoints.fullHd}) {
    top: 11vw;
  }
`
