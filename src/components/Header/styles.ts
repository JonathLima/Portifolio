import styled from 'styled-components'

export const Wrapper = styled.nav`
  color: #dfe1e6;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  box-shadow: 1px 5px 28px 5px rgba(0, 0, 0, 0);
  border-bottom: solid 0.1rem rgba(223, 225, 230, 0.1);
  top: 0;
  left: 0;
  background-color: #182446;

  &.navigation-wrapper {
    position: relative;
  }

  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`

export const Header = styled.header`
  justify-content: space-between;
  align-content: center;
  display: flex;
  flex-direction: row;
  padding: 2.5rem;
  margin-right: 5rem;
`

export const Ul = styled.ul`
  display: flex;
  @media (max-width: 1200px) {
    position: relative;
    float: right;
    left: 0;
    margin: 1rem;
  }
`

export const Li = styled.li`
  /* margin-top: 1.5rem; */
  list-style: none;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    visibility: hidden;
    position: absolute;
  }
`

export const Menu = styled.a`
  font-size: 1.7rem;
  color: #dfe1e6;
  text-align: center;
  text-decoration: none;
  margin: 1.5rem;
  &:hover {
    filter: brightness(200%);
    transition: 0.5s;
  }
`

export const LightDark = styled.li`
  padding-top: 1rem;
  margin-left: 3rem;
  list-style: none;
  &hover {
    transition: fill 2s;
  }

  @media (max-width: 1200px) {
    /* margin-left: 5.5rem; */
  }
`
