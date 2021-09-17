import NavDesktop from './nav-desktop'
import NavMobile from './nav-mobile'

export default function Layout({ children }) {
  return (
    <>
      <NavDesktop>
        <NavDesktop.Logo />
        <NavDesktop.Nav />
        <NavDesktop.SocialNav />
      </NavDesktop>
      <NavMobile>
        <NavMobile.Button />
        <NavMobile.SocialNav />
      </NavMobile>
      {children}
    </>
  )
}
