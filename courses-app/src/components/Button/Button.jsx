import Button from '@material-ui/core/Button';

export default function Btn(props) {
    return (
        <Button variant="contained" color="secondary" style={{width: "max-content"}}>
            {props.name}
        </Button>
    )
}