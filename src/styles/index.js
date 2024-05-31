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
    '&:hover': {
      borderColor: theme.palette.btn.main,
    },
    '&:active': {
      borderColor: theme.palette.btn.main,
    },
  },
  shadow: {
    boxShadow: `0px 0px 10px 0px ${theme.palette.shadow.main}`,
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
  purple: {
    color: theme.palette.background.extra,
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
  bold: {
    fontWeight: 700,
  },
  extraBold: {
    fontWeight: 900,
  },
  lineHeight: {
    lineHeight: '0.40',
  },
  subtitle: {
    color: theme.palette.icon.main,
  },
  fullWidth: {
    width: '100%',
  },
  marginBottom: {
    marginBottom: '3vh',
  },
  displayNone: {
    display: 'none',
  },

});

export default mainStyles;
