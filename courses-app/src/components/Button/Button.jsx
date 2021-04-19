import Button from '@material-ui/core/Button';

export default function Btn(props) {
    function handleClick() {
        props.onClick();
    }
    return (
        <Button variant="contained" color="secondary" style={{width: "max-content"}} onClick={()=>handleClick()}>
            {props.name}
        </Button>
    )
}