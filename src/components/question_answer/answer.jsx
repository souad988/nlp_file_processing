import React from 'react';
import { Grid } from '@mui/material';
import Logo from '../logo/logo';

function Answer() {
  return (
    <Grid container>
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        answer
      </Grid>
    </Grid>
  );
}

export default Answer;
