import styled from "styled-components";
import { GridProps } from "./types";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, #e97e13, #1e6511);
  display: grid;
  grid-template-columns: 50% 50%;
  overflow: hidden;

  @media (max-width: 880px) {
    grid-template-columns: 100%;
    height: auto;
    padding: 20px 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 100%;
  padding: 100px 0 50px 100px;
  span {
    font-family: "Lilita One", sans-serif;
    font-size: 42px;
    letter-spacing: 0.2rem;
    color: #fff;
    &:hover {
      width: 130%;
    }
  }

  @media (max-width: 880px) {
    padding-left: 0px;
    justify-content: center;
  }
`;

export const Grid = styled.div<GridProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify ?? "flex-start"};
`;

export const PhoneImage = styled.img`
  width: 55%;
  align-self: center;
  &:hover {
    width: 65%;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  font-family: "Lilita One", sans-serif;
  color: #fff;
  font-weight: bold;
  margin-bottom: 50px;
  letter-spacing: 0.2rem;

  @media (max-width: 880px) {
    text-align: center;
  }
`;

export const MainText = styled.h1`
  font-size: 42px;
  padding-right: 20px;
`;

export const SecondaryText = styled.h2`
  font-size: 24px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 50px;

  input {
    margin-right: 20px;
  }

  @media (max-width: 880px) {
    flex-direction: column;
    align-items: center;
    input {
      margin-top: 10px;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;

  @media (max-width: 880px) {
    display: flex;
    justify-content: center;
  }
`;

export const Anime = styled.div`
  margin-right: 100px;
`;

export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: white;
    font-weight: 100;
    font-size: 1rem;
  }
`;
