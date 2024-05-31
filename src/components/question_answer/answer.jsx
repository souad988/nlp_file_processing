import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import Logo from '../logo/logo';
import useCustomStyles from '../../styles/customStyle';
import mainStyles from '../../styles';

function Answer(props) {
  const mainClasses = useCustomStyles(mainStyles);
  const { question, title } = props;
  return (
    <Grid container className={mainClasses.marginBottom}>
      <Grid item>
        <Logo title={title} outlined={question} />
      </Grid>
      <Grid item>
        answer
      </Grid>
    </Grid>
  );
}
Answer.propTypes = {
  title: PropTypes.string,
  question: PropTypes.bool,
};

Answer.defaultProps = {
  question: true,
  title: 'ai',
};

export default Answer;
