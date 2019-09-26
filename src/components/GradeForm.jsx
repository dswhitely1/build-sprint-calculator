import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  scores: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  header: {
    textAlign: 'center'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function GradeForm () {
  const initialState = {
    mvp: 0,
    team: 0,
    html: 0,
    responsive: 0,
    preprocessing: 0,
    javascript: 0,
  }
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    setValue(Object.values(values)
      .reduce((acc, item) => acc + item), 0);
  }, [values]);

  const handleChange = e => setValues(
    { ...values, [e.target.name]: e.target.value });
  return (
    <>
      <div>
        <h1 className={classes.header}>Unit 1 Grading Rubric</h1>
        <div className={classes.scores}>
          <h2>{`Overall Score: ${value}`}</h2>
          <h2>{`Average Score: ${Math.round(value / 6)}`}</h2>
          <Button variant="contained" color="secondary" onClick={()=>setValues(initialState)}>Reset</Button>
        </div>
      </div>
      <form
        className={classes.root}
        autoComplete='off'
      >
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='mvp'>MVP Work</InputLabel>
          <Select
            value={values.mvp}
            onChange={handleChange}
            name='mvp'
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='team'>Team Contribution</InputLabel>
          <Select
            value={values.team}
            onChange={handleChange}
            name='team'
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='html'>{`HTML/CSS`}</InputLabel>
          <Select
            value={values.html}
            onChange={handleChange}
            name='html'
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='responsive'>Responsive</InputLabel>
          <Select
            value={values.responsive}
            onChange={handleChange}
            name='responsive'
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='preprocessing'>Preprocessing</InputLabel>
          <Select
            value={values.preprocessing}
            onChange={handleChange}
            name='preprocessing'
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='javascript'>JavaScript</InputLabel>
          <Select
            value={values.javascript}
            onChange={handleChange}
            name='javascript'
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
          </Select>
        </FormControl>
      </form>

    </>
  );
}

export default GradeForm;