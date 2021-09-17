import NavDesktop from '../components/nav-desktop'
import NavMobile from '../components/nav-mobile'

export default function Home() {
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
    </>
  )
}
