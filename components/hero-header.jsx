import Svg from './svg'

export default function HeroHeader({ children }) {
  return (
    <header className="hero-header-wrapper">
      <div className="container hero-header">
        <h1 className="hero-header__title">
          Vende tu casa
          <br />
          en un <strong className="hero-header-title__bold">clic</strong>
        </h1>
        <form className="search-form" action="">
          <Svg className="search-form__icon" width="1.625em" icon="home" />
          <label aria-hidden="true" hidden htmlFor="">
            Introduce la dirección de tu casa o piso
          </label>
          <input
            className="search-form__input"
            type="text"
            placeholder="Introduce la dirección de tu casa o piso"
          />
          <button className="search-form__button" type="submit">
            Vender mi inmueble
          </button>
        </form>
        <div className="hero-header__cta">
          <p className="hero-header__cta__tagline">
            Compramos tu casa directamente
            <br />
            sin complicaciones ni preocupaciones.
          </p>
          <button type="button" className="hero-header__cta__button">
            Ver vídeo
          </button>
        </div>
      </div>
    </header>
  )
}
