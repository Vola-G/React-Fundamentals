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
