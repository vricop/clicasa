export default function Svg({ icon, width = '1em', height, href, ...attrs }) {
  height = height || width
  href = href || '/images/sprite.svg'

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      {...{ width, height, href, ...attrs }}>
      <use href={`${href}#${icon}`} />
    </svg>
  )
}
