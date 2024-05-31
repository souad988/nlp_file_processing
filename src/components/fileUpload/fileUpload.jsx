import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography, Box,
  Grid, Button, CircularProgress,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import useCustomStyles from '../../styles/customStyle';
import mainStyles from '../../styles';
import { uploadFile } from '../../store/slices/fileSlice';
import validations from './fileUploadScripts';

function FileUpload() {
  const classes = useCustomStyles(mainStyles);
  const dispatch = useDispatch();
  const {
    file, status, loading, error,
  } = useSelector((state) => state.file);

  const [inputValue, setInputValue] = useState(null);
  const [inputError, setInputError] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);

  console.log('status,loading,error', status, loading, error);
  console.log('inputError, touched,value,file', inputError, inputTouched, inputValue, file);
  const fileInputRef = useRef();

  const handleFileButtonClick = (fileInput) => {
    fileInput.current.click();
  };

  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    setInputError(null);
    setInputTouched(true);
    setInputValue(file);
    validations(file, setInputError);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInputTouched(false);
    await dispatch(uploadFile(inputValue));
    setInputValue(null);
  };

  return (
    <Box>
      {loading ? (
        <CircularProgress className={classes.purple} />
      )
        : (
          <Grid container justifyContent="space-between" flexWrap="nowrap">
            <Grid item container flexWrap="nowrap" alignItems="center">
              {file && !inputTouched ? (
                <>
                  <Grid item>
                    <InsertDriveFileOutlinedIcon
                      className={
                clsx(classes.fileIcon)
}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" className={clsx(classes.success)}>
                      {file.filename}
                    </Typography>
                  </Grid>
                </>
              )
                : !inputError && (
                  <Grid item>
                    <Typography variant="h6" className={clsx(classes.purple)}>
                      {inputValue.name}
                    </Typography>
                  </Grid>
                )}

            </Grid>
            <Grid item display="flex">
              <Button
                className={
                clsx(!inputValue || inputError || !inputTouched ? classes.displayNone
                  : classes.btn)
}
                variant="outlined"
                onClick={(e) => (handleSubmit(e))}
              >
                <FileUploadIcon />
              </Button>
              <Button
                className={classes.btn}
                disableRipple
                disableFocusRipple
                variant="outlined"
                onClick={() => (handleFileButtonClick(fileInputRef))}
              >
                <AddCircleOutlineIcon />

                <Typography variant="body" className={classes.hideOnMobile}>
                  Upload PDF
                </Typography>
              </Button>
              <input
                ref={fileInputRef}
                className={classes.displayNone}
                aria-hidden="true"
                type="file"
                accept="pdf"
                name="file"
                onChange={(event) => {
                  handleChange(event);
                }}
              />
            </Grid>
          </Grid>
        )}
    </Box>
  );
}

export default FileUpload;
