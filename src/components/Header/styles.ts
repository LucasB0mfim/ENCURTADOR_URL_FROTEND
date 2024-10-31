import styled from "styled-components";
import { breakpoints } from "../../styles";

export const HeaderBar = styled.main`
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Roboto", sans-serif;

    @media (min-width: ${breakpoints.fullHd}) {
      font-size: 10vh;
    }
  }
`
