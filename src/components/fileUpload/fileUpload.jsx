import React from 'react';
import {
  Typography, Box,
  Grid, Button,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import useCustomStyles from '../../styles/customStyle';
import mainStyles from '../../styles';

function FileUpload() {
  const classes = useCustomStyles(mainStyles);
  return (
    <Box>
      <Grid container justifyContent="space-between" flexWrap="nowrap">
        <Grid item container flexWrap="nowrap" alignItems="center">
          <Grid item>
            <InsertDriveFileOutlinedIcon className={classes.fileIcon} />
          </Grid>
          <Grid item>
            <Typography variant="h6" className={classes.success}>
              file_name.pdf
              {' '}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Button className={classes.btn} variant="outlined">
            <AddCircleOutlineIcon />
            <Typography variant="body" className={classes.hideOnMobile}>
              Upload PDF
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FileUpload;
