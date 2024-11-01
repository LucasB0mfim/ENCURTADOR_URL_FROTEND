import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.aside`
  height: 40vh;
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 0 2vw;

  @media (max-width: ${breakpoints.mobileLarge}) {
    height: 50vh;
  }

  @media (min-width: ${breakpoints.fullHd}) {
    height: 35vh;
  }
`

export const FormBar = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  max-width: 600px;

  > p {
    position: absolute;
    top: 15vw;
    color: ${colors.white};

    @media (max-width: ${breakpoints.tablet}) {
      top: 40vw;
    }

    @media (min-width: ${breakpoints.desktop}) {
      font-size: 2vh;
    }
  }
`

export const Input = styled.input`
  color: ${colors.white};
  font-size: 2.3vh;
  width: 50vw;
  max-width: 80%;
  height: 8vh;
  border: 2px solid ${colors.green};
  border-width: 2px 0 2px 2px;
  border-radius: 10px 0px 0px 10px;
  background: ${colors.greenDark};
  padding-left: 1vw;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${colors.white};
    font-size: 2.3vh;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 100%;
    font-size: 2vh;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 2.5vh;
  }
`

export const SendButton = styled.button`
  width: 5vw;
  max-width: 15%;
  height: 8vh;
  border: 2px solid ${colors.green};
  border-width: 2px 2px 2px 0px;
  border-radius: 0 10px 10px 0;
  background: ${colors.greenDark};
  cursor: pointer;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 4vh;
    transition: transform 0.2s ease;
  }

  &:active img {
    transform: scale(0.8);
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    width: 20vw;
    height: 8vh;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 6vw;
  }
`

export const DivCopy = styled.div`
  position: absolute;
  display: flex;
  top: 10vw;
  width: 10vw;
  height: 8vh;
  align-items: center;
  flex-direction: column;
  border: 2px solid ${colors.green};
  border-radius: 10px;
  background: ${colors.greenDark};

  @media (max-width: ${breakpoints.mobileLarge}) {
    top: 20vw;
    height: 8vh;
    width: 30vw;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 10vw;
    height: 8vh;
  }
`

export const CopyButton = styled.button`
  color: ${colors.white};
  height: 8vh;
  width: 100%;
  border: none;
  border-radius: 10px;
  background: ${colors.greenDark};
  cursor: pointer;
  font-size: 2vh;

  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 1.8vh;
    padding: 1vh 0;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 2vh;
  }
`
