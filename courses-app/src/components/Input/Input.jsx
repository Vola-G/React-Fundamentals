import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

export default function Input({ label, value, inputType, onChange, style, helperText }) {

  function handleChange(event) {
    onChange(event.target.value) 
  }

    return (
        <TextField
          label={label}
          variant="outlined"
          size="small"
          type={inputType}
          value={value}
          className={style}
          onChange={handleChange}
          helperText={helperText}
        />
    )
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  inputType: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.string,
  helperText: PropTypes.string
}
