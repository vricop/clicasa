import Svg from './svg'

export default function CoreValues({ children }) {
  return (
    <section>
      <div className="container core-values">
        <div className="core-values__header">
          <h2 className="core-values__header__heading">
            En Clicasa sólo hay ventajas
          </h2>
          <p className="core-values__header__tagline">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="core-values-items">
          <div className="core-values-items__item">
            <Svg
              className="core-values-items__item__icon"
              icon="time"
              width="3.75em"
              style={{ color: 'var(--bs-gray-500)' }}
            />
            <h3 className="core-values-items__item__title">Oferta en 24 h</h3>
            <p className="core-values-items__item__description">
              No te preocupes de su estado, ni de reparaciones para eneseñarlo
            </p>
          </div>
          <div className="core-values-items__item">
            <Svg
              className="core-values-items__item__icon"
              icon="wallet"
              width="3.75em"
              style={{ color: 'var(--bs-gray-500)' }}
            />
            <h3 className="core-values-items__item__title">Pago inmediato</h3>
            <p className="core-values-items__item__description">
              No te preocupes de su estado, ni de reparaciones para eneseñarlo
            </p>
          </div>
          <div className="core-values-items__item">
            <Svg
              className="core-values-items__item__icon"
              icon="paperplane"
              width="3.75em"
              style={{ color: 'var(--bs-gray-500)' }}
            />
            <h3 className="core-values-items__item__title">
              Ahórrate el papeleo
            </h3>
            <p className="core-values-items__item__description">
              Si lo necesitas también podemos ayudarte a encontrar tu nuevo
              hogar
            </p>
          </div>
          <div className="core-values-items__item">
            <Svg
              className="core-values-items__item__icon"
              icon="calendar"
              width="3.75em"
              style={{ color: 'var(--bs-gray-500)' }}
            />
            <h3 className="core-values-items__item__title">
              Tu eliges la fecha
            </h3>
            <p className="core-values-items__item__description">
              Si lo necesitas también podemos ayudarte a encontrar tu nuevo
              hogar
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
