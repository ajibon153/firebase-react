import React, { useEffect, useState } from 'react';

const ContactFrom = ({ addOrEdit }) => {
  const initialField = {
    fullName: '',
    mobile: '',
    email: '',
    address: '',
  };
  const [values, setValues] = useState(initialField);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit', values);
    addOrEdit(values);
  };

  return (
    <form autoComplete='off' onSubmit={handleSubmit}>
      <div className='form-group input-group'>
        <div className='input-group-prepend'>
          <div className='input-group-text'>
            <i className='fas fa-user'></i>
          </div>
        </div>
        <input
          className='form-control'
          placeholder='Full Name'
          name='fullName'
          value={values.fullName}
          onChange={handleChange}
        />
      </div>
      <div className='form row'>
        <div className='form-group input-group col-md-6'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <i className='fas fa-mobile-alt'></i>
            </div>
          </div>
          <input
            className='form-control'
            placeholder='Mobile'
            name='mobile'
            value={values.mobile}
            onChange={handleChange}
          />
        </div>
        <div className='form-group input-group col-md-6'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <i className='fas fa-envelope'></i>
            </div>
          </div>
          <input
            className='form-control'
            placeholder='Email'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='form-group'>
        <textarea
          className='form-control'
          placeholder='Address'
          name='address'
          value={values.address}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='submit'
          value='Save'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default ContactFrom;
