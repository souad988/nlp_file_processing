import React from 'react';
import clsx from 'clsx';
import { Box } from '@mui/material';
import useCustomStyles from '../../styles/customStyle';
import Styles from '../../styles/components/logo';

function Logo() {
  const classes = useCustomStyles(Styles);
  return (
    <Box className={clsx(classes.boxOutlined, classes.flexCenter)}>
      <Box className={clsx(classes.container, classes.flexCenter)}>
        ai
      </Box>
    </Box>
  );
}

export default Logo;
