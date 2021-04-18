import TextField from '@material-ui/core/TextField';
  
  export function TextArea({ label }) {
    return (
          <TextField
            label={label}
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="outlined"
            placeholder="Placeholder"
            fullWidth
            margin="normal"
          />
    );
  }