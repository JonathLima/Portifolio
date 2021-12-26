import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-right: 5rem;
`

export const ImageMoon = styled.svg`
  position: absolute;
  float: right;
  cursor: pointer;
  &.add {
    visibility: visible;
  }

  &.remove {
    visibility: hidden;
  }
  @media (max-width: 720px) {
    justify-content: center;
    float: center;
  }
`
export const ImageSun = styled.svg`
  float: right;
  position: relative;
  right: 0.5rem;
  bottom: 0.2rem;
  cursor: pointer;

  &.add {
    visibility: visible;
  }
  &.remove {
    visibility: hidden;
  }
  @media (max-width: 720px) {
    justify-content: center;
    float: center;
  }
`
