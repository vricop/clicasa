# Clicasa for [proun.es](https://www.proun.es/)

This is fake a project for a Front-end test interview for [proun.es](https://www.proun.es/).

## Aproach

For building the UI I've used sass & Bootstrap just for the `.container` utility and configuring custom properties for theme colors for clicasa.com such as this:

```scss
$theme-colors: (
  'primary': #008bd1,
  'primary-accent': hsl(200, 100%, 20%),
  'greyish-brown': #4a4a4a,
  'warm-grey': #9b9b9b,
  'cool-grey': #a7acae,
  'light-gray': #e5e5e5,
  'whatsapp': #81ce59,
  'facebook': #3a589b,
  'twitter': #598dca,
  'linkedin': #007ab9,
  'youtube': #cf3427,
);

$font-family-base: Lato;

$container-max-widths: (
  xl: 75em,
);

$grid-gutter-width: 1.875rem;
```

Components have been built with CSS grid to simplify the markup
and keep it simple and neat. For components to be more flexible and structured I've used a methodology known as [compound components](https://www.jakewiesler.com/blog/compound-component-basics), this way we can decouple different parts of our component into smaller parts, move them around and add more subcomponents importing just the parent component.

```jsx
import Brands from '../components/brands'
import Steps from '../components/steps'

// <Steps /> component with <Steps.Step /> subcomponent
// Props send within ...restProps are: id, heading, tagline, thumbnail & alt
<Steps>
  {steps.map(({ id, ...restProps }) => (
    <Steps.Step
      key={id}
      {...{
        ...restProps,
        ...(id === 1 ? { active: '' } : {}),
      }}
    />
  ))}
</Steps>

// <Brands /> component with <Brands.Logo /> subcomponent
// Props send within ...restProps are: id, alt, src, srcSet, width & height
<Brands>
  {brands.map(({ id, ...restProps }) => (
    <Brands.Logo key={id} {...restProps} />
  ))}
</Brands>
```

To keep it simple the fake api endpoints have been created with [next.js api routes](https://nextjs.org/docs/api-routes/introduction). In a real-world scenario this will be comimg from an external source. The created api endpoints are: `/api/steps` & `/api/brands`.
