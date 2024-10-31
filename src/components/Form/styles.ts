import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.aside`
  height: 40vh;
`

export const FormBar = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
`

export const Input = styled.input`
  width: 50vw;
  height: 5vh;
  border: none;
  border-radius: 10px 0px 0px 10px;
  background: ${colors.blackLight};
  padding-left: 5px;
  outline: none;

  @media (min-width: ${breakpoints.fullHd}) {
    height: 8vh;
    font-size: 2vh;
    padding-left: 10px;
  }
`

export const SendButton = styled.button`
  height: 5vh;
  width: 12vw;
  border: none;
  border-radius: 0 10px 10px 0;
  background: ${colors.blackLight};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 3vh;
    transition: transform 0.2s ease;
  }

  &:active img {
    transform: scale(0.8);
  }

  @media (min-width: ${breakpoints.fullHd}) {
    height: 8vh;
    width: 8vw;
  }
`

export const DivCopy = styled.div`
  position: absolute;
  top: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 2vh;
    width: 100%;


    @media (min-width: ${breakpoints.fullHd}) {
      font-size: 3vh;
    }
  }

  @media (min-width: ${breakpoints.fullHd}) {
    top: 10vw;
  }
`

export const CopyButton = styled.button<{ active: boolean }>`
  cursor: pointer;
  border: none;
  padding: 0;
  border-radius: 10px;
  background: ${({ active }) => (active ? colors.green : colors.blackLight)};
  height: 8vh;
  width: 8vh;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 8vw;
    transition: transform 0.2s ease;

    @media (min-width: ${breakpoints.fullHd}) {
      width: 2vw;
    }
  }

  &:active img {
    transform: scale(0.8);
  }

  @media (min-width: ${breakpoints.fullHd}) {
    height: 10vh;
    width: 10vh;
  }
`
