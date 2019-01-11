import { createGlobalStyle } from 'styled-components'
import media from './_helpers/media'

export default createGlobalStyle`
  body {
    overflow-x: hidden;

    font-family: 'Oswald', sans-serif;
    font-size: 1.5em;
    font-weight: 600;

    background-color: #010101;
  }

  h1, h2 {
    text-align: center;
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: 600;
    margin-bottom: 0.25em;
  }

  h2 {
    font-size: 3em;
    transform: rotate(0deg);

    ${media.tablet`
      font-size: 2em;
      margin-bottom: 0.5em;
      transform: rotate(-1deg);
    `}
  }

  [class*='blank_section__'] h2 {
    transform: rotate(-2deg);
  }

  p {
    margin-bottom: 1em;
  }

  a {
    color: #010101;
  }
`
