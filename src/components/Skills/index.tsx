import * as S from './styles'
const Skills = () => {
  return (
    <>
      <S.Wrapper id="skills">
        <S.H2>SKILLS</S.H2>
        <S.ContainerList>
          <S.Skill src="/img/html-logo.png" alt="Imagem com a logo do html" />
          <S.Skill src="/img/css3-logo.png" alt="Imagem com a logo do css" />
          <S.Skill
            src="/img/ts-logo.png"
            alt="Imagem com a logo do typescript"
          />
          <S.Skill
            src="/img/react-logo.png"
            alt="Imagem com a logo do react.js"
          />
          <S.Skill
            src="/img/node-logo.png"
            alt="Imagem com a logo do node.js"
          />
          <S.Skill src="/img/git-logo.png" alt="Imagem com a logo do git" />
          <S.Skill
            src="/img/terminal-logo.png"
            alt="Imagem com a logo do terminal"
          />
          <S.Skill
            src="/img/csharp-logo.png"
            alt="Imagem com a logo do csharp"
          />
          <S.Skill
            src="/img/flutter-logo.png"
            alt="Imagem com a logo do flutter"
          />
          <S.Skill src="/img/py-logo.png" alt="Imagem com a logo do python" />
        </S.ContainerList>
      </S.Wrapper>
    </>
  )
}

export default Skills
