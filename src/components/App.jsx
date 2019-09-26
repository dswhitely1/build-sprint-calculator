import React from 'react';
import GradeDetails from './GradeDetails';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import GradeForm from './GradeForm';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

function App () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <GradeForm/>
        <GradeDetails/>
      </Container>

    </div>
  );
}

export default App;