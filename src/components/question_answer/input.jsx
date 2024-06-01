import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import clsx from 'clsx';
import useCustomStyles from '../../styles/customStyle';
import Styles from '../../styles/components/question_answer';
import mainStyles from '../../styles';
import { questionAnswer, addQuestion } from '../../store/slices/questionAnswerSlice';

function Input() {
  const mainClasses = useCustomStyles(mainStyles);
  const classes = useCustomStyles(Styles);
  const [question, setQuestion] = useState('');

  const { loading, file } = useSelector((state) => state.questionAnswer);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    dispatch(addQuestion(question));
    await dispatch(questionAnswer({ question }));
    setQuestion('');
  };

  return (
    <Grid
      container
      className={clsx(
        mainClasses.shadow,
      )}
      justifyContent="space-between"
    >
      <Grid item display="flex" alignItems="center" xs={8} md={8} lg={10}>
        <input
          name="question"
          value={question}
          placeholder="Your Question..?"
          onChange={(e) => setQuestion(e.target.value)}
          className={clsx(classes.input)}
        />
      </Grid>
      <Grid item>
        <Button
          endIcon={<SendIcon className={classes.submit} />}
          disabled={loading || !file}
          onClick={() => handleSubmit()}
        />
      </Grid>
    </Grid>
  );
}

export default Input;
