import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, CircularProgress } from '@mui/material';
import Logo from '../logo/logo';
import useCustomStyles from '../../styles/customStyle';
import mainStyles from '../../styles';

function Answer(props) {
  const mainClasses = useCustomStyles(mainStyles);
  const {
    question, title, text, loading,
  } = props;
  return (
    <Grid container className={mainClasses.marginBottom} flexWrap="nowrap">
      <Grid item>
        <Logo title={title} outlined={question} />
      </Grid>
      <Grid item>
        {loading
          ? <CircularProgress className={mainClasses.purple} />
          : (
            <Typography>
              {`- ${text}`}
            </Typography>
          )}
      </Grid>
    </Grid>
  );
}
Answer.propTypes = {
  title: PropTypes.string,
  question: PropTypes.bool,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Answer.defaultProps = {
  question: true,
  title: 'ai',
  loading: false,
};

export default Answer;
