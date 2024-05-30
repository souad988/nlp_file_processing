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
    <Grid container className={clsx(mainClasses.shadow, classes.container, mainClasses.boxPadding)}>
      <Grid item className={mainClasses.flexCenter}>
        <Logo />
        <Grid container className={classes.logoTextContainer}>
          <Grid item>
            {' '}
            <Typography variant="h4" className={clsx(mainClasses.extraBold, mainClasses.lineHeight)}>planet</Typography>
          </Grid>
          <Grid item container justifyContent="flex-end">
            <Grid item><Typography variant="caption">Formerly</Typography></Grid>
            <Grid item>
              {' '}
              <Typography variant="caption" className={clsx(mainClasses.bold, mainClasses.subtitle)}>Dphi</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item><FileUpload /></Grid>
    </Grid>
  );
}

export default Header;
