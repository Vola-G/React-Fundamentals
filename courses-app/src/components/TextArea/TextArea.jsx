import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
  
  export function TextArea({ label, value, onChange, helperText }) {
    function handleChange(event) {
      onChange(event.target.value);
    }
    return (
          <TextField
            label={label}
            multiline
            rows={4}
            defaultValue={value}
            variant="outlined"
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            onChange={handleChange}
            helperText={helperText}
          />
    );
  }

TextArea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  helperText: PropTypes.string
}
