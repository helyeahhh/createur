import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Card = ({styleClass, value, onClick,}) => (
    <button className={`button ${styleClass}`} onClick={(event) => onClick(event)}>
        {value}
    </button>
);

Card.propTypes = {
    value: PropTypes.string.isRequired,
    styleClass: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

Card.defaultProps = {
    styleClass: 'btn-primary'
}

export default Card;