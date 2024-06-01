import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Box } from '@mui/material';
import useCustomStyles from '../../styles/customStyle';
import Styles from '../../styles/components/question_answer';
import mainStyles from '../../styles';
import Input from './input';
import Answer from './answer';

function QuestionAnswer() {
  const classes = useCustomStyles(Styles);
  const mainClasses = useCustomStyles(mainStyles);
  const { questions, loading, answers } = useSelector((state) => state.questionAnswer);

  return (
    <Container className={classes.container}>
      <Box className={mainClasses.fullWidth}>
        {questions && questions.map((value, index) => (
          <Box key={`qacontainer${value}`}>
            <Answer title="S" question={false} text={value} />
            <Answer title="ai" question text={index >= answers.length ? '' : answers[index]} loading={index >= answers.length ? loading : false} />
          </Box>
        ))}
      </Box>
      <Input />
    </Container>
  );
}

export default QuestionAnswer;
