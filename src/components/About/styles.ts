import styled from 'styled-components'

export const Wrapper = styled.main`
  text-align: center;
  display: flex;
  margin-top: 5rem;
  flex-direction: column;
  align-items: center;
  @media (max-width: 520px) {
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0;
  }
`
export const H2 = styled.h2`
  color: #dfe1e6;
  margin-bottom: 5rem;
  font-weight: 200;
  font-size: 4.5rem;
  opacity: 0;
  animation: opacity 3s forwards;

  @keyframes opacity {
    to {
      opacity: 1;
    }
  }
`

export const Paragh = styled.p`
  color: #dfe1e6;
  position: relative;
  right: 50rem;
  width: min(100rem, 100%);
  padding-left: 5rem;
  padding-right: 5rem;
  font-weight: 300;
  font-size: 2.5rem;
  text-align: center;
  opacity: 0;
  animation: slide 2s forwards;

  @keyframes slide {
    to {
      transform: translateX(50rem);
      opacity: 1;
    }
  }
`
