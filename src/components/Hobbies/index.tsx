import * as S from './Styles'

const Hobbies = () => {
  return (
    <>
      <S.Wrapper>
        <S.H2 id="hobbies">HOBBIES</S.H2>
        <S.MainContainer>
          <S.Container>
            <S.Container1>
              <S.Link
                href="https://www.artstation.com/eezy"
                target="_blank"
                rel="noopener"
              >
                <S.Logo1 src="/img/artstation-logo.png" alt="artstation-logo" />
                <S.Text1>Concept Arts</S.Text1>
              </S.Link>
            </S.Container1>
            <S.Container1>
              <S.Link
                href="https://www.twitch.tv/eezyjb"
                target="_blank"
                rel="noopener"
              >
                <S.Logo1 src="/img/twitch-logo.png" alt="twitch-logo" />
                <S.Text1>Live streaming</S.Text1>
              </S.Link>
            </S.Container1>
          </S.Container>
        </S.MainContainer>
      </S.Wrapper>
    </>
  )
}

export default Hobbies
