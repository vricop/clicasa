import Svg from './svg'

export default function NavMobile({ children }) {
  return (
    <div>
      <nav className="container nav-mobile">{children}</nav>
    </div>
  )
}

NavMobile.Button = function Button() {
  return (
    <div className="nav-mobile-control">
      <button
        aria-label="Toggle menu"
        type="button"
        className="hamburguer-button">
        <span className="hamburguer-button__line" data-side="top"></span>
        <span className="hamburguer-button__line" data-side="middle"></span>
        <span className="hamburguer-button__line" data-side="bottom"></span>
      </button>
      <Svg width="7.875em" height="2.125em" icon="clicasa" />
    </div>
  )
}

NavMobile.Nav = function Nav() {
  return <div>{}</div>
}

NavMobile.SocialNav = function SocialNav() {
  return (
    <div>
      <ul className="social-nav">
        <li>
          <a href="tel:+34910123456" aria-label="Teléfono">
            <Svg width="2.5rem" icon="phone" />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=+346112233"
            aria-label="WhatsAPP">
            <Svg width="2.5rem" icon="whatsapp" />
          </a>
        </li>
        <li>
          <a href="/email" aria-label="Email">
            <Svg width="2.5rem" icon="email" />
          </a>
        </li>
      </ul>
    </div>
  )
}
