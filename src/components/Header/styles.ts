import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const HeaderBar = styled.main`
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Roboto", sans-serif;
    color: ${colors.green};
    font-size: 4vh;

    @media (max-width: ${breakpoints.mobileLarge}) {
      font-size: 5vh;
    }

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 6vh;
    }

    @media (min-width: ${breakpoints.desktop}) {
      font-size: 8vh;
    }

    @media (min-width: ${breakpoints.fullHd}) {
      font-size: 10vh;
    }
  }
`
