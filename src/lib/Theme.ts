import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const mainTheme = {
  color: {
    backgroud: '#202035',
    primary: '#e4ded2',
    secondary: '#a4a4a4',
    button: '#dec492',
    buttonText: '#decfb3',
    buttonIcon: '#353749',
  },
};

export const passTheme: Theme = {
  color: {
    backgroud: '#104010',
    primary: '#e4ded2',
    secondary: '#202020',
    button: '#353749',
    buttonText: '#e4ded2',
    buttonIcon: '#202035',
  },
};
export const failTheme: Theme = {
  color: {
    backgroud: '#401010',
    primary: '#e4ded2',
    secondary: '#202020',
    button: '#353749',
    buttonText: '#e4ded2',
    buttonIcon: '#202035',
  },
};

export type Theme = typeof mainTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
