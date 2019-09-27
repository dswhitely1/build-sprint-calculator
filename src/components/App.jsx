import React from 'react';
import { Route } from 'react-router-dom';
import GradeContainer from './Grades/GradeContainer';
import Dashboard from './Dashboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import {
  unit1Objectives,
  unit2Objectives,
  unit3Objectives,
  unit4JavaObjectives,
  unit4NodeObjectives,
} from '../data';
import Navigation from './Navigation';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0c3c78',
    },
    secondary: {
      main: '#bb1333',
    },
  },
});

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
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Navigation />
        <Container>
          <Route
            exact
            path='/'
            component={Dashboard}
          />
          <Route
            path='/web-unit-1'
            render={() => <GradeContainer categories={unit1Objectives} />}
          />
          <Route
            path='/web-unit-2'
            render={() => <GradeContainer categories={unit2Objectives} />}
          />
          <Route
            path='/web-unit-3'
            render={() => <GradeContainer categories={unit3Objectives} />}
          />
          <Route
            path='/web-unit-4-node'
            render={() => <GradeContainer categories={unit4NodeObjectives} />}
          />
          <Route
            path='/web-unit-4-java'
            render={() => <GradeContainer categories={unit4JavaObjectives} />}
          />
        </Container>
      </div>
    </MuiThemeProvider>
  );
}

export default App;