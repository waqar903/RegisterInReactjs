import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './form-select.styles.scss';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const classes = useStyles();
  const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };


const FormSelect = ({ handleChange, label, ...otherProps }) => (
  
  <div className='group'>
    <FormControl className={classes.formControl}>
<InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={'age'}
          onChange={handleChange}
        >
          <MenuItem value={10}>{otherProps.value}</MenuItem>
        </Select>
      </FormControl>
  </div>
);

export default FormSelect;
