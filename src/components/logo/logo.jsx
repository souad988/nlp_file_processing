import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Box } from '@mui/material';
import useCustomStyles from '../../styles/customStyle';
import Styles from '../../styles/components/logo';

function Logo(props) {
  const { title, outlined } = props;
  const classes = useCustomStyles(Styles);
  return (
    <Box className={
       clsx(outlined ? classes.boxOutlined : classes.boxNotOutlined,
         classes.box, classes.flexCenter)
}
    >
      <Box className={
        clsx(!outlined && classes.containerOutlined,
          classes.container, classes.flexCenter)
}
      >
        {title}
      </Box>
    </Box>
  );
}

Logo.propTypes = {
  title: PropTypes.string,
  outlined: PropTypes.bool,
};

Logo.defaultProps = {
  outlined: true,
  title: 'ai',
};
export default Logo;
