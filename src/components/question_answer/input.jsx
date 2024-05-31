import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import clsx from 'clsx';
import useCustomStyles from '../../styles/customStyle';
import Styles from '../../styles/components/question_answer';
import mainStyles from '../../styles';

function Input() {
  const mainClasses = useCustomStyles(mainStyles);
  const classes = useCustomStyles(Styles);
  const [question, setQuestion] = useState('');

  return (
    <Grid
      container
      className={clsx(
        mainClasses.shadow,
      )}
      justifyContent="space-between"
    >
      <Grid item display="flex" alignItems="center">
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
          endIcon={<SendIcon />}
          disabled
        />
      </Grid>
    </Grid>
  );
}

export default Input;
