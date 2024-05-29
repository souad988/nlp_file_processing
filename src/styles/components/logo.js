const Styles = (theme) => ({
  container: {
    backgroundColor: theme.palette.icon.main,
    color: theme.palette.contrast,
    width: '28px',
    height: '28px',
    borderRadius: '25px',
    fontSize: '1.3rem',
    fontWeight: 900,
  },
  box: {
    backgroundColor: theme.palette.background.secondary,
    borderRadius: '30px',
    width: '30px',
    height: '30px',
  },
  boxOutlined: {
    width: '30px',
    height: '30px',
    border: `2px solid ${theme.palette.icon.main}`,
    borderRadius: '30px',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Styles;
