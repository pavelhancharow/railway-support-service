import { createGlobalStyle } from 'styled-components';
import { styleVars } from './styleVars';

const { dark } = styleVars;

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

b {
  font-weight: inherit;
}

ul {
  list-style: none;
}

select {
  appearance: none;
}

a,
button,
input,
label,
select,
fieldset {
  border: none;
  border-style: none;
  background-color: transparent;
  outline: none;
  color: inherit;
  cursor: pointer;
}

body {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: ${dark};
}

#root {
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 30%);
  margin: 0 auto;
  max-width: 61.25rem;
  overflow: hidden;
  position: relative;
}`;
