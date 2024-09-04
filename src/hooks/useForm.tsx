import { useState } from 'react';
import { EMAIL_REGEX } from '../utils/emailRegex';

const useForm = (inputValues = {}) => {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const emailSettings = {
    email: {
      regExp: EMAIL_REGEX,
      validationError: 'Некорректный адрес электронной почты',
    },
  };

  function checkEmailValidation(name, value) {
    if (!emailSettings[name]) {
      return;
    }

    if (!emailSettings[name].regExp.test(value)) {
      setErrors({ ...errors, [name]: emailSettings[name].validationError });
      setIsValid(false);
    }
  }

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: event.target.validationMessage });
    setIsValid(event.target.closest('.form').checkValidity());
    checkEmailValidation(name, value);
  };

  return {
    values,
    handleChange,
    setValues,
    errors,
    isValid,
    setErrors,
    setIsValid,
  };
};

export default useForm;
