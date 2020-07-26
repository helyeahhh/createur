import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Button = ({styleClass, value, onClick, width}) => (
    <button 
        className={`button ${styleClass} ${width}`} 
        onClick={(event) => onClick(event)}
    >
        {value}
    </button>
);

Button.propTypes = {
    value: PropTypes.string.isRequired,
    width: PropTypes.string,
    styleClass: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    styleClass: 'btn-primary',
    width: 'width-100p'
}

export default Button;