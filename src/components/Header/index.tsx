// import MoonDark from 'components/DarkMode'
import * as S from './styles'

const Header = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Ul>
          <S.Li>
            <S.Menu href="#">Home</S.Menu>
          </S.Li>
          <S.Li>
            <S.Menu href="#about">About</S.Menu>
          </S.Li>
          <S.Li>
            <S.Menu href="#hobbies">Hobbies</S.Menu>
          </S.Li>
          <S.Li>
            <S.Menu href="#skills">Skills</S.Menu>
          </S.Li>
          <S.Li>
            <S.Menu href="#works">Works</S.Menu>
          </S.Li>

          {/* <S.LightDark>
            <MoonDark />
          </S.LightDark> */}
        </S.Ul>
      </S.Header>
    </S.Wrapper>
  )
}

export default Header
