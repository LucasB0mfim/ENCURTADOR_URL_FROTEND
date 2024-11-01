import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const FooterBar = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;

  p {
    padding: 10px;
    color: ${colors.white};
    display: flex;
    font-size: 12px;
    justify-content: center;

    @media (min-width: ${breakpoints.fullHd}) {
      font-size: 2vh;
    }
  }
`
