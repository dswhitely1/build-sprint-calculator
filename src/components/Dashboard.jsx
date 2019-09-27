import React from 'react';
import Logo from '../images/Lambda_Logo.png'
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme=>({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh'
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: theme.spacing(2)
  }
}));
function Dashboard() {
  const classes=useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1">Unit Build Calculator</Typography>
      <img className={classes.image} src={Logo} alt="Lambda Logo" />
      <Typography variant="h4" component="h3">Click Menu to Begin</Typography>
    </div>
    )
}

export default Dashboard;