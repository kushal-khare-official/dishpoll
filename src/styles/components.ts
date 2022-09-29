export const components = {
  MuiCssBaseline: {
    styleOverrides: {
      a: {
        textDecoration: 'none',
        color: 'inherit',
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      size: 'small',
      variant: 'outlined',
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        zIndex: 0,
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        backgroundColor: 'white',
        borderRadius: '5px',
        '&:hover': {
          backgroundColor: 'rgb(250, 232, 241)',
          '@media (hover: none)': {
            backgroundColor: 'rgb(232, 241, 250)',
          },
        },
        '&.Mui-focused': {
          backgroundColor: 'rgb(250, 241, 232)',
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 600,
        textTransform: 'capitalize',
        minWidth: 0,
        minHeight: 0,
      },
    },
  },
}
