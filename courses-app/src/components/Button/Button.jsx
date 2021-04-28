import Button from '@material-ui/core/Button';

export default function Btn({ name, variant, color, onClick, type, style, icon }) {
    function handleClick() {
        if(onClick) {
            onClick()
        }
    }

    return (
        <Button 
            variant={variant} 
            color={color} 
            onClick={handleClick} 
            type={type} 
            startIcon={icon} 
            style={{width: "max-content"}} 
            className={style}
            >
            {name}
        </Button>
    )
}
