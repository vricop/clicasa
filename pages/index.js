import Brands from '../components/brands'
import CoreValues from '../components/core-values'
import HeroHeader from '../components/hero-header'
import RatesCTA from '../components/rates-cta'
import Steps from '../components/steps'

export default function Home({ steps, brands }) {
  return (
    <>
      <HeroHeader />
      <CoreValues />
      <Steps>
        {steps.map(({ id, ...restProps }) => (
          <Steps.Step
            key={id}
            {...{
              ...restProps,
              ...(id === 1 ? { active: '' } : {}),
            }}
          />
        ))}
      </Steps>
      <RatesCTA />
      <Brands>
        {brands.map(({ id, ...restProps }) => (
          <Brands.Logo key={id} {...restProps} />
        ))}
      </Brands>
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
