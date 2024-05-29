const mainStyles = (theme) => ({
  container: {
    color: theme.palette.main,
  },
  btn: {
    minWidth: 'max-content',
    color: theme.palette.btn.main,
    fontWeight: '700',
    borderColor: theme.palette.btn.main,
    margin: '10px',
  },
  shadow: {
    boxShadow: `0px 0px 10px 0px ${theme.palette.background.main}`,
    borderRadius: '15px',
  },
  boxPadding: {
    padding: '1%',
    [theme.breakpoints.down('555')]: {
      padding: '2%',
    },
  },
  logo: {
    fontWeight: 900,
  },
  error: {
    color: 'red',
  },
  success: {
    color: theme.palette.icon.main,
    margin: '0 5px',
  },
  input: {
    border: 'none',
    width: '90%',
    '&:focus': {
      outline: 'none',
    },
  },
  fileIcon: {
    border: '1px solid',
    borderRadius: '5px',
    color: theme.palette.icon.main,
    fontSize: '2rem',
  },
  hideOnMobile: {
    [theme.breakpoints.down('555')]: {
      display: 'none',
    },
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default mainStyles;
