import { StepsProvider, useStepsProvider } from './steps-context'

function StepsContent({ children }) {
  const { imageRef, stepsRef } = useStepsProvider()

  return (
    <section className="steps-section">
      <div className="container steps-content">
        <header className="steps-content__header">
          <h2 className="steps-content__header__heading">
            Vender tu piso nunca fue tan fácil
          </h2>
          <p className="steps-content__header__tagline">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>
        <div ref={stepsRef} className="steps-content__items">
          {children}
        </div>
        <footer className="steps-content__footer">
          <img
            ref={imageRef}
            width="1030"
            height="534"
            src="/images/man-laptop-typing-1030x534.jpg"
            alt="Man typing in a laptop while using Clicasa website"
          />
        </footer>
      </div>
    </section>
  )
}

export default function Steps({ children }) {
  return (
    <StepsProvider>
      <StepsContent {...{ children }} />
    </StepsProvider>
  )
}

Steps.Step = function Step({ active, heading, tagline, thumbnail, alt, id }) {
  const { updateCurrentActiveStep } = useStepsProvider()

  return (
    <article
      onClick={updateCurrentActiveStep}
      data-active={active}
      id={id}
      className="step">
      <h3 className="step__header__heading">{heading}</h3>
      <p className="step__header__tagline">{tagline}</p>
      <figure className="step__thumbnail aspect-ratio">
        <img width="346" height="179" src={thumbnail} alt={alt} />
      </figure>
    </article>
  )
}
