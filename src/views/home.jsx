import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/header/header';
import QuestionAnswer from '../components/question_answer/question_answer';

function Home() {
  return (
    <Box>
      <Header />
      <QuestionAnswer />
    </Box>
  );
}

export default Home;
