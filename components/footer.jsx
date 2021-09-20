import Svg from './svg'

export default function Footer({ children }) {
  return (
    <footer>
      <div className="container footer-wrapper">
        <a
          style={{ display: 'inline-block' }}
          href="/"
          aria-label="Go to homepage">
          <Svg icon="clicasa" width="13.0625em" height="3.4375em" />
        </a>
        <nav className="footer-links" aria-label="Sumarized navigation">
          <a className="footer-links__item" href="#mapa-web">
            Mapa web
          </a>
          <a className="footer-links__item" href="#contacto">
            Contacto
          </a>
          <a className="footer-links__item" href="#aviso-legal">
            Aviso legal
          </a>
        </nav>
        <nav className="contact-info" aria-label="Contact links">
          <a
            className="contact-info__link"
            href="tel:+34910123456"
            aria-label="Teléfono">
            <Svg
              width="1.75em"
              icon="phone"
              style={{ color: 'var(--bs-primary)' }}
            />
            910 123 456
          </a>
          <a
            className="contact-info__link"
            href="mailto:info@clicasa.com?subject=Información"
            aria-label="Email">
            <Svg
              width="1.75em"
              icon="email"
              style={{ color: 'var(--bs-gray-600)' }}
            />
            info@clicasa.com
          </a>
        </nav>
        <p className="footer-legal">
          &copy; 2017 Clicasa. todos los derechos reservados
        </p>
        <ul className="footer-social-links">
          <li>
            <a href="">
              <Svg
                width="1.75em"
                icon="facebook"
                style={{ color: 'var(--bs-facebook)' }}
              />
            </a>
          </li>
          <li>
            <a href="">
              <Svg
                width="1.75em"
                icon="twitter"
                style={{ color: 'var(--bs-twitter)' }}
              />
            </a>
          </li>
          <li>
            <a href="">
              <Svg
                width="1.75em"
                icon="linkedin"
                style={{ color: 'var(--bs-linkedin)' }}
              />
            </a>
          </li>
          <li>
            <a href="">
              <Svg
                width="1.75em"
                icon="youtube"
                style={{ color: 'var(--bs-youtube)' }}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
