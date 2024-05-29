import React from 'react';
import { Grid, Typography } from '@mui/material';
import clsx from 'clsx';
import FileUpload from '../fileUpload/fileUpload';
import useCustomStyles from '../../styles/customStyle';
import Styles from '../../styles/components/header';
import mainStyles from '../../styles';
import Logo from '../logo/logo';

function Header() {
  const classes = useCustomStyles(Styles);
  const mainClasses = useCustomStyles(mainStyles);

  return (
    <Grid container className={clsx(classes.container, mainClasses.boxPadding)}>
      <Grid item className={mainClasses.flexCenter}>
        <Logo />
        <Typography variant="h5">planet</Typography>
      </Grid>
      <Grid item><FileUpload /></Grid>
    </Grid>
  );
}

export default Header;
