import React from 'react';
import { Container } from '@mui/material';
import useCustomStyles from '../../styles/customStyle';
import Styles from '../../styles/components/question_answer';
import Question from './question';
import Answer from './answer';

function QuestionAnswer() {
  const classes = useCustomStyles(Styles);
  return (
    <Container className={classes.container}>
      <Answer />
      <Question />
    </Container>
  );
}

export default QuestionAnswer;
