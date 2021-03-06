const colors = {
  purples: [
    'rgb(196, 53, 232)',
    'rgba(196, 53, 232, 0.5)',
    'rgba(196, 53, 232, 0.2)',
    '#74108d',
    '#4f0b60'
  ],
  whites: [
    'rgb(255, 255, 255)',
    'rgba(255, 255, 255, 0.6)',
    'rgba(255, 255, 255, 0.4)'
  ],
  blacks: [
    'rgb(0, 0, 0)',
    'rgba(0, 0, 0, 0.9)',
    'rgba(0, 0, 0, 0.6)',
    '#1a1a1a',
    '#262626'
  ],
  greys: ['#333333', '#808080', '#b3b3b3'],
  blues: ['#1da1f2', '#0077b5']
}

const theme = {
  colors: {
    primary: colors.purples[0],
    secondary: colors.purples[1],
    tertiary: colors.purples[2],
    white: colors.whites[0],
    black: colors.blacks[0],
    twitter: colors.blues[0],
    linkedin: colors.blues[1],
    ...colors
  },
  fonts: {
    primary: "'Saira', sans-serif"
  },
  sizes: {
    xl: '2.5em',
    l: '1.5em',
    m: '1.125em',
    n: '1em',
    s: '0.9em',
    xs: '0.75em',
    xxs: '0.6em'
  }
}

export default theme
