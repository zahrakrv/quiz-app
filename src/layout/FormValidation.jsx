import React, { useState } from 'react';
import useFormValidation from './CustomHook';

const MyFormComponent = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { errors, validateForm } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = { username, email, password };
    const isValid = validateForm(values);

    if (isValid) {
      console.log('Form submitted successfully');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {' '}
      <div>
        <label>Username:</label>{' '}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <span>{errors.username}</span>}{' '}
      </div>{' '}
      <div>
        <label>Email:</label>{' '}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}{' '}
      </div>{' '}
      <div>
        <label>Password:</label>{' '}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span>{errors.password}</span>}{' '}
      </div>
      <button type="submit">Submit</button>{' '}
    </form>
  );
};

export default MyFormComponent;
