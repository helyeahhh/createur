import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { validateInput } from '../../utilities/validator';

//create Input Field component
const InputField = ({value, label, placeholder, styleClass, validators, type, onChange}) => {
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        const {value} = event.target;
        setError(validateInput(validators, value));
        onChange(value);
    };

    return (
        <div className={`form ${styleClass}`}>
            {label && <label htmlFor="app-input-field">{label}</label>}
            <input 
                type={type}
                value={value}
                className='form-styles' 
                placeholder={placeholder} 
                onChange={handleChange} 
            />
            {error && <span className='text-danger'>{error.message}</span>}
        </div>
    )
};

InputField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    styleClass: PropTypes.string,
    validators: PropTypes.array,
    types: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

InputField.defaultProps = {
    value: '',
    label: '',
    placeholder: '',
    styleClass: 'flex-col-12',
    type: 'text',
    validators: []
}

export default InputField;