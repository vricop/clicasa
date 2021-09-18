import CoreValues from '../components/core-values'
import HeroHeader from '../components/hero-header'
import RatesCTA from '../components/rates-cta'
import Steps from '../components/steps'

export default function Home() {
  return (
    <>
      <HeroHeader />
      <CoreValues />
      <Steps>
        <Steps.Step
          active
          heading="Descríbemos tu inmueble"
          tagline="No te preocupes de su estado, ni de reparaciones para eneseñarlo"
        />
        <Steps.Step
          heading="Recibe una oferta en 24 horas"
          tagline="Piénsatela!"
        />
        <Steps.Step
          heading="Dinos hasta cuando quieres quedarte"
          tagline="Nos ajustamos a tus necesidades, cuando tu estés listo nosotros también lo estaremos"
        />
        <Steps.Step
          heading="Ya está!"
          tagline="Firma la venta y recibe el dinero"
        />
      </Steps>
      <RatesCTA />
    </>
  )
}
