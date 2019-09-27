import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
}));

function GradeDetails ({ categories }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Objective</TableCell>
            <TableCell align='center'>1</TableCell>
            <TableCell align='center'>2</TableCell>
            <TableCell align='center'>3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category, i) => (
            <TableRow key={i}>
              <TableCell>{category.description}</TableCell>
              <TableCell>{category.one}</TableCell>
              <TableCell>{category.two}</TableCell>
              <TableCell>{category.three}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default GradeDetails;