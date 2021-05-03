import PropTypes from 'prop-types';

export const UserBar = ({ user }) => {
    return (
        <>
            <h4 className={"navbar-user"}>{user}</h4>
        </>
    ) 
}

UserBar.propTypes = {
    user: PropTypes.string
}
