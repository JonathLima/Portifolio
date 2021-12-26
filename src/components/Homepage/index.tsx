import * as S from './styles'
const Homepage = () => {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Me>
            <S.Profile
              src="/img/profile-user.png"
              alt="Imagem de perfil com Jonathan Silva"
            />
            <S.Text>
              <S.H2 className="typing">Hello world, my name is</S.H2>
              <S.Parag1>JONATHAN SILVA</S.Parag1>
              <S.Parag2>SELF-TAUGHT JUNIOR DEVELOPER</S.Parag2>
            </S.Text>
          </S.Me>
          <S.Media>
            <S.Li>
              <S.List
                href="https://github.com/JonathSilva"
                target="_blank"
                rel="noopener"
              >
                <S.Link
                  src="/img/github-logo.png"
                  alt="Imagem com link para o github"
                />
              </S.List>
            </S.Li>
            <S.Li>
              <S.List
                href="https://www.linkedin.com/in/jonathsilva/"
                target="_blank"
                rel="noopener"
              >
                <S.Link
                  src="/img/linkedin-logo.png"
                  alt="Imagem com link para o linkedin"
                />
              </S.List>
            </S.Li>
            <S.Li>
              <S.List
                href="mailto:jonathansilvadacostalima@gmail.com"
                target="_blank"
                rel="noopener"
              >
                <S.Link
                  src="/img/email-logo.png"
                  alt="Imagem com link para o email"
                />
              </S.List>
            </S.Li>
            <S.Li>
              <S.List
                href="https://www.instagram.com/eezyjb/"
                target="_blank"
                rel="noopener"
              >
                <S.Link
                  src="/img/instagram-logo.png"
                  alt="Imagem com link para o instagram"
                />
              </S.List>
            </S.Li>
          </S.Media>
          <S.WhiteBar />
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Homepage
