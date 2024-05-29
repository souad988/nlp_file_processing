const Styles = (theme) => ({
  container: {
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: `0px 0px 10px 0px ${theme.palette.main}`,
  },
  logo: {
    fontWeight: 900,
  },
  error: {
    color: 'red',
  },
  success: {
    color: 'green',
  },
  displayNone: {
    display: 'none',
  },
});

export default Styles;
