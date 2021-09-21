import Image from 'next/image'

export default function Brands({ children, details }) {
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
        <div className="brands__items">{children}</div>
      </div>
    </section>
  )
}

Brands.Logo = function Logo(props) {
  return <Image layout="responsive" {...props} />
}
