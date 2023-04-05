import { createGlobalStyle } from 'styled-components';

// Define the color palettes
// const colorPalette = {
//   blue: '#002E94',
//   navy: '#083AA9',
//   beige: '#E1CEB5',
//   peach: '#FFE7CC',
// };

// // Define the color theme object
// const colorTheme = {
//   primary: colorPalette.blue,
//   secondary: colorPalette.navy,
//   background: colorPalette.beige,
//   accent: colorPalette.peach,
// };

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: inherit;
  }

  body {
    font-family: Georgia, sans-serif;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    height: auto;
  }
`;

export default GlobalStyles;
