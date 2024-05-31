import React from 'react';
import { Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import Header from '../components/header/header';
import QuestionAnswer from '../components/question_answer/question_answer';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  return (
    <Box>
      <Header />
      <QuestionAnswer />
      <ToastContainer />
    </Box>
  );
}

export default Home;
