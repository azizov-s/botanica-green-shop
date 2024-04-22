import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import UI from '../../../../../shared/ui'
import CarouselFlawor from '../../../../../shared/assets/images/CarouselFlawor.png'


type PropType = {
  slides: any[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      {/* <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container gap-[10%]">
          {slides.map((index) => (
            <div key={index} className='embla__slide bg-[#F5F5F580] dark:bg-inherit flex items-center justify-between'>
              <div className="py-16 px-10 w-4/5">
                <p className="text-[14px] text-[#3D3D3D]">Welcome to GreenShop</p>
                <h1 className="text-[70px] font-extrabold leading-[70px] my-1.5">Let’s Make a <br />
                  Better <span className="text-[#46A358]">Planet</span>
                </h1>
                <p className="text-[14px] text-[#727272] mb-10 w-5/6">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                <UI.Button size="xl" color="primary">
                  SHOP NOW
                </UI.Button>
              </div>
              <div className="flex items-end w-3/5">
                <img src={CarouselFlawor} className="w-[25%] mb-[35px] mr-[-28%]" alt="" />
                <img src={CarouselFlawor} className="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
