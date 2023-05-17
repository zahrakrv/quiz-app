import { useState } from 'react';
const useFormValidation = () => {
  const [errors, setErrors] = useState({});
  const validateForm = (values) => {
    let newErrors = {};
    if (values.username.length < 2) {
      newErrors.username = 'Username should be at least two characters.';
    }
    if (!values.email.endsWith('@gmail.com')) {
      newErrors.email = 'Email should end with @gmail.com.';
    }
    if (values.password.length < 4) {
      newErrors.password = 'Password should have at least four characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  return { errors, validateForm };
};
export default useFormValidation;
