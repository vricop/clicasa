import Image from 'next/image'

export default function Brands({ children }) {
  return (
    <section className="brands-wrapper">
      <div className="container brands">
        <header className="brands__header">
          <h2 className="brands__header__heading">
            Trabajamos con las mejores empresas
          </h2>
          <p className="brands__header__tagline">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>
        <div className="brands__items">
          <Image
            layout="responsive"
            alt="Inmoseguros, seguros inmobiliarios"
            src="/images/inmoseguros-370x192.png"
            srcset="/images/inmoseguros@2x-740x384.png 2x, /images/inmoseguros@3x-1110x576.png 3x"
            width={370}
            height={192}
          />
          <Image
            layout="responsive"
            alt="Seguros Mapfre"
            src="/images/mapfre-370x192.png"
            srcset="/images/mapfre@2x-740x384.png 2x, /images/mapfre@3x-1110x576 3x"
            width={370}
            height={192}
          />
        </div>
      </div>
    </section>
  )
}
