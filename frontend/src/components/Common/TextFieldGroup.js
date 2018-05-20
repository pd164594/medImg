import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="row">
      <div className='input-field col s12'>
        <input className={classnames('',{'invalid': error})} id={name} name={name} type={type} value={value}
          onChange={onChange} disabled={disabled}/>
        <label htmlFor={name}>{label}</label>
        {info && <small>{info}</small>}
        {error && (<div>{error}</div>)}
      </div>
    </div>
  )
}

TextFieldGroup.PropTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
}

TextFieldGroup.defaultProps = {
  type: 'text',
}

export default TextFieldGroup;