import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  marginRight: {
    marginRight: theme.spacing(2),
    width: "auto"
  }
}));

export default function Input({ label, value, onChange }) {
  const classes = useStyles();
  function handleChange(event) {
    onChange(event.target.value);
  }
    return (
        <TextField
          label={label}
          id="outlined-size-small"
          variant="outlined"
          size="small"
          value={value}
          className={classes.marginRight}
          onChange={handleChange}
        />
    )
}