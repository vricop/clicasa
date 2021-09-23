import Brands from '../components/brands'
import CallToAction from '../components/call-to-action'
import CoreValues from '../components/core-values'
import HeroHeader from '../components/hero-header'
import Steps from '../components/steps'

export default function Home({ steps, brands }) {
  return (
    <>
      <HeroHeader />
      <CoreValues />
      <Steps>
        {steps.map(({ id, ...restProps }) => (
          <Steps.Step key={id} id={id} {...restProps} />
        ))}
      </Steps>
      <CallToAction
        className="our-rates-cta"
        title="Las mejores condiciones del mercado inmobiliario"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonLabel="Descubre nuestras tarifas"
        backgroundImage="/images/cta.jpg"
      />
      <Brands>
        {brands.map(({ id, ...restProps }) => (
          <Brands.Logo key={id} {...restProps} />
        ))}
      </Brands>
      <CallToAction
        className="real-state-cta"
        title="¿Buscas casa? También tenemos las mejores ofertas"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonLabel="Ver inmuebles"
        backgroundImage="/images/room-375x280.jpg"
      />
    </>
  )
}

export async function getServerSideProps() {
  const response1 = await fetch(`${process.env.BASE_URL}/api/steps`, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*',
    },
  })
  const steps = await response1.json()

  const response2 = await fetch(`${process.env.BASE_URL}/api/brands`, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*',
    },
  })
  const brands = await response2.json()

  return {
    props: { steps, brands },
  }
}
