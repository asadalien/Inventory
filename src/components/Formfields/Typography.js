import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Typographe({heading}) {
  return (
    <div>
      <ThemeProvider theme={theme}>
  <Typography variant="h5" color="primary">{heading}</Typography>
        
      </ThemeProvider>
    </div>
  );
}