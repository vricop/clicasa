export default function CallToAction({
  title,
  description,
  buttonLabel,
  backgroundImage,
  className,
  href = '#',
}) {
  className = ['call-to-action-wrapper', className || ''].join(' ')

  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={className}>
      <div className="container call-to-action">
        <header className="call-to-action__header">
          <h2 className="call-to-action__header__heading">{title}</h2>
          <p className="call-to-action__header__tagline">{description}</p>
        </header>
        <a className="call-to-action__button" href={href}>
          {buttonLabel}
        </a>
      </div>
    </section>
  )
}
