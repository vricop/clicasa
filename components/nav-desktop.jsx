import Svg from './svg'

export default function NavDesktop({ children }) {
  return (
    <div>
      <nav className="container nav-desktop">{children}</nav>
    </div>
  )
}

NavDesktop.Logo = function Logo() {
  return (
    <div className="nav-desktop__logo">
      <Svg width="13.0625em" height="3.4375em" icon="clicasa" />
    </div>
  )
}

NavDesktop.Nav = function Nav() {
  return (
    <div className="nav-desktop__nav">
      <ul className="nav-desktop__nav__menu">
        <li>
          <a className="nav-desktop__nav__menu__link" href="/vender">
            Vender
          </a>
        </li>
        <li>
          <a className="nav-desktop__nav__menu__link" href="/comprar">
            Comprar
          </a>
        </li>
        <li>
          <a
            className="nav-desktop__nav__menu__link"
            href="/yoelijocliComprarcpiso">
            #YoElijoClicPiso
          </a>
        </li>
        <li>
          <a className="nav-desktop__nav__menu__link" href="/por-que-clicpiso">
            ¿Por qué clicpiso
          </a>
        </li>
      </ul>
    </div>
  )
}

NavDesktop.SocialNav = function SocialNav() {
  return (
    <div className="nav-desktop__social-nav">
      <ul className="nav-desktop__social-nav__menu">
        <li>
          <a href="tel:+34910123456" aria-label="Teléfono">
            <Svg
              width="2.5rem"
              icon="phone"
              style={{ color: 'var(--bs-primary)' }}
            />
            <style jsx>{`
              @media (max-width: 65em) {
                span {
                  display: none;
                }
              }

              a {
                display: grid;
                gap: 0.5ch;
                grid-auto-flow: column;
                align-items: center;
                color: var(--bs-gray-800);
                text-decoration: none;
                font-size: 1.25em;
              }
            `}</style>
            910 123 456
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=+346112233"
            aria-label="WhatsAPP">
            <Svg
              width="2.5rem"
              icon="whatsapp"
              style={{ color: 'var(--bs-whatsapp)' }}
            />
          </a>
        </li>
        <li>
          <a href="/email" aria-label="Email">
            <Svg
              width="2.5rem"
              icon="email"
              style={{ color: 'var(--bs-primary)' }}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}
