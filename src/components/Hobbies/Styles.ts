import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
`

export const H2 = styled.h2`
  color: #dfe1e6;
  font-weight: 100;
  text-align: center;
  margin-bottom: 5rem;
  font-size: 4.5rem;
  opacity: 0;
  animation: opacity 3s forwards;

  @media (max-width: 620px) {
    text-align: center;
  }

  @keyframes opacity {
    to {
      opacity: 1;
    }
  }
`
export const MainContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 15rem;
  margin-top: 5rem;

  @media (min-width: 820px) {
    grid-auto-flow: column;
    grid-gap: 30rem;
  }
`
export const Container1 = styled.div`
  width: 22rem;
  height: 22rem;
  position: relative;
  top: 50rem;
  border-radius: 2rem;
  background-color: #182446;
  box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.2);
  opacity: 0;
  animation: up 2s forwards;

  @keyframes up {
    to {
      transform: translateY(-50rem);
      opacity: 1;
    }
  }
`
export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`

export const Logo1 = styled.img`
  width: 20rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    transform: scale(1.2);
    transition: 0.2s ease;
  }
`
export const Text1 = styled.p`
  font-weight: 100;
  text-align: center;
  font-size: 2.5rem;
  margin-top: 5rem;
  color: #dfe1e6;
`
