import React, { useState } from 'react';
import './DynamicForm.css';

const DynamicForm = ({ formTitle, fields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="xd-form-wrapper">
      <form className="xd-main-form" onSubmit={handleSubmit}>
        <div className="xd-fields-container">
          {fields.map((field, index) => (
            <div 
              key={index} 
              className={`xd-field-group ${field.halfWidth ? 'xd-half' : 'xd-full'}`}
            >
              <label className="xd-label">
                {field.label} {field.required && <span className="xd-required">*</span>}
                {field.icon && <span className="xd-label-icon">{field.icon}</span>}
              </label>

              {field.type === 'select' ? (
                <div className="xd-select-wrapper">
                  <select
                    name={field.name}
                    className="xd-input xd-select"
                    onChange={handleChange}
                    required={field.required}
                  >
                    <option value="">{field.placeholder}</option>
                    {field.options.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <div className="xd-dropdown-arrow">▼</div>
                </div>
              ) : (
                <input
                  type={field.type || 'text'}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="xd-input"
                  onChange={handleChange}
                  required={field.required}
                />
              )}
            </div>
          ))}
        </div>

        <div className="xd-footer">
          <button type="submit" className="xd-submit-btn">
            Send application
          </button>
          <p className="xd-policy-text">
            By clicking <strong>Send application</strong>, you agree to our 
            <a href="#"> User Agreement</a>, 
            <a href="#"> Privacy Policy</a>, and 
            <a href="#"> Cookie Policy</a>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;