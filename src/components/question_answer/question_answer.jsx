import React from 'react';
import { Container, Box } from '@mui/material';
import useCustomStyles from '../../styles/customStyle';
import Styles from '../../styles/components/question_answer';
import mainStyles from '../../styles';
import Input from './input';
import Answer from './answer';

function QuestionAnswer() {
  const classes = useCustomStyles(Styles);
  const mainClasses = useCustomStyles(mainStyles);
  return (
    <Container className={classes.container}>
      <Box className={mainClasses.fullWidth}>
        <Answer />
        <Answer title="S" question={false} />
        <Answer />
      </Box>
      <Input />
    </Container>
  );
}

export default QuestionAnswer;
