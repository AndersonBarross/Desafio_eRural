import {
  Container,
  Grid,
  Logo,
  PhoneImage,
  DescriptionContainer,
  MainText,
  SecondaryText,
  InputContainer,
  ButtonContainer,
  Anime,
  StyledInput,
} from "./styled";
import styled from "styled-components";
import { ReactComponent as LogoImage } from "../../assets/logo.svg";
import phoneImage from "../../assets/video-call.png";
import Input from "../../components/input";
import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/button";
import { useHistory } from "react-router";
import Lottie from "react-lottie";
import animationData from "../../assets/bull.json";

const Home = () => {
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handleChangeRoomName = (e: ChangeEvent<HTMLInputElement>) =>
    setRoomName(e.target.value);

  const handleClick = () => {
    history.push("/room", { username, roomName });
  };

  useEffect(() => {
    setIsButtonEnabled(
      username.trim().length > 0 && roomName.trim().length > 0
    );
  }, [username, roomName]);

  return (
    <Container>
      <>
        <Grid>
          <Logo>
            <LogoImage height="64" width="64" fill="#FFF" />
            <span>eRural</span>
          </Logo>
          <PhoneImage src={phoneImage} alt="phone image" />
        </Grid>
        <Grid justify="center">
          <Anime>
            <Lottie
              options={defaultOptions}
              width={400}
              height={210}
              direction={animationState.direction}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />
          </Anime>
          <DescriptionContainer>
            <MainText>Abra uma sala de transmissão</MainText>
            <SecondaryText>Crie uma sala de transmissão</SecondaryText>
          </DescriptionContainer>
          <InputContainer>
            <StyledInput
              onChange={handleChangeUsername}
              value={username}
              placeholder="Coloque seu nome aqui"
            />
            <StyledInput
              onChange={handleChangeRoomName}
              value={roomName}
              placeholder="Nome da sua sala"
            />
          </InputContainer>
          <ButtonContainer onClick={handleClick}>
            <Button disabled={!isButtonEnabled}>Crie a sala</Button>
          </ButtonContainer>
        </Grid>
      </>
    </Container>
  );
};

export default Home;
