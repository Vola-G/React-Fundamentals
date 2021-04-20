import TextField from '@material-ui/core/TextField';
  
  export function TextArea({ label, value, onChange }) {
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
          />
    );
  }