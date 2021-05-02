import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';

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

Btn.propTypes = {
    name: PropTypes.string,
    variant: PropTypes.string, 
    color: PropTypes.string,
    onClick: PropTypes.func, 
    type: PropTypes.string,
    style: PropTypes.string, 
    icon: PropTypes.string
  }
  