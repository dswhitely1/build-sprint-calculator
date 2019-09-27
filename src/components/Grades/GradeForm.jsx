import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  scores: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  header: {
    textAlign: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function GradeForm ({ initialState, data, header }) {

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [values, setValues] = useState(initialState);
  const [flex, setFlex] = useState(false);
  useEffect(() => {
    setValue(Object.values(values)
      .reduce((acc, item) => acc + item), 0);
  }, [values]);

  useEffect(()=>{
    if (Object.values(values).includes(1)) {
      setFlex(true)
    } else {
      setFlex(false);
    }
  }, [values])

  const handleChange = e => setValues(
    { ...values, [e.target.name]: e.target.value });
  return (
    <>
      <h1 className={classes.header}>{header}</h1>
      <div className={classes.scores}>
        <h2>{`Overall Score: ${value}`}</h2>
        <h2>{`Average Score: ${Math.round(value / data.length)}`}</h2>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => setValues(initialState)}
        >Reset</Button>
        {flex && <Typography variant="h3">Student Must Flex</Typography>}
      </div>

      <form
        className={classes.root}
        autoComplete='off'
      >
        {Object.keys(initialState)
          .map((keyValue, i) => (
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor={keyValue}>{data[i].title}</InputLabel>
              <Select
                value={values[`${keyValue}`]}
                onChange={handleChange}
                name={keyValue}
              >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
              </Select>
            </FormControl>
          ))}
      </form>
    </>
  );
}

export default GradeForm;