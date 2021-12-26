import { useState } from 'react'
import * as S from './styles'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 1,
    mode: 'free-snap',
    spacing: 15,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    breakpoints: {
      '(min-width: 768px)': {
        slidesPerView: 2,
        mode: 'free-snap'
      },
      '(min-width: 1200px)': {
        slidesPerView: 3,
        mode: 'free-snap',
        spacing: 50
      }
    }
  })
  return (
    <>
      <S.Wrapper id="works" className="navigation-wrapper">
        <S.H2>WORKS</S.H2>
        <S.Container ref={sliderRef} className="keen-slider">
          <S.Div
            className="keen-slider__slide number-slide1"
            href="https://brave-panini-933caa.netlify.app/"
            target="_blank"
            rel="noopener"
          >
            <S.ImgWorks
              src="/img/pokememory-work.png"
              alt="Imagem com link para o projeto do pokememory"
            />
          </S.Div>
          <S.Div
            className="keen-slider__slide number-slide2"
            href="https://zen-ramanujan-41b9b4.netlify.app/"
            target="_blank"
            rel="noopener"
          >
            <S.ImgWorks
              src="/img/cronom-work.png"
              alt="Imagem com link para o projeto do cronometro"
            />
          </S.Div>
          <S.Div
            className="keen-slider__slide number-slide3"
            href="https://eloquent-panini-bd38fd.netlify.app/"
            target="_blank"
            rel="noopener"
          >
            <S.ImgWorks
              src="/img/sorteia-work.png"
              alt="Imagem com link para o projeto do sorteia-me"
            />
          </S.Div>
          <S.Div
            className="keen-slider__slide number-slide4"
            href="https://todolist-one-delta.vercel.app/"
            target="_blank"
            rel="noopener"
          >
            <S.ImgWorks
              src="/img/todolist-work.png"
              alt="Imagem com link para o projeto do to-do-list"
            />
          </S.Div>
          <S.Div
            className="keen-slider__slide number-slide5"
            href="https://objective-brown-89b7df.netlify.app/"
            target="_blank"
            rel="noopener"
          >
            <S.ImgWorks
              src="/img/videoplayer-work.png"
              alt="Imagem com link para o projeto do videoplayer"
            />
          </S.Div>
          <S.Div
            className="keen-slider__slide number-slide6"
            href="https://cocky-kirch-9cba47.netlify.app/"
            target="_blank"
            rel="noopener"
          >
            <S.ImgWorks
              src="/img/churras-work.png"
              alt="Imagem com link para o projeto do churrascômetro"
            />
          </S.Div>
        </S.Container>

        {slider && (
          <S.Dots className="dots">
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <S.Button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx)
                  }}
                  className={'dot' + (currentSlide === idx ? ' active' : '')}
                />
              )
            })}
          </S.Dots>
        )}
      </S.Wrapper>
    </>
  )
}

export default Works
