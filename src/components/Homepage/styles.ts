import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  margin-top: 15rem;
  margin-bottom: 15rem;
  flex-direction: column;

  @media (max-width: 1200px) {
    justify-content: center;
    margin-bottom: 8rem;
    align-items: center;
    overflow: hidden;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
  }

  @media (max-width: 520px) {
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`

export const Profile = styled.img`
  width: 20rem;
  height: 20rem;
  border: solid 0.2rem #dfe1e6;
  border-radius: 50%;
  opacity: 0;
  animation: opacity 3s forwards;

  @keyframes opacity {
    to {
      opacity: 1;
    }
  }

  @media (max-width: 520px) {
    justify-content: center;
    align-items: center;
    margin: none;
  }
`
export const Me = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  margin-left: 5rem;
  justify-content: center;

  @media (max-width: 1200px) {
    margin: 0;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  justify-content: center;
  @media (max-width: 520px) {
    margin-left: 0;
    margin-top: 3rem;
    justify-content: center;
    align-items: center;
  }
`
export const H2 = styled.h2`
  color: #dfe1e6;
  font-size: 2.5rem;
  font-weight: 200;

  &.typing {
    width: 26.5rem;
    animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-size: 2.5rem;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`

export const Parag1 = styled.p`
  color: #dfe1e6;
  font-size: 3.5rem;
  font-weight: bold;
  position: relative;
  opacity: 0;
  animation: opacity 3s forwards;

  @keyframes opacity {
    to {
      opacity: 1;
      transform: translateY(50rem);
    }
  }
`
export const Parag2 = styled.p`
  color: #dfe1e6;
  font-size: 1.8rem;
  font-weight: 200;
  opacity: 0;
  animation: opacity 3s forwards;

  @keyframes opacity {
    to {
      opacity: 1;
      transform: translateY(50rem);
    }
  }
`

export const WhiteBar = styled.div`
  position: absolute;
  margin: 10rem;
  width: 25rem;
  transform: rotate(90deg);
  background-color: #dfe1e6;
  border: solid 0.3rem #dfe1e6;
  border-radius: 20rem;
  opacity: 0;
  animation: opacity 3s forwards;

  @keyframes opacity {
    to {
      opacity: 1;
      transform: translateY(50rem);
    }
  }

  @media (max-width: 1200px) {
    visibility: hidden;
  }
`

export const Media = styled.ul`
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    margin-top: 5rem;
    width: 100%;
  }

  @media (max-width: 520px) {
    justify-content: center;
    align-items: center;
    width: 20%;
  }
`
export const Li = styled.li`
  list-style: none;
`

export const List = styled.a`
  position: relative;
  left: 5rem;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  justify-content: center;
  opacity: 0;
  animation: opacity 3s forwards;

  @keyframes opacity {
    to {
      opacity: 1;
    }
  }
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    position: relative;
    left: 0;
  }
  @media (max-width: 520px) {
    justify-content: center;
    align-items: center;
  }
`

export const Link = styled.img`
  box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.2);
  width: 8rem;
  height: 8rem;
  margin: 3rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
    transition: 0.2s ease-in-out;
  }
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 520px) {
    justify-content: center;
    align-items: center;
    width: 5.5rem;
    margin: 1.5rem;
    height: 5.5rem;
  }
`
