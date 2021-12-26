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
  margin-bottom: 5rem;
  font-size: 4.5rem;
  opacity: 0;
  animation: opacity 3s forwards;

  @keyframes opacity {
    to {
      opacity: 1;
    }
  }
`

export const Container = styled.div`
  width: 100%;
  margin-bottom: 10rem;
  margin-top: 5rem;
`
export const Div = styled.a`
  background: black;
  display: flex;
  border-radius: 1rem;
  align-items: center;
  padding: 5rem;
  justify-content: center;
  font-size: 50px;
  cursor: pointer;
  color: #dfe1e6;
  font-weight: 500;
  height: 300px;
  max-height: 100vh;
`
export const ImgWorks = styled.img`
  width: 300rem;
  height: 31rem;
`
export const Dots = styled.div`
  margin-bottom: 15rem;
`
export const Button = styled.button`
  &.dot {
    border: none;
    width: 1.5rem;
    height: 1.5rem;
    background: #dfe1e6;
    border-radius: 50%;
    margin: 0 2rem;
    padding: 5px;
    cursor: pointer;
  }

  &.dots {
    display: flex;
    padding: 1rem 0;
    justify-content: center;
  }

  &.dot:focus {
    outline: none;
  }

  &.dot.active {
    background: #182446;
    border: solid 0.1rem #dfe1e6;
  }
`
