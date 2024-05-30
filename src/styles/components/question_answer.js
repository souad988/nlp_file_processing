const Styles = (theme) => ({
  container: {
    marginTop: '5vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80vh',
  },
  inputContainer: {
    backgroundColor: theme.palette.background.secondary,
  },
  input: {
    border: 'none',
    background: 'none',
    paddingLeft: '5%',
    width: '90%',
    '&:focus': {
      outline: 'none',
    },
  },
});

export default Styles;
