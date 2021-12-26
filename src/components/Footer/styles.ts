import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  background-color: #182446;
  font-size: 1.5rem;
  bottom: 50;
  left: 0;
  clear: both;
  z-index: 10;
  padding: 5rem;
  border-top: 0.1rem solid #dfe1e6;
  text-align: center;
  color: #dfe1e6;
  @media (max-width: 567em) {
    .footer {
      height: 700px;
    }
  }
`
