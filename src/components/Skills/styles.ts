import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15rem;
`

export const ContainerList = styled.div`
  display: grid;
  width: 75%;
  position: relative;
  top: 50rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  opacity: 0;
  animation: slideup 2s forwards;

  @keyframes slideup {
    to {
      transform: translateY(-50rem);
      opacity: 1;
    }
  }
`
export const Skill = styled.img`
  background-color: #182446;
  width: 13rem;
  height: 13rem;
  margin: 2rem auto;
  box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.2);
  border-radius: 1.5rem;
  &:hover {
    transform: scale(1.2);
    transition: 0.2s ease;
  }
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
