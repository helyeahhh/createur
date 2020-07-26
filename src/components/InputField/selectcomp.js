import React from 'react';
import PropTypes from 'prop-types';


const SelectField = ({value, data, label, styleClass, onChange}) => {

    const handleChange = (event) => {
        const {value} = event.target;
        onChange(value);
    };

    return (
        <div className={`form ${styleClass}`}>
            {label && <label htmlFor="app-input-field">{label}</label>}
            <select 
                value={value} 
                className='form-styles' 
                onChange={handleChange} 
            >
                {data.map((item, key) => (
                    <option 
                        key={key} 
                        value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

SelectField.propTypes = {
    value: PropTypes.string,
    laceholder: PropTypes.string,
    data: PropTypes.array.isRequired,
    styleClass: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

SelectField.defaultProps = {
    value: '',
    placeholder: '',
    styleClass: 'flex-col-12'
};

export default SelectField;